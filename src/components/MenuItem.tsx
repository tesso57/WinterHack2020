import React from "react";
import "../assets/styles/MenuItem.scss"

type Props = {
    text: string,
    url: string
}

const MenuItem = (props: Props) => {
    return(
        <>
            <a className="MenuItem" href={props.url}>{props.text}</a>
        </>
    )
}

export default MenuItem;