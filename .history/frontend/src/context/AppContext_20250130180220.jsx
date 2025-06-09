import { createContext, useEffect, useState } from "react";
export const AppContext=createContext(null)

const AppContextProvider=(props)=>{

    const[showLogin,setShowLogin]=useState(true)

    const[user,setUser]=useState(null)
    const [showLoginForm,setShowLoginForm]=useState(false)
    const [token,setToken]=useState(localStorage.getItem('token'))

    const [credits,setCredits]=useState(false)

    useEffect(()=>{
        const storedUser=localStorage

    },[])

    const value={
        showLogin,setShowLogin,user,setUser,showLoginForm,setShowLoginForm,token,setToken,credits,setCredits

    }
    return (

        <AppContext.Provider value={value}>
{props.children}


        </AppContext.Provider>
    )

}
export default AppContextProvider