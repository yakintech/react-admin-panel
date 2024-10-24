import { createContext, useEffect, useState } from "react";
import { getTokenFromLocalStorage } from "../utils/tokenStorage";
import axios from "axios";

export const UserContext = createContext({} as UserContextType)


export const UserContextProvider = ({ children } : any) => {
    
    const [loginStatus, setloginStatus] = useState(false)
    const [loading, setloading] = useState(true)


    useEffect(() => {

        let token = getTokenFromLocalStorage();

        // /check endpoint
        if (token) {
            axios.get("http://localhost:8080/check", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(() => {
                    setloginStatus(true)
                    setloading(false)
                })
                .catch(() => {
                    setloginStatus(false)
                    setloading(false)
                })
        }

    }, [])
    

    return <UserContext.Provider value={{ loginStatus, setloginStatus,loading }}>
        {children}
    </UserContext.Provider>
}



type UserContextType = {
    loginStatus: boolean
    setloginStatus: (status: boolean) => void
    loading: boolean
}