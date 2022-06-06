export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
import axios from "axios";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};

const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err
  };
};

// "email": "eve.holt@reqres.in",
// "password": "cityslicka"
const loginUser= ()=>(dispatch,payload) => {
  // dispatch
  // a request
  return axios.post("https://reqres.in.api/user",payload).then((res)=>{
          console.log(res)
      }).catch((err)=>{
          console.log(err)
      })
  
};

export { loginRequest, loginSuccess, loginFailure,loginUser };
