// Get elements
const heroSection = document.getElementById("hero-section");
const formsSection = document.getElementById("forms-section");
const showFormsBtn = document.getElementById("show-forms-btn");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const showSignupBtn = document.getElementById("show-signup-btn");
const showLoginBtn = document.getElementById("show-login-btn");

// Show forms section and hide hero section
showFormsBtn.addEventListener("click", () => {
  heroSection.classList.add("hidden");
  formsSection.classList.remove("hidden");
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

// Toggle between Sign-Up and Log-In forms
showSignupBtn.addEventListener("click", () => {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  showSignupBtn.classList.add("bg-blue-600", "text-white");
  showSignupBtn.classList.remove("bg-gray-300", "text-gray-700");
  showLoginBtn.classList.add("bg-gray-300", "text-gray-700");
  showLoginBtn.classList.remove("bg-blue-600", "text-white");
});

showLoginBtn.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
  showLoginBtn.classList.add("bg-blue-600", "text-white");
  showLoginBtn.classList.remove("bg-gray-300", "text-gray-700");
  showSignupBtn.classList.add("bg-gray-300", "text-gray-700");
  showSignupBtn.classList.remove("bg-blue-600", "text-white");
});