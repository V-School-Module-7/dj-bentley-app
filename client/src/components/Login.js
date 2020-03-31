import React, { useState, useContext } from 'react'
import Button from './Button'
import {UserContext} from '../context/userProvider'

const Login = () => {
    const initAuth = {
        username: "",
        password: ""
    }
    const {login, authErrMsg} = useContext(UserContext)

    const [auth, setAuth] = useState(initAuth)

    const handleChange = (e) => {
        const { name, value } = e.target
        setAuth(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(auth)
        // alert(auth.username + auth.password)
        setAuth(initAuth)
    }

    return (
        <div className="loginPage">
            {/* <h2>Admin Login</h2> */}
            <form className="login" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username" 
                    placeholder="Username"
                    value={auth.username}
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password" 
                    placeholder="Password"
                    value={auth.password}
                    onChange={handleChange}
                />
                <p>{authErrMsg}</p>
                <Button btnAction={handleSubmit} btnContent="Submit" />
            </form>
        </div>
    )
}

export default Login