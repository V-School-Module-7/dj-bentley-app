import React, { useContext } from 'react'
import { UserContext } from '../context/userProvider'

const IndDj = (props) => {
    const { deleteFellow } = useContext(UserContext)

    const handleDelete = () => {
        deleteFellow(props.theKey)
    }

    return (
        <div key={props.key} className='indDj'>
            <p>{props.name} </p>
            <button className='btn' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default IndDj