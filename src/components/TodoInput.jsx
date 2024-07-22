import { useState } from "react";

export default function TodoInput(props){
    const {handleAddTodo, newTodo, setNewTodo} = props;
    return(
        <header>
            <input value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}} placeholder="Enter todo..."/>
            <button onClick={() => {
                handleAddTodo(newTodo); setNewTodo('');
            }}>Add</button>
        </header>
    );
}