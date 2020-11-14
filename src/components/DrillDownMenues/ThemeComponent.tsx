import React from "react";
import "../../assets/styles/DrillDownMenu.scss"
import Text from "../Text"
import SearchButton from "../SearchButton";
import RecallButton from "../RecallButton";

type Props = {
    heading: string,
    content: string,
    getRandomData: (data: { content: string, type: string }[]) => string,
    isOpen: boolean,
    setOpen: (num: number) => void,
    uid : number
}

const ThemeComponent = (props: Props) => {

    return (
        <div>
            <div className={"heading"} onClick={() => props.setOpen(props.uid)}>
                {props.heading}
            </div>
            {props.isOpen &&
            <div className={"content"}>
                <Text text={props.content}/>
                <SearchButton text={"検索"} search={props.heading}/>
                <RecallButton/>
            </div>
            }
        </div>
    )
}

export default ThemeComponent