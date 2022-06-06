 
import './App.css'
import {Routes, Route} from "react-router-dom"
import { Home } from './Components/Home'
import { Posts } from './Components/Posts'
import { Login } from './Components/Login'
function App() {
 

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/posts" element={<Posts/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </div>
  )
}

export default App
