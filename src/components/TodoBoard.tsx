import AddTodo from "./AddTodo";
import CheckedTodoList from "./CheckedTodoList";
import TodoList from "./TodoList";

function TodoBoard () {
    return (
        <div className=" font-gruppo flex flex-col  overflow-scroll w-full ">
            <div className=" flex-grow overflow-scroll w-full max-h-[250px] "><CheckedTodoList/></div>
            <div className=" flex-grow overflow-scroll w-full max-h-[450px]"><TodoList/></div>
            
            
           
        
        </div>
    )
    }
    
    export default TodoBoard;
