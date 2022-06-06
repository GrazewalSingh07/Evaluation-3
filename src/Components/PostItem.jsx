export const PostItem=({body,title,userid})=>{
    return <div style={{width:"400px", margin:"2rem", background:"grey", padding:"1rem",color:"white"}}>
        <h1>{title}</h1>
        <p>{body}</p>
        <h3>{userid}</h3>
    </div>
}