import React from 'react'

const SideLink = (props) => {
    const sideLinkSymbol = props.sideLinkSymbol
    return (
        <a href={props.linkHref} className="sideLink">{sideLinkSymbol}</a>
    )
}

export default SideLink