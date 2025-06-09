import { createContext, useState } from "react";
export const AppContext=createContext(null)

const AppContextProvider=(props)=>{

    const[showLogin,setShowLogin]=useState(false)


    const value={
        showLogin,setShowLogin

    }
    return (

        <AppContext.Provider value={value}>
{props.children}


        </AppContext.Provider>
    )

}
export default AppContextProvider