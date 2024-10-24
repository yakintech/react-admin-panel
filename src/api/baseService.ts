import axios from "axios"
import { getRefreshTokenFromLocalStorage, getTokenFromLocalStorage, removeTokenFromLocalStorage, setTokentoLocalStorage } from "../utils/tokenStorage"

const BASE_URL = "http://localhost:8080/api/"

export const baseService = {
    getAll: async (url: string) => {

        try {
            let token = getTokenFromLocalStorage()
            let response = await axios.get(`${BASE_URL}${url}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            if (response.status.toString().startsWith("2")) {
                return response.data
            } else {
                if(response.status === 401){
                    let refreshToken = getRefreshTokenFromLocalStorage()
                if (refreshToken) {
                    axios.post("http://localhost:8080/token", { refreshToken })
                        .then(response => {
                            let token = response.data.token
                            setTokentoLocalStorage(token)

                        })
                        .catch(() => {
                            removeTokenFromLocalStorage()
                        })
                } 
                }
                throw new Error("Error fetching data")
            }
        } catch (error) {
            console.error("Error fetching data:", error)
            throw error
        }

    }
}