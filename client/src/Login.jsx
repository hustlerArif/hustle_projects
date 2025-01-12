import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(`Loging in with ${username} ${email} and ${password}`);
    try {
      const response = await axios.post("http://localhost:3000/login", {email,password,});
      setMessage(response.data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      setMessage(error.response?.data || "An error occurred.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} /> */}
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
      <br />
      <br />
      server output: {message}
    </>
  );
}
