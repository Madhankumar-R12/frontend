import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import AddExpense from "./components/AddExpense";
import EditExpense from "./components/EditExpense";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AllExpenses from "./components/AllExpenses";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/" || location.pathname === "/signup";

  return (
    <div className="app-container">
      {!hideNavAndFooter && <NavBar />}

      <main className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/edit/:id" element={<EditExpense />} />
          <Route path="/expenses" element={<AllExpenses />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
