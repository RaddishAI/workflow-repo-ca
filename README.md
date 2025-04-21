# Workflow repo for the CA

Awesome — based on that image and your earlier request, here's the **full and final `README.md` file** (Markdown format) you can copy directly into your project root:

---

````markdown
# Workflow CA – Noroff Assignment

### README was created with help from ChatGPT.

This project is a code quality and testing workflow setup for a Noroff frontend course assignment. It includes linting, formatting, unit testing, and end-to-end testing using modern tools to ensure reliable and maintainable code.

---

## 🧰 Technologies Used

- **ESLint** – Code linting
- **Prettier** – Code formatting
- **Vitest** – Unit testing
- **Playwright** – End-to-end testing
- **Husky** – Git hooks
- **lint-staged** – Runs linters on staged Git files
- **Live Server** – Development server
- **dotenv** – Environment variable support

---

## ⚙️ Features

- Pre-configured ESLint and Prettier
- Pre-commit hooks with Husky and lint-staged
- Unit tests for:
  - `isActivePath`
  - `getUserName`
- E2E tests for:
  - Login with valid credentials
  - Login with invalid credentials
  - Navigate to venue detail page
- `.env` support and `.env.example` provided

---

## 🧪 Testing

### ✅ Unit Tests (Vitest)

```bash
npm run test:unit
```
````

### 🔍 End-to-End Tests (Playwright)

```bash
npm run test:e2e
```

### 🐞 Debug mode

```bash
npm run test:e2e:debug
```

### 🧪 Test UI

```bash
npm run test:e2e:ui
```

---

## 🧼 Linting & Formatting

### Run ESLint

```bash
npm run lint
```

### Run Prettier

```bash
npm run format
```

---

## 📦 Installation & Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run start
```

> Opens a live server at: `http://localhost:5500`

---

## 🌍 Environment Variables

You must create a `.env` file at the root:

```
TEST_USER_EMAIL=your@email.com
TEST_USER_PASSWORD=yourpassword
```

And make sure `.env` is ignored via `.gitignore`.

Also included: `.env.example`

---

## 🧠 Git Hooks

Husky is installed to run pre-commit checks automatically.

To install Git hooks manually (if not already active):

```bash
npx husky install
```

---

## 🗂️ Project Structure

```
workflow-repo-ca/
├── tests/
│   ├── e2e/
│   │   ├── login.spec.js
│   │   ├── navigation.spec.js
│   ├── getUserName.test.js
│   └── isActivePath.test.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.js
├── vitest.config.js
├── tailwind.config.js
├── index.html
└── README.md
```

---

## 🙌 Acknowledgements

- **Noroff** – for the course material and repo template
- **ChatGPT** – used for generating README and test inspiration
- **Teachers & Mentors** – for support during development

---

## 📬 Contact

- [LinkedIn](https://www.linkedin.com/in/petter-r%C3%B8nning-80602613a/)
- [Portfolio](https://raddishaisportfolio.netlify.app/)
- [Email](mailto:petter.arbeid@gmail.com)

---

```

Let me know if you want a version with screenshots or badges added!
```
