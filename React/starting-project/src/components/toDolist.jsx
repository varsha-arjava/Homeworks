import React from 'react';
import './../assets/css/Todolist.css';

export default function ToDoList() {
     const [printValue, setPrintValue] = React.useState([]);
    function handleSubmit(e) {
        e.preventDefault(); 
        setPrintValue([...printValue,e.target.todoval.value]); // push data
        e.target.todoval.value="";
    }

    function TodoDelete(index){
       const updateList = [...printValue];
       updateList.splice(index,1); // Remove value in array
       setPrintValue(updateList); // Updated array
    }

    return (
        <div className="todo-container">
            <form onSubmit={handleSubmit} className="todo-form">
                <label>ToDoList: </label>
                <input type="text" className="todo-input" name="todoval" id="todoval" />
                <input type="submit" value="Submit" className="todo-submit" />
            </form>
            <div className="todo-list">
                {
                    printValue.map((item, index)=>(
                        <div className="todo-item" key={index}>
                            <p>{item}</p>
                            <button className="todo-delete" onClick={() => TodoDelete(index)}>Delete</button>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
}
