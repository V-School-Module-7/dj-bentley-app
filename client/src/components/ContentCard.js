import React from 'react'

const ContentCard = (props) => {
    return (
        <div className='contentCard' id={props.cardIndex} style={{zIndex: props.z}}>
            content card
        </div>
    )
}

export default ContentCard