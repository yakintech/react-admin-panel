import axios from 'axios'
import React, { useContext, useState } from 'react'
import { setTokentoLocalStorage } from '../../utils/tokenStorage'
import { UserContext } from '../../context/UserContext'

function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const { setloginStatus } = useContext(UserContext)


    const login = () => {
        axios.post("http://localhost:8080/login", { email, password })
            .then(response => {
                let token = response.data.token
                setTokentoLocalStorage(token)
                setloginStatus(true)
            })
    }

    return <>
        <h1>Login Page</h1>
        <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
        </div>
        <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
        </div>
        <div>
            <button onClick={login}>Login</button>
        </div>
    </>
}

export default Login