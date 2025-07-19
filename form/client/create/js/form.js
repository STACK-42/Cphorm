console.log('Cphorm dynamic form JS loaded');

// DOM Elements
const customizeBtn = document.getElementById("customize-btn");
const configPanel = document.getElementById("config-panel");
const btnWrapper = document.getElementById("customize-button-wrapper");
const formTitle = document.getElementById("form-title");
const selectorsContainer = document.getElementById('field-selectors');
const form = document.getElementById('dynamic-form');
const dynamicFields = document.getElementById('dynamic-fields');
const customFieldForm = document.getElementById('custom-field-form');
const customFieldName = document.getElementById('custom-field-name');
const customFieldType = document.getElementById('custom-field-type');
const customFieldOptions = document.getElementById('custom-field-options');
const notification = document.getElementById('notification');
const backBtn = document.getElementById('back-btn');
const submitTemplateBtn = document.getElementById('submit-template-btn');

// Field definitions
const FIELD_DEFS = {
  full_name: { label: "Full Name", placeholder: "Enter full name" },
  age: { label: "Age", placeholder: "Enter age", type: "number" },
  presenting_complaint: { label: "Presenting Complaint", placeholder: "Describe complaint" },
  medical_history: { label: "Medical History", placeholder: "Enter medical history" },
  medications: { label: "Medications", placeholder: "Enter medications" },
  diagnosis: {
    label: "Diagnosis",
    type: "select",
    options: ['Cholera', 'Malaria(CL)', 'Malaria(VL)', 'Dengue Fever', 'Measles', 'Leishmaniasis']
  },
  city: {
    label: "City",
    type: "select",
    options: [
      "Khartoum", "Port Sudan", "Kassala", "Nyala", "El Obeid",
      "Dongola", "Kadugli", "Wad Madani", "Geneina", "Sennar"
    ]
  },
  sex: {
    label: "Sex",
    type: "select",
    options: ["male", "female"]
  },
  date_of_birth: {
    label: "Date of Birth",
    type: "date",
    placeholder: "Select date of birth"
  },
};

// Template form fields
const TEMPLATE_FIELDS = `
  <div class="flex flex-col gap-4">
    <label class="block">
      <span class="text-gray-700">Name</span>
      <input type="text" name="name" class="mt-1 block w-full rounded-md border border-gray-300 p-2" />
    </label>
    <label class="block">
      <span class="text-gray-700">Age</span>
      <input type="number" name="age" class="mt-1 block w-full rounded-md border border-gray-300 p-2" />
    </label>
    <label class="block">
      <span class="text-gray-700">Sex</span>
      <select name="sex" class="mt-1 block w-full rounded-md border border-gray-300 p-2">
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </label>
    <label class="block">
      <span class="text-gray-700">Main Complaints</span>
      <textarea name="main_complaints" class="mt-1 block w-full rounded-md border border-gray-300 p-2"></textarea>
    </label>
    <label class="block">
      <span class="text-gray-700">Final Diagnosis</span>
      <textarea name="final_diagnosis" class="mt-1 block w-full rounded-md border border-gray-300 p-2"></textarea>
    </label>
    <label class="block">
      <span class="text-gray-700">Doctor Discharge Notes</span>
      <textarea name="doctor_discharge_notes" class="mt-1 block w-full rounded-md border border-gray-300 p-2"></textarea>
    </label>
  </div>
`;

// Initialize the app
function init() {
  // Set up event listeners
  customizeBtn.addEventListener('click', toggleConfigPanel);
  selectorsContainer.addEventListener('change', generateFormFields);
  form.addEventListener('submit', handleFormSubmit);
  customFieldType.addEventListener('change', toggleOptionsField);
  customFieldForm.addEventListener('submit', handleCustomFieldSubmit);
  backBtn.addEventListener('click', showTemplateForm);
  submitTemplateBtn.addEventListener('click', submitTemplateForm);
  window.addEventListener('online', trySync);
  
  // Try to sync if online
  if (navigator.onLine) trySync();
}

// Toggle configuration panel
function toggleConfigPanel() {
  configPanel.classList.remove("hidden");
  btnWrapper.classList.add("hidden");
  formTitle.textContent = "Form Preview";
  dynamicFields.innerHTML = "";
  backBtn.classList.remove("hidden");
}

// Show template form
function showTemplateForm() {
  configPanel.classList.add("hidden");
  btnWrapper.classList.remove("hidden");
  formTitle.textContent = "Template Form";
  dynamicFields.innerHTML = TEMPLATE_FIELDS;
  backBtn.classList.add("hidden");
}

// Generate form fields based on selections
function generateFormFields() {
  const selectedKeys = Array.from(selectorsContainer.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.dataset.key);

  dynamicFields.innerHTML = '';

  selectedKeys.forEach(key => {
    const field = FIELD_DEFS[key];
    if (!field) return;
    const wrapper = document.createElement('label');
    wrapper.className = "flex flex-col min-w-40 flex-1";
    let inputHTML = "";

    if (field.type === "select") {
      inputHTML = `<select name="${key}" class="form-select rounded-lg border border-[#cedbe8] bg-slate-50 h-14 p-[15px] text-base font-normal leading-normal">
        <option value="">Select ${field.label}</option>
        ${field.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
      </select>`;
    } else if (field.type === "date") {
      inputHTML = `<input type="date" name="${key}" class="form-input rounded-lg border border-[#cedbe8] bg-slate-50 h-14 p-[15px] text-base font-normal leading-normal" placeholder="${field.placeholder || ''}" />`;
    } else {
      inputHTML = `<input name="${key}" type="${field.type || 'text'}" placeholder="${field.placeholder || ''}" class="form-input rounded-lg border border-[#cedbe8] bg-slate-50 h-14 p-[15px] text-base font-normal leading-normal" />`;
    }

    wrapper.innerHTML = `<p class="text-[#0d141c] text-base font-medium leading-normal pb-2">${field.label}</p>${inputHTML}`;
    dynamicFields.appendChild(wrapper);
  });
}

// Handle template form submission
async function submitTemplateForm(e) {
  e.preventDefault();
  const formData = {};
  new FormData(form).forEach((value, key) => formData[key] = value);

  // Save to IndexedDB
  await saveFormLocally({
    ...formData,
    timestamp: Date.now()
  });

  notification.textContent = "Template form saved locally! Will sync when online.";
  notification.classList.remove('hidden');
  setTimeout(() => {
    notification.classList.add('hidden');
    form.reset();
  }, 2000);
}

// IndexedDB setup
const DB_NAME = 'cphorm_db';
const STORE_NAME = 'form_submissions';
let db;

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = function(e) {
      db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = function(e) {
      db = e.target.result;
      resolve(db);
    };
    request.onerror = function(e) {
      reject(e);
    };
  });
}

async function saveFormLocally(data) {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  tx.objectStore(STORE_NAME).add(data);
  return tx.complete;
}

async function getAllLocalForms() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = reject;
  });
}

async function clearUploadedForms(ids) {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  ids.forEach(id => store.delete(id));
  return tx.complete;
}

// Handle form submission
async function handleFormSubmit(e) {
  e.preventDefault();
  const formData = {};
  new FormData(form).forEach((value, key) => formData[key] = value);

  // Save to IndexedDB
  await saveFormLocally({
    ...formData,
    timestamp: Date.now()
  });

  notification.textContent = "Form saved locally! Will sync when online.";
  notification.classList.remove('hidden');
  setTimeout(() => {
    notification.classList.add('hidden');
    form.reset();
    selectorsContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    dynamicFields.innerHTML = '';
  }, 2000);
}

// Sync logic: try to upload when online
async function trySync() {
  const forms = await getAllLocalForms();
  if (!forms.length) return;

  // TODO: Replace with your real API endpoint
  const API_URL = 'https://your-api-url.com/submit';

  // Try to upload each form
  const uploadedIds = [];
  for (const form of forms) {
    try {
      // Example: POST the form data
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        uploadedIds.push(form.id);
      }
    } catch (err) {
      // If offline or error, skip
      break;
    }
  }
  // Remove successfully uploaded forms
  if (uploadedIds.length) await clearUploadedForms(uploadedIds);
}

// Toggle options field visibility
function toggleOptionsField() {
  if (customFieldType.value === 'select') {
    customFieldOptions.classList.remove('hidden');
    customFieldOptions.required = true;
  } else {
    customFieldOptions.classList.add('hidden');
    customFieldOptions.required = false;
  }
}

// Handle custom field submission
function handleCustomFieldSubmit(e) {
  e.preventDefault();
  const key = customFieldName.value.trim().toLowerCase().replace(/\s+/g, '_');
  const label = customFieldName.value.trim();
  const type = customFieldType.value;
  let fieldDef = { label, type };

  if (type === 'select') {
    const options = customFieldOptions.value.split(',').map(opt => opt.trim()).filter(Boolean);
    if (options.length === 0) {
      alert('Please provide at least one option for the select field.');
      return;
    }
    fieldDef.options = options;
  } else if (type === 'text' || type === 'number' || type === 'date') {
    fieldDef.placeholder = `Enter ${label.toLowerCase()}`;
  }

  // Add to FIELD_DEFS
  FIELD_DEFS[key] = fieldDef;

  // Add a new checkbox to selectors
  const labelElem = document.createElement('label');
  labelElem.className = "flex gap-x-3 py-3 flex-row";
  labelElem.innerHTML = `
    <input type="checkbox" data-key="${key}" class="h-5 w-5 rounded border-[#cedbe8] border-2 bg-transparent text-[#0c7ff2] checked:bg-[#0c7ff2] checked:border-[#0c7ff2] focus:ring-0 focus:ring-offset-0 focus:border-[#cedbe8] focus:outline-none" />
    <p class="text-[#0d141c] text-base font-normal leading-normal">${label}</p>
  `;
  selectorsContainer.appendChild(labelElem);

  // Reset form
  customFieldForm.reset();
  customFieldOptions.classList.add('hidden');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);