import "./App.css";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseForm } from "./components/ExpenseForm";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const initialExpenses = [
//   { id: uuidv4(), charge: "rent", amount: 1600 },
//   { id: uuidv4(), charge: "car payment", amount: 400 },
//   { id: uuidv4(), charge: "credit card bill", amount: 1200 },
// ];

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

const initialMoney = localStorage.getItem("money")
  ? JSON.parse(localStorage.getItem("money"))
  : 10000;

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState("");

  const [amount, setAmount] = useState("");

  const [edit, setEdit] = useState(false);

  const [id, setId] = useState(0);

  const [selects, setSelects] = useState();

  console.log(selects);

  const [money, setMoney] = useState(initialMoney);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("money", JSON.stringify(money));
  }, [expenses, money]);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    // console.log(`Amount: ${e.target.value} `);
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);

        toast.success("Edited successfully!");
      } else {
        const singleExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, singleExpense]);

        toast.success("Expense added successfully!");
        if (selects === "გაყიდვა") {
          setMoney(money + parseInt(amount));
          singleExpense.amount = "+" + amount;
          singleExpense.backgroundColor = "green";
        } else if (selects === "ყიდვა") {
          setMoney(money - parseInt(amount));
          singleExpense.amount = "-" + amount;
          singleExpense.backgroundColor = "red";
        }
      }

      setCharge("");
      setAmount("");
    } else {
      toast.info("Fill in the fields!");
    }
  };

  const clearItems = () => {
    setExpenses([]);

    toast.success("Clear all Expenses!");
  };

  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);

    setExpenses(tempExpenses);

    toast.success("Deleted successfully!");
  };

  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;

    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  const handleSelect = (e) => {
    setSelects(e.target.value);
  };

  return (
    <div className="AppConteiner">
      <h1> budget calculator </h1>

      <h1>ჩემი საფულე: ${money}</h1>

      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
          handleSelect={handleSelect}
          selects={selects}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
