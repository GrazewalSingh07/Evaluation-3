import { Link } from "react-router-dom"

export const Home=()=>{
    return <div>
        <h1>Home Page</h1>
      <div>  <Link to="/posts">Posts</Link></div>
       <div> <Link to="/login">Login</Link></div>
    </div>
}