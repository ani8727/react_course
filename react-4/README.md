# ⚛️ React useEffect Hook Learning Project

This project is a hands-on learning playground built using **Vite + React** to understand the core concepts of React Hooks — especially `useEffect`, dependency arrays, and related state management behaviors.

---

## 📚 Learning Objectives

Through this project, I aim to:

1. Understand how the **`useEffect` Hook** works in React.
2. Explore how **dependency arrays** control re-renders and effect execution.
3. Learn different **types of side effects**, such as:
   - Fetching data from an API
   - DOM manipulations
   - Event listeners and cleanup
4. Observe **useEffect lifecycle behavior** (mount, update, unmount).
5. Practice **stateful reactivity** using `useState` and `useEffect` together.
6. Understand **cleanup functions** inside `useEffect`.
7. Use **multiple useEffects** in one component for separation of concerns.

---

## ⚙️ Tech Stack

- **Frontend:** React 18 + Vite
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS / CSS Modules
- **Tools:** npm, Node.js, VS Code

---

## 🏗️ Project Setup

### 1. Create Vite + React App
```bash
npm create vite@latest useeffect-learning -- --template react
cd useeffect-learning
npm install
