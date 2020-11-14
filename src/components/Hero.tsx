import React from "react";
import "../assets/styles/Hero.scss"

type Props = {
    text: string,
    bigger: boolean
}

const Hero = (props: Props) => {
    if(props.bigger){
        return(
            <>
                <div className="bigger common">{props.text}</div>
            </>
        )
    }
    return(
        <>
            <div className="normal common">{props.text}</div>
        </>
    )
}

export default Hero;