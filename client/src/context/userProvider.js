import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const UserProvider = (props) => {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        authErrMsg: ""
    }
    const [userState, setUserState] = useState(initState)

    const login = credentials => {
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            setUserState(res.data)
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const handleAuthErr = errMsg => {
        setUserState(prevUserState => ({
            ...prevUserState,
            authErrMsg: errMsg
        }))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            authErrMsg: ""
        })
    }

    return (
        <UserContext.Provider
            value={{
                user: userState.user,
                token: userState.token,
                authErrMsg: userState.authErrMsg,
                login: login,
                logout: logout
            }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider