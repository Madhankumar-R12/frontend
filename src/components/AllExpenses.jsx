import React, { useEffect, useState } from "react";
import { getAllExpenses } from "../services/expenseService";

function AllExpenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllExpenses();
      setExpenses(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Expenses</h2>
      <ul>
        {expenses.length === 0 ? (
          <li>No expenses found.</li>
        ) : (
          expenses.map(exp => (
            <li key={exp.id}>
              {exp.name} - ₹{exp.amount} - {exp.category} - {exp.date}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default AllExpenses;