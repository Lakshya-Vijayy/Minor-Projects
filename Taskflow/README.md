# TaskFlow – To-Do List Application

## 1. Introduction

TaskFlow is a simple To-Do List application developed using React.js. It helps users manage their daily tasks and stay organized.

Users can add new tasks, edit existing tasks, delete tasks, mark tasks as completed, and filter tasks according to their status.

The application also saves tasks in browser Local Storage, so the data remains available even after refreshing the page.

## 2. Features

- Add new tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed or pending.
- Filter tasks (All, Pending, Completed).
- Display task statistics.
- Save tasks using Local Storage.
- Simple and responsive user interface.

## 3. Technologies Used

- **HTML5:** Used to create the basic structure.
- **CSS3:** Used for styling and designing the application.
- **JavaScript:** Used to implement functionality.
- **React.js:** Used to create reusable components.
- **Node.js:** Used to run the development environment.
- **Vite:** Used as the development server and build tool.
- **Local Storage:** Used to save task data in the browser.

## 4. React Concepts Used

The following React concepts are demonstrated in this project:

1. **Functional Components:** Creating different parts of the application using functions.
2. **JSX:** Writing HTML-like code inside JavaScript.
3. **Props:** Passing data between components.
4. **useState:** Managing tasks, filters, and editing information.
5. **useEffect:** Saving task data in Local Storage.
6. **Event Handling:** Handling button clicks and other user actions.
7. **Conditional Rendering:** Displaying content based on conditions.
8. **List Rendering using .map():** Displaying multiple tasks dynamically.

## 5. Project Folder Structure

```text
taskflow/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   ├── FilterButtons.jsx
│   │   └── TaskStats.jsx
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── Header.css
│   │   ├── TaskForm.css
│   │   ├── TaskList.css
│   │   ├── TaskItem.css
│   │   └── Dashboard.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

## 6. Installation Requirements

Before running this project, make sure you have installed:

- Node.js
- npm (included with Node.js)
- Visual Studio Code
- Google Chrome or any modern web browser

### Install Node.js

1. Visit https://nodejs.org/
2. Download the LTS version.
3. Install it by following the instructions.
4. Open the terminal and check the installation:

```bash
node -v
npm -v
```

## 7. How to Run the Project

Follow these steps to run TaskFlow on your computer.

**Step 1:** Clone the GitHub repository.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**Step 2:** Open the project folder in Visual Studio Code.

**Step 3:** Open the terminal and install the required packages.

```bash
npm install
```

**Step 4:** Start the development server.

```bash
npm run dev
```

**Step 5:** Copy the local URL shown in the terminal and open it in Google Chrome.

TaskFlow will now be running.

## 8. Local Storage

This project uses browser Local Storage to save tasks.

Whenever a task is added, edited, completed, or deleted, the updated task list is saved automatically.

This means users do not lose their tasks when they refresh the browser.

## 9. Conclusion

TaskFlow is a simple React.js project that demonstrates the basic concepts of React through a practical application.

While developing this project, I learned about functional components, JSX, props, React Hooks, event handling, and dynamic rendering.

It also helped me understand how to organize a React project and use Local Storage to save data.

This project improved my understanding of frontend development and React.js.