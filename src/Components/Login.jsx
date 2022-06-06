import React from "react";
import { loginRequest } from "../Redux/auth/action";

function Login({ handleLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
     
  };
  return (
    <>
      <h3>Login form</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export { Login };
