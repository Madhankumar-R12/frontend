import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getExpenseById, updateExpense } from "../services/expenseService";
import "./EditExpense.css";

function EditExpense() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getExpenseById(id).then((exp) => {
      setTitle(exp.name);
      setAmount(exp.amount);
      setCategory(exp.category);
      setDate(exp.date);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateExpense(id, {
        name: title,
        amount: parseFloat(amount),
        category,
        date,
      });
      setMessage("Expense Updated!");
    } catch (err) {
      setMessage("Error updating expense");
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Expense #{id}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EditExpense;
