import React, { useEffect } from "react";
import "../css/Todo.css";
import TodoLogic from "../Component/TodoLogic"
import { useState } from "react";
import { getAllTodo,AddToDo,updateToDo,DeleteToDo } from "../utils/HandleApi";

const Todo = () => {
  
    const [toDo,setTodo] = useState([])
    const [text,setText] = useState("")
    const [isupdating,setisUpdating] = useState(false)
    const [todoId,setTodoId] = useState("")

    useEffect(()=>{
        getAllTodo(setTodo);
    },[])


    const update =(_id,text)=>{
        setisUpdating(true);
        setText(text)
        setTodoId(_id);  
    }

  return (
    <>
      <div className="contaner">
        <h1>TODO APP</h1>

        <div className="top">
          <input type="text" placeholder="Add Todos..." value={text} onChange={(e)=>setText(e.target.value)}/>
          <div 
          className="Add" 
          onClick={ isupdating ? 
          ()=>updateToDo(todoId,text,setTodo,setText,setisUpdating)
          :()=>AddToDo(text,setText,setTodo)}>
            {isupdating ? "Update" :"Add"}</div>
            
        </div>
       
       <div className="list">
        {toDo.map((item)=><TodoLogic 
        key={item._id} 
        text={item.text}
        update={()=>update(item._id,item.text)} 
        DeleteToDo={()=>DeleteToDo(item._id,setTodo)}/>)}
       </div>

      </div>
    </>
  );
};

export default Todo;
