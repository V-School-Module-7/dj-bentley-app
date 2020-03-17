import React from 'react'
import Button from './Button'

const Login = () => {
    const handleSubmit = () => {
        alert("sign in")
    }

    return (
        <div>
            <h1>login</h1>

            <form>
                <input 
                    type="text" 
                    placeholder="Username"
                />
                <input 
                    type="text" 
                    placeholder="Password"
                />
                <Button btnAction={handleSubmit} btnContent="Submit" />
            </form>
        </div>
    )
}

export default Login