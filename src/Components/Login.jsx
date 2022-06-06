import React from "react";
import { loginRequest } from "../Redux/auth/action";
import { useSelector, useDispatch } from "react-redux";
export const Login=()=> {
  const dispatch=useDispatch()
  const loginUser =useSelector((state)=>{return state.loginUser})
  console.log(loginUser)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
     dispatch(loginuser(dispatch,payload))
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
 
