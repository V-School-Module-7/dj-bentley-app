import React, { useContext } from 'react'
import { UserContext } from '../context/userProvider'

const IndMusic = (props) => {
    const { token, deleteMix } = useContext(UserContext)

    const handleDelete = () => {
        deleteMix(props.theKey)
    }

    return (
        <div className="otherMusic" onClick={() => props.handleSongChange(props.url)}>
            <h3>{props.mixName}</h3>

            {token ? <button className="btn" onClick={handleDelete}>Delete</button> : null}
        </div>
    )
}

export default IndMusic