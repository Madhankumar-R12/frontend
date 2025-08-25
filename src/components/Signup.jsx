import React, { useState } from "react";
import { signup } from "../services/authService";
import { Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signup({ name, email, password });
      setMsg("Signup successful!");
    } catch (err) {
      setMsg("Signup failed.");
    }
  };

  return (
    <div className="auth-container signup-bg">
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {msg && <p className="auth-msg">{msg}</p>}
      <p className="auth-switch">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Signup;