import React from 'react'
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
import "../css/Todo.css";

const TodoLogic = ({text,update,DeleteToDo}) => {
  return (
    <>
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <BiEdit className="icon" onClick={update}></BiEdit>
            <AiFillDelete className="icon" onClick={DeleteToDo}></AiFillDelete>
        </div>
    </div>
    </>
  )
}

export default TodoLogic