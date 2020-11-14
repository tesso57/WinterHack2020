import React, {useState} from 'react'
import "../../assets/styles/DrillDownMenu.scss"


type Props = {
    heading: string,
    isInit: boolean,
    subHeading: string
}

const IntroductionTemplate = (props: Props) => {
    const [isOpen, setIsOpen] = useState(props.isInit);

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className={"heading"}>
                {props.heading}
                <span className={"subHeading"}>
                            {props.subHeading}
                        </span>
            </div>
            {isOpen &&
            <div className={"content"}>
            </div>
            }
        </div>
    )
}

export default IntroductionTemplate;