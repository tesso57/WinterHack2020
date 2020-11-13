import React from "react";
import "../assets/styles/MenuBar.scss"
import MenuItem from './MenuItem';

const MenuBar = () => {
    return(
        <>
        <nav>
            <ul className="ul">
                <li><MenuItem url={""} text={"自己紹介"}/></li>
                <li><MenuItem url={""} text={"話題"}/></li>
                <li className=""><MenuItem url={""} text={"順番"}/></li>
            </ul>
        </nav>
        </>
    )
}

export default MenuBar;