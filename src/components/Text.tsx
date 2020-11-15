import React from "react";
// import "../assets/styles/Text.scss"

type Props = {
    text: string
}

const Text = (props: Props) => {
    return (
        <div dangerouslySetInnerHTML={{__html: props.text}}/>
    )
}

export default Text;