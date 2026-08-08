# API Automation Testing Project (ReqRes API)

This project contains automated API test suites for the [ReqRes API](https://reqres.in/) built using **Postman** and executed via **Newman** from the command line. Detailed HTML execution reports are automatically generated after every run using `newman-reporter-htmlextra`.

---

## 📌 Project Overview

- **Target API:** [ReqRes REST API](https://reqres.in/)
- **Testing Tool:** Postman
- **CLI Runner:** Newman
- **Reporting:** Newman HTMLExtra Reporter / Allure
- **Version Control:** Git & GitHub

### Covered Scenarios & Validations
1. **User Authentication (POST `/api/login`)**: Verifies successful login and stores authorization token.
2. **Fetch User Details (GET `/api/users/2`)**: Validates user data retrieval and schema.
3. **Update Profile (PUT `/api/users/2`)**: Validates full profile update and checks `updatedAt` timestamp.
4. **Partial Update (PATCH `/api/users/2`)**: Verifies single field updates and `updatedAt` timestamp.
5. **Delete User (DELETE `/api/users/2`)**: Verifies resource deletion returning HTTP status `204 No Content`.

Every request includes mandatory HTTP response status code assertions and JSON schema/property validations.

---

## 🛠️ Prerequisites

Make sure you have the following installed on your machine:

1. **Node.js** (v14 or higher) — [Download Node.js](https://nodejs.org/)
2. **Git** — [Download Git](https://git-scm.com/)

Verify installations in your terminal:
```bash
node -v
npm -v
git --version
```

---

## ⚙️ Installation & Setup

1. **Clone this repository:**
   ```bash
   git clone <YOUR_GITHUB_REPOSITORY_URL>
   cd Automation-Assessment
   ```

2. **Install required CLI packages globally:**
   ```bash
   npm install -g newman
   npm install -g newman-reporter-htmlextra
   npm install -g newman-reporter-allure
   ```

---

## 🚀 Execution Guide

### 1. Execute Postman Collection & Generate HTML Report
Run the following command from the root directory of the project:

```bash
newman run "API-Automation/API Automation.postman_collection.json" -r htmlextra
```

> **Note:** The generated report will be saved inside a new `newman/` folder as an `.html` file. Double-click the HTML file to open it in any web browser.

---

### 2. Execute with Allure Reporter (Optional)
If you wish to collect Allure results:

```bash
newman run "API-Automation/API Automation.postman_collection.json" -r allure
```

To view the Allure report (requires [Java JDK 17+](https://www.oracle.com/java/technologies/downloads/) installed):
```bash
npm install -g allure-commandline
allure serve allure-results
```

---

## 📁 Repository Structure

```text
.
├── API-Automation/
│   └── API Automation.postman_collection.json   # Postman Collection
├── newman/                                       # Generated HTML Reports
├── README.md                                     # Documentation
└── package.json                                  # Project Metadata & Scripts
```

---

## 📄 Assertion Details

- **Status Code Validation:** Ensures HTTP Status `200 OK` for GET/PUT/PATCH/POST and `204 No Content` for DELETE requests.
- **Response Time Verification:** Checks that response latencies remain within acceptable thresholds.
- **Data Integrity Check:** Validates expected properties (`name`, `job`, `updatedAt`, `token`, etc.) in response payloads.
