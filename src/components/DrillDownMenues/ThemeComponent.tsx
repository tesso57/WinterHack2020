import React, {useCallback, useEffect, useState} from "react";
import "../../assets/styles/DrillDownMenu.scss"
import Text from "../Text"
import SearchButton from "../SearchButton";
import RecallButton from "../RecallButton";

type Props = {
    heading: string,
    content: string,
    uid: number
    isInit: boolean
    dataName: string
    data: { content: string, type: string }[]
}

const ThemeComponent = (props: Props) => {
    const [isOpen, setIsOpen] = useState(props.isInit);
    const [currentData, setCurrentData] = useState(props.content)
    const [recall, setRecall] = useState(false)
    useEffect(() => {
        if (props.data !== undefined) {
            setCurrentData(props.data[Math.floor(Math.random() * props.data.length)]['content'])
        }
    }, [recall])

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className={"heading"}>
                {props.heading}
            </div>
            {isOpen &&
            <div className={"content"}>
                <Text text={currentData}/>
                <SearchButton text={"検索"} search={props.heading}/>
                <RecallButton dataName={props.dataName} uid={props.uid}
                              handleRecall={() => setRecall(!recall)}/>
            </div>
            }
        </div>
    )
}

export default ThemeComponent