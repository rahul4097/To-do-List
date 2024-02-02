import "./css/TodoItem.css";
import cross from "./assest/cross.png";
import Todo from "./todo";
const TodoItem = ({ no, display, text,setTodo }) => {

  const remove = (no) => {
    let data = JSON.parse(localStorage.getItem("todo"));
    data = data.filter((todo)=> todo.no!==no)
    setTodo(data)
  };
  
  return (
    <div className="container">
      <div className="list-container">
       {text}
      </div>
      <div className="cross">
        <img onClick={()=>{remove(no)}} className="todocross-icon" src={cross} alt="" />
      </div>
    </div>
  );
};

export default TodoItem;
