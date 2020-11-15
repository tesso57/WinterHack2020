import React, {useEffect, useState} from 'react'
import "../../assets/styles/DrillDownMenu.scss"
import RecallButton from "../RecallButton";
import DrillDownMenuItem from "./DrillDownMenuItem";
import Bar from "./Bar";
import arrow from "../../assets/img/arrow.svg";


type Props = {
    heading: string,
    content: string[],
    isInit: boolean
    data: { content: string, type: string }[]
}

const IntroductionTemplate = (props: Props) => {
    const [isOpen, setIsOpen] = useState(props.isInit);
    const [currentData, setCurrentData] = useState(props.content)
    const [recall, setRecall] = useState(false)

    useEffect(() => {
        if (props.data !== undefined) {
            let preData = [
                props.data[Math.floor(Math.random() * props.data.length)]['content'],
                props.data[Math.floor(Math.random() * props.data.length)]['content']
            ]
            //引き直し
            while (preData[0] === preData[1] || (preData[0] === currentData[0] && preData[1] === currentData[1])) {
                preData = [
                    props.data[Math.floor(Math.random() * props.data.length)]['content'],
                    props.data[Math.floor(Math.random() * props.data.length)]['content']
                ]
            }
            setCurrentData(preData)
        }
        // eslint-disable-next-line
    }, [recall, props.data])

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className={"heading"}>
                <ul>
                    {(isOpen) ? (
                        <li>
                            <img className={"icon"} src={arrow} alt={"arrow"}/>
                            {props.heading}
                        </li>
                    ) : (
                        <li>
                            <img className={"icon downArrow"} src={arrow} alt={"arrow"}/>
                            {props.heading}
                        </li>
                    )}
                </ul>
            </div>
            {isOpen ? (
                <div className={"content open-content"}>
                    <Bar/>
                    <DrillDownMenuItem content={"名前"}/>
                    <DrillDownMenuItem content={"所属"}/>
                    <DrillDownMenuItem content={currentData[0]}/>
                    <DrillDownMenuItem content={currentData[1]}/>
                    <DrillDownMenuItem content={"よろしくお願いします"}/>
                    <RecallButton handleRecall={() => setRecall(!recall)}/>
                </div>
            ) : (
                <div className={"content close-introduction"}>

                </div>
            )

            }
        </div>
    )
}

export default IntroductionTemplate;