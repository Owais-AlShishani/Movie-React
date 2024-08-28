import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/Expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/Expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/Expense-tracker/components/ExpenseForm";
function App() {

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'descTest', amount: 10, category: 'Groceries' },
    { id: 2, description: 'descTest2', amount: 5, category: 'Utilities' },
    { id: 3, description: 'descTest3', amount: 7, category: 'Entertainment' },
    { id: 4, description: 'descTest4', amount: 20, category: 'Entertainment' }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');

  console.log(expenses)
  const filteredCategory = selectedCategory
    ? expenses.filter(e => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-4">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, { id: expenses.length + 1, ...expense }])} />
      </div>

      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      </div>

      <ExpenseList expenses={filteredCategory} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
    </>
  );
}

export default App;
