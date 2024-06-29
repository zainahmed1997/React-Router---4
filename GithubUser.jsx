import { useEffect, useState } from "react";

function GithubUser({username}){
    const[loading,setloading]= useState(true)
    const[user,setuser]= useState(null)

useEffect(()=>{
  

  async function Fetch(){
   
    try{
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        setuser(data)
        setloading(false)

    }catch(error){
        setloading(false)
    }
  }
    Fetch()
    
  
},[username]) 

if(loading){
    return <h1>in carica...</h1>
}

if(!user){
    return <h1>utente non trovato</h1>
}

return(
    <>
    <h1>{user.login}</h1>
    <img src={user.avatar_url} />
    <p>{user.bio}</p>
    </>
)
 
}

export default GithubUser