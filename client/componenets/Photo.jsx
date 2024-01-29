import React from "react";

export default function Photo(props) {
    return (

        <img
            className={props.className}
            src={props.url}
            onClick={props.handleClick}
        ></img>

    )
}