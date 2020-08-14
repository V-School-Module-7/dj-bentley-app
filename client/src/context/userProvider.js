import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const UserProvider = (props) => {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        authErrMsg: ""
    }
    const [userState, setUserState] = useState(initState)

    const [dataState, setDataState] = useState({
        mixData: [],
        fellowData: [],
        aboutData: []
    })

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

    const getData = () => {
        axios.get('/info/perform')
            .then(res => {
                setDataState(prevData => ({
                    ...prevData,
                    fellowData: res.data
                }))
            })
            .catch(err => {
                console.log(err)
            })

        axios.get('/info/mix')
            .then(res => {
                setDataState(prevData => ({
                    ...prevData,
                    mixData: res.data
                }))
            })
            .catch(err => {
                console.log(err)
            })

        axios.get('/info/about')
            .then(res => {
                setDataState(prevData => ({
                    ...prevData,
                    aboutData: res.data
                }))
            })
    }

    const deleteMix = (id) => {
        userAxios.delete(`/api/editMix/${id}`)
            .then(res => {
                setDataState(prevData => ({
                    ...prevData,
                    mixData: dataState.mixData.filter(ind => ind._id !== id)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const deleteFellow = (id) => {
        userAxios.delete(`/api/perform/${id}`)
            .then(res => {
                setDataState(prevData => ({
                    ...prevData,
                    fellowData: dataState.fellowData.filter(ind => ind._id !== id)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const deleteAbout = (id) => {
        userAxios.delete(`/api/about/${id}`)
            .then(res => {
                setDataState(prevData => ({
                    ...prevData,
                    aboutData: dataState.aboutData.filter(ab => ab._id !== id)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const addMix = (newUrl, newName) => {
        const newMix = {
            url: newUrl,
            mixName: newName
        }
        userAxios.post('/api/editMix', newMix)
            .then(res => {
                getData()
            })
            .catch(err => console.log(err))
    }
    const addFellow = (newName) => {
        const newFellow = {
            name: newName
        }
        userAxios.post('/api/perform', newFellow)
            .then(res => {
                getData()
            })
            .catch(err => console.log(err))
    }
    const addAbout = (newText) => {
        const newAbout = {
            aboutText: newText
        }
        userAxios.post('/api/about', newAbout)
            .then(res => {
                getData()
            })
            .catch(err => console.log(err))
    }

    const editAbout = (update, id) => {
        const updatedAbout = {
            aboutText: update
        }
        userAxios.put(`/api/about/${id}`, updatedAbout)
        .then(res => {
            console.log(res.data, 'edited')
            getData()
        })
        .catch(err => console.log(err))
    }

    return (
        <UserContext.Provider
            value={{
                user: userState.user,
                token: userState.token,
                authErrMsg: userState.authErrMsg,
                login: login,
                logout: logout,
                getData: getData,
                dataState: dataState,
                deleteMix: deleteMix,
                addMix: addMix,
                deleteFellow: deleteFellow,
                addFellow: addFellow,
                editAbout: editAbout,
                deleteAbout: deleteAbout,
                addAbout: addAbout
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider