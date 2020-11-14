import React, {useEffect, useState} from 'react'
import "../../assets/styles/DrillDownMenu.scss"
import RecallButton from "../RecallButton";


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
            setCurrentData([
                props.data[Math.floor(Math.random() * props.data.length)]['content'],
                props.data[Math.floor(Math.random() * props.data.length)]['content']
            ])
        }
    }, [recall])

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className={"heading"}>
                {props.heading}
            </div>
            {isOpen &&
            <div className={"content"}>
                <p>名前</p>
                <p>所属</p>
                <p>{currentData[0]}</p>
                <p>{currentData[1]}</p>
                <p>よろしくお願いします！</p>
                <RecallButton handleRecall={() => setRecall(!recall)}/>
            </div>
            }
        </div>
    )
}

export default IntroductionTemplate;