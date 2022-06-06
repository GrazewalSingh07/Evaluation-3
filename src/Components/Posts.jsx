import { fetchData } from "../Redux/app/action"

export const Posts=()=>{

    console.log(fetchData()())


    return <h1>Posts</h1>
}