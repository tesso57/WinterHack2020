import React,{useState,useCallback,useEffect} from 'react'


const DrillDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
            <div>
                <div onClick={() => setIsOpen(!isOpen)}>タイトル</div>
                {isOpen &&
                <div>
                    BOX
                </div>
                }
            </div>
        )
}

export default DrillDownMenu