import axios from "axios"
import { useEffect, useState } from "react"
import { fetchData } from "../Redux/app/action"
import { PostItem } from "./PostItem"
 
import { useDispatch , useSelector} from "react-redux"

export const Posts=()=>{

    const dispatch=useDispatch()
    // const [isloading,setisloading]=useState(true)
    // const [isError,setisError]=useState(false)
    // const [data,setData]=useState(null)
const [page,setPage]=useState(1)
 const isloading=useSelector((state)=>{return state.isloading})
 const data =useSelector((state)=>{return state.data})
 console.log(data)
 const error= useSelector((state)=>{return state.error})
     useEffect(()=>{
        
        dispatch(fetchData(dispatch,page))
     },[page])

     

     function handlepage(val){
        if(val<0 &&page==1){
            setPage(1)
            return
        }
       else if(val>0 &&page==100){
            setPage(100)
            return
        }
        else if(val<0){
            setPage(page-1)
            return
        }
        else if(val>0){
            setPage(page+1)
            return
        }
     }
if(isloading){
    return <h1>Loading...</h1>
}
if(error){
    return <h1>Something Went Wrong</h1>
}
    return <div>
        <div>
        {data?.map((el)=>(
               <PostItem key ={el.id}{...el}/>
        ))}
        </div>
       <div>
           <button onClick={()=>handlepage(-1)}>Prev</button>
           <button  onClick={()=>handlepage(1)}>Next</button>
       </div>
     
    </div>
}