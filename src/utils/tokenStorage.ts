
 import { AES, enc } from 'crypto-js'


export const setTokentoLocalStorage = (token: string) => {
    const encryptedToken = AES.encrypt(token, "tokenSecretKey" as string).toString()
    localStorage.setItem("token", encryptedToken)
}

export const getTokenFromLocalStorage = () => {
    const encryptedToken = localStorage.getItem("token")
    if (encryptedToken) {
        const token = AES.decrypt(encryptedToken, "tokenSecretKey" as string).toString(enc.Utf8)
        return token
    }
    return null
}

export const removeTokenFromLocalStorage = () => {
    localStorage.removeItem("token")
}


export const setRefreshTokenToLocalStorage = (refreshToken: string) => {
    const encryptedToken = AES.encrypt(refreshToken, "refreshTokenSecretKey" as string).toString()  
    localStorage.setItem("refreshToken", encryptedToken)
}

export const getRefreshTokenFromLocalStorage = () => {
    const encryptedToken = localStorage.getItem("refreshToken")
    if (encryptedToken) {
        const token = AES.decrypt(encryptedToken, "refreshTokenSecretKey" as string).toString(enc.Utf8)
        return token
    }
    return null
}

export const removeRefreshTokenFromLocalStorage = () => {
    localStorage.removeItem("refreshToken")
}