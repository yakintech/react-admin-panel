import { createContext, useEffect, useState } from "react";
import { getRefreshTokenFromLocalStorage, getTokenFromLocalStorage, removeTokenFromLocalStorage, setTokentoLocalStorage } from "../utils/tokenStorage";
import axios from "axios";

export const UserContext = createContext({} as UserContextType)


export const UserContextProvider = ({ children }: any) => {

    const [loginStatus, setloginStatus] = useState(false)
    const [loading, setloading] = useState(true)


    useEffect(() => {

        let token = getTokenFromLocalStorage();

        axios.get("http://localhost:8080/check", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                setloginStatus(true)
                setloading(false)
            })
            .catch((err) => {
                
                //response status 401 veya 403 ise refreshtokenla tekrar token almayı dene
                //eğer refresh token da süresi dolmuşsa login sayfasına yönlendir

                let refreshToken = getRefreshTokenFromLocalStorage()
                if (refreshToken) {
                    axios.post("http://localhost:8080/token", { refreshToken })
                        .then(response => {
                            let token = response.data.accessToken
                            setTokentoLocalStorage(token)
                            setloginStatus(true)
                            setloading(false)
                        })
                        .catch(() => {
                            removeTokenFromLocalStorage()
                            setloginStatus(false)
                            setloading(false)
                        })
                } else {
                    removeTokenFromLocalStorage()
                    setloginStatus(false)
                    setloading(false)
                }

                removeTokenFromLocalStorage()
                setloginStatus(false)
                setloading(false)
            })


    }, [])


    return <UserContext.Provider value={{ loginStatus, setloginStatus, loading }}>
        {children}
    </UserContext.Provider>
}



type UserContextType = {
    loginStatus: boolean
    setloginStatus: (status: boolean) => void
    loading: boolean
}