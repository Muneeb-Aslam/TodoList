import React from "react";
import edit from './images/edit-button.png'
import trash from './images/trash.png'

export default function Items(props){
    const [editing,setEditing] = React.useState(false)
    const [text,setText] = React.useState(props.items)
    function handleEditing(){
        setEditing(true)
    }
    function handleChange(e){
        setText(e.target.value)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setText(event.target.value)
            setEditing(false)

        }
      }
    return (
        <li className="items">
            <input type="checkbox" className="checkbox"></input>
            {!editing ? <p>{text}</p>:<input className="input" value={text} onChange={handleChange} onKeyDown={handleKeyDown}></input>}
            <img src={edit} alt="trash" onClick={handleEditing}></img>
            <img src={trash} alt="trash" onClick={()=>props.deleteItem(props.index)} ></img>
        </li>
    )
}