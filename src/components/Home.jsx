import React, { useEffect, useState } from "react";
import { getAllExpenses } from "../services/expenseService";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleAddExpense = () => {
    navigate("/add");
  };
  const handleAllExpense = () => {
    navigate("/expenses");
  };

  return (
    <div className="home">
      <div className="home-header">
        <h1>🏠 Payment Splitter</h1>
        <p>Track and split your expenses easily with friends and family.</p>
      </div>
      <div className="home-content">
        <h2>Add your Expenses</h2>
        <button className="add-expense-btn" onClick={handleAddExpense}>
          Add Expense
        </button>
      </div>
      <div className="home-content">
        <h2>List All the Expenses</h2>
        <button className="add-expense-btn" onClick={handleAllExpense}>
          List All Expenses
        </button>
      </div>
    </div>
  );
}

export default Home;
