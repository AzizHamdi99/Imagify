import { createContext, useState } from "react";
export const AppContext=createContext(null)

const AppContextProvider=(props)=>{

    const[showLogin,setShowLogin]=useState(true)

    const[user,setUser]=useState(null)
    const [showLoginForm,SetShowLoginForm]=useState(false)

    const value={
        showLogin,setShowLogin,user,setUser,showLoginForm,SetShowLoginForm

    }
    return (

        <AppContext.Provider value={value}>
{props.children}


        </AppContext.Provider>
    )

}
export default AppContextProvider