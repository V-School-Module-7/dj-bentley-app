import React, { useState, useContext } from 'react'
import {UserContext} from '../context/userProvider'
import Header from './Header'

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
        
        setAuth(initAuth)
    }

    return (
        <div className="loginPage">
            <Header />
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
                
                <button className='btn' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login