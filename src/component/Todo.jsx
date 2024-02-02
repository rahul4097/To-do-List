import { useEffect, useRef, useState } from 'react'
import './css/Todo.css'
import TodoItem from './todoItem';

let count=0;
const Todo = () => {
        const [todo , setTodo] = useState([]);
        const inputRef = useRef("null");
        const add= ()=>{
            setTodo([...todo,{no:count++,text:inputRef.current.value,display:inputRef.current.value = " "}])
        }
        useEffect(()=>{
            setTodo(JSON.parse(localStorage.getItem('todo')))
        },[])

        useEffect(()=>{
            setTimeout(() => {
                console.log(todo)
                localStorage.setItem("todo" , JSON.stringify(todo))
            }, 100);
           
        },[todo])

  return (
    <div className='todo'>
        <div className="header">Todo List</div>
        <div className="todo-add">
            <input ref = {inputRef} type="text" placeholder='Enter your list Item' className='input-list'/>
            <div onClick={()=>{add()}} className="add-btn-item">ADD</div>
        </div>
        <div  className="list-item">
            {todo.map((item, index)=>{
                return <TodoItem  no={item.no} setTodo={setTodo} display={item.display} text={item.text} />
            })}
        </div>
    </div>
  )
}

export default Todo