import React, {useEffect, useState} from "react";
import "../../assets/styles/DrillDownMenu.scss"

type Props = {
    heading: string,
    isInit: boolean,
}

const ThemeComponent = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    //マウント時に実行
    useEffect(() => {
        setIsOpen(props.isInit)
    }, [])

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className={"heading"}>
                {props.heading}
            </div>
            {isOpen &&
            <div className={"content"}>
            </div>
            }
        </div>
    )
}

export default ThemeComponent