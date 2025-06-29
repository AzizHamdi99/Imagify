import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AppContext=createContext(null)

const AppContextProvider=(props)=>{

    const[showLogin,setShowLogin]=useState(true)

    const[user,setUser]=useState(null)
    const [showLoginForm,setShowLoginForm]=useState(false)
    const [token,setToken]=useState(localStorage.getItem('token'))

    const [credits,setCredits]=useState(null)
    const fetchcredits=async()=>{
        try{
            const response= await axios.post('http://localhost:3000/api/user/credits',{},{headers:{
                token:localStorage.getItem('token')
             }})
             localStorage.setItem('credits',response.data.credits)
             setCredits(response.data.credits)
           // setCredits(response.data.credits)
            console.log(response.data.credits)
            //setCredits(localStorage.setItem("credits"))
          




        }catch(error){
            console.log(error)


        }



    }

    useEffect(()=>{
        const storedUser=localStorage.getItem('user')
        if(storedUser){
            setUser(JSON.parse(storedUser))
            fetchcredits()


        }

    },[])

    const value={
        showLogin,setShowLogin,user,setUser,showLoginForm,setShowLoginForm,token,setToken,credits,setCredits,fetchcredits

    }
    return (

        <AppContext.Provider value={value}>
{props.children}


        </AppContext.Provider>
    )

}
export default AppContextProvider