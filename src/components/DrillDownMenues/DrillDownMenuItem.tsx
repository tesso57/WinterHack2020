import React from 'react'
import '../../assets/styles/DrillDownMenu.scss'
type Props = {
    content: string
}

const DrillDownMenuItem = (props: Props) => {
    return(
        <div className={"item"}>
            {props.content}
        </div>
    )
}

export default DrillDownMenuItem