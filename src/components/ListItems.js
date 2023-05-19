import React from "react";
import Items from "./items";

export default function ListItems() {

    const [items, setitems] = React.useState([]);
    const [text, settext] = React.useState("");

    function AddItems(text) {
        setitems([...items,text])
    }

    function deleteItem(id){
        let newitems = [...items]
        newitems.splice(id,1)
        setitems(newitems)
    }
    return (
        <section className="main-content">
            <div className="input">
                <input
                    type="text"
                    placeholder="Add new list item"
                    value={text}
                    onChange={(e) => settext(e.target.value)}
                ></input>
                <button onClick={() => {if(text) AddItems(text); settext("")}}>+</button>
            </div>
            <div className="list-items">
                <ul>
                    {items.map((item,id)=>{
                        return (
                            <Items key={id} index={id} items={item} deleteItem={deleteItem}/>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}
