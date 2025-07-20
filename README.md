# 🧮 Calculator App

A fully interactive, reducer-driven calculator application built with **React**, **TypeScript**, and **TailwindCSS (DaisyUI)**. This app simulates a basic arithmetic calculator supporting chained operations, decimal inputs, and input validation, leveraging functional components and centralized state management.

---

## ⚙️ Features

- 🧠 State managed via `useReducer` hook  
- ➗ Supports basic operations: `+`, `-`, `*`, `/`  
- 📦 Controlled input: handles decimals and leading zeroes  
- 🔁 Chained operation logic with intermediate evaluation  
- 🗑️ Clear (`AC`) and delete (`⌫`) functionality  
- 💾 Stateless (no persistence — ephemeral session logic)  
- 🧩 Modular button components for digits and operations  

---

## 🏗️ Architecture

src/
├── Calculator.tsx # Main component with UI and reducer
├── InputField.tsx # Display component for current and previous values
├── DigitButton.tsx # Reusable digit input button
├── OperatorButton.tsx # Reusable operator button

## 🧠 State Model

Reducer-based state management ensures a consistent, predictable update cycle.

```ts
type REDUCER_STATE_TYPE = {
  currentValue: string
  prevValue: string
  operator: string
}

Action Types
ACTIONS = {
  ADD_DIGIT,
  CHOOSE_OPERATION,
  CLEAR,
  DELETE_DIGIT,
  EVALUATE,
}

Reducer Logic Highlights
ADD_DIGIT: Guards against multiple decimals and leading zero spam.
CHOOSE_OPERATION: Enables operation chaining without pressing =.
DELETE_DIGIT: Trims last digit of current input.
EVALUATE: Executes computation and resets state for new input flow.
CLEAR: Resets all state to initial values.

git clone https://github.com/your-username/calculator-app.git](https://github.com/MakuisLearning/calculator.git
cd calculator-app
npm install
npm run dev






