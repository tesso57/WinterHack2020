import React from "react";
import "../assets/styles/MenuBar.scss"
import MenuItem from './MenuItem';
import icon from '../assets/img/template_kun_2_circle.png'
import MenuTitle from "./MenuTitle";

const MenuBar = () => {
    return (
        <nav>
            <ul className={"nav"}>
                <li><MenuItem url={"#template"} text={"自己紹介テンプレート"}/></li>
                <li><MenuItem url={"#wadai"} text={"話題ガチャ"}/></li>
                <li><MenuItem url={"#junban"} text={"順番決めツール"}/></li>
            </ul>
        </nav>
    )
}

export default MenuBar;