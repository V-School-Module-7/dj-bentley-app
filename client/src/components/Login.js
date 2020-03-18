import React, { useState } from 'react'
import Button from './Button'

const Login = () => {
    const initAuth = {
        username: "",
        password: ""
    }

    const [auth, setAuth] = useState(initAuth)

    const handleChange = (e) => {
        const { name, value } = e.target
        setAuth(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        alert(auth.username + auth.password)
        setAuth(initAuth)
    }

    return (
        <div className="loginPage">
            {/* <h2>Admin Login</h2> */}
            <form className="login">
                <input 
                    type="text"
                    name="username" 
                    placeholder="Username"
                    value={auth.username}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="password" 
                    placeholder="Password"
                    value={auth.password}
                    onChange={handleChange}
                />
                <Button btnAction={handleSubmit} btnContent="Submit" />
            </form>
        </div>
    )
}

export default Login