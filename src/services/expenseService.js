// src/services/expenseService.js
// import axios from "axios";

// Change this to match your backend API endpoint
const API_URL = "http://localhost:8080/expenses";

export async function getAllExpenses() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addExpense(expense) {
  const res = await fetch("http://localhost:8080/expenses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });
  return res.json();
}

export async function getExpenseById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function updateExpense(id, expense) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });
  return res.json();
}
