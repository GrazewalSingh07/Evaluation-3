import React from "react";
import { loginUser } from "../Redux/auth/action";
import { useSelector, useDispatch } from "react-redux";
export const Login=()=> {
  const dispatch=useDispatch()
   
  const isAuth = useSelector((state)=>{console.log(state)})
  const token =useSelector((state)=>{return state.isLoading})
  console.log(token)
  // console.log(loginUser)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    
     dispatch(loginUser(dispatch,payload))
  };
  return (
    <>
      <h3>Login form</h3>
       
        <input value={email}onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <br />
        <input value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <br />
       <button onClick={handleSubmit}> Submit</button>
     
    </>
  );
}
 
