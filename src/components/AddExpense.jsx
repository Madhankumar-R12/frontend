import React, { useState } from "react";
import { addExpense } from "../services/expenseService";
import "./AddExpense.css";

function AddExpense({ onExpenseAdded }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExpense({ name, amount, category, date });
    setName("");
    setAmount("");
    setCategory("");
    setDate("");
    if (onExpenseAdded) onExpenseAdded();
  };

  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          type="number"
          required
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          required
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
