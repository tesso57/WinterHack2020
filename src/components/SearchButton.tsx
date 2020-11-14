import {url} from "inspector";
import React from "react";
import "../assets/styles/SearchButton.scss"

type Props = {
    text: string,
    search: string
}

const SearchButton = (props: Props) => {
    const url = encodeURI("https://www.google.com/search?q=" + props.search);
    return (
        <button className="SearchButton"><a href={url} target="_blank" rel="noreferrer">{props.text}</a></button>
    )
}

export default SearchButton;