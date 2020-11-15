import React from "react";
import "../assets/styles/Text.scss"

type Props = {
    text: string
}

const Text = (props: Props) => {
    return (
        <div className={"Text"}>{props.text}</div>
    )
}

export default Text;