import React, {useEffect, useState} from "react";
import "../../assets/styles/DrillDownMenu.scss"
import Text from "../Text"
import SearchButton from "../SearchButton";
import RecallButton from "../RecallButton";
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
                <Text text={props.heading}/>
                <SearchButton text={"検索"} search={props.heading}/>
                <RecallButton/>
            </div>
            }
        </div>
    )
}

export default ThemeComponent