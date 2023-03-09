import React from "react";
import trash from './images/trash.png'

export default function Items(props){
    return (
        <li className="items">
            <input type="checkbox" className="checkbox"></input>
            <p>{props.items}</p>
            <img src={trash} alt="trash" onClick={()=>props.deleteItem(props.index)} ></img>
        </li>
    )
}