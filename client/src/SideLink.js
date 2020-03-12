import React from 'react'

const SideLink = (props) => {
    const sideLinkSymbol = props.sideLinkSymbol
    return (
        <a href={props.linkHref} className="sideLink tooltip">{sideLinkSymbol}<span className="tooltiptext">{props.linkName}</span></a>
    )
}

export default SideLink