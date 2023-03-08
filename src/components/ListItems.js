import React from "react";
import trash from "./images/trash.png";
import "../App.css";

export default function ListItems() {
    const list = ["Tex sdkfajksdhfkjsfjsdfjksdf sfksdfkjsdjfjt"];
    const listitems = list.map((items) => {
        return (
        <li className="items">
            <input type="checkbox"></input>
            <p>{items}</p>
            <img src={trash} alt="trash"></img>
        </li>)
    });
    return (
        <section className="main-content">
            <div className="input">
                <input type="text" placeholder="Add new list item"></input>
                <button>+</button>
            </div>
            <div className="list-items">
                <ul>{listitems}</ul>
            </div>
        </section>
    );
}
