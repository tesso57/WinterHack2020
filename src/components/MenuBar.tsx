import React, {useEffect, useState} from "react";
import "../assets/styles/MenuBar.scss"
import MenuItem from './MenuItem';

const MenuBar = () => {
    const [onTop, setOnTop] = useState(false)
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const offset = window.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop

            if (offset <= 80) {
                setOnTop(false)
            } else {
                setOnTop(true)
            }
        })
    });

    let style = onTop ? 'onTopNav' : ''
    console.log(style)
    return (
            <div className={"navCommon " + style}>
                <MenuItem url={"#template"} text={"自己紹介テンプレート"}/>
                <MenuItem url={"#wadai"} text={"話題ガチャ"}/>
                <MenuItem url={"#junban"} text={"順番決めツール"}/>
            </div>
    )
}

export default MenuBar;