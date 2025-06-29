Here is the database schema in both Markdown table format and as a JSON object:

---

## Database Schema

### patient

| Column              | Type                        | Constraints                | Description                |
|---------------------|-----------------------------|----------------------------|----------------------------|
| patient_id          | text                        | PRIMARY KEY, NOT NULL      | Unique patient identifier  |
| full_name           | text                        |                            | Patient's full name        |
| date_of_birth       | date                        |                            | Date of birth              |
| gender              | text                        |                            | Gender                     |
| occupation          | text                        |                            | Occupation                 |
| address             | text                        |                            | Address                    |
| contact_information | text                        |                            | Contact information        |
| location            | text                        |                            | Location                   |
| created_at          | timestamp with time zone    | DEFAULT now()              | Creation timestamp         |
| updated_at          | timestamp with time zone    | DEFAULT now()              | Last update timestamp      |

### status

| Column         | Type                        | Constraints                                    | Description                        |
|----------------|-----------------------------|------------------------------------------------|------------------------------------|
| id             | bigint                      | PRIMARY KEY, GENERATED ALWAYS AS IDENTITY, NOT NULL | Unique status identifier           |
| created_at     | timestamp with time zone    | NOT NULL, DEFAULT now()                        | Creation timestamp                 |
| current_status | jsonb                       |                                                | Current status (JSON)              |
| history        | ARRAY                       |                                                | Status history (array)             |
| patient_id     | text                        | FOREIGN KEY REFERENCES patient(patient_id)      | Linked patient identifier          |

---

## JSON Object Representation

```json
{
  "tables": [
    {
      "name": "patient",
      "columns": [
        {"name": "patient_id", "type": "text", "constraints": ["PRIMARY KEY", "NOT NULL"]},
        {"name": "full_name", "type": "text"},
        {"name": "date_of_birth", "type": "date"},
        {"name": "gender", "type": "text"},
        {"name": "occupation", "type": "text"},
        {"name": "address", "type": "text"},
        {"name": "contact_information", "type": "text"},
        {"name": "location", "type": "text"},
        {"name": "created_at", "type": "timestamp with time zone", "constraints": ["DEFAULT now()"]},
        {"name": "updated_at", "type": "timestamp with time zone", "constraints": ["DEFAULT now()"]}
      ]
    },
    {
      "name": "status",
      "columns": [
        {"name": "id", "type": "bigint", "constraints": ["PRIMARY KEY", "GENERATED ALWAYS AS IDENTITY", "NOT NULL"]},
        {"name": "created_at", "type": "timestamp with time zone", "constraints": ["NOT NULL", "DEFAULT now()"]},
        {"name": "current_status", "type": "jsonb"},
        {"name": "history", "type": "ARRAY"},
        {"name": "patient_id", "type": "text", "constraints": ["FOREIGN KEY REFERENCES patient(patient_id)"]}
      ]
    }
  ]
}
```

