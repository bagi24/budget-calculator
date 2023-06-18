import "./App.css";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseForm } from "./components/ExpenseForm";
import { Alert } from "./components/Alert";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 400 },
  { id: uuidv4(), charge: "credit card bill", amount: 1200 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <div>
      <Alert></Alert>
      <h1> budget calculator </h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>

      <h1>
        total spending:
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
