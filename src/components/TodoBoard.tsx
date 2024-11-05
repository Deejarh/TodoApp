import AddTodo from "./AddTodo";
import CheckedTodoList from "./CheckedTodoList";
import TodoList from "./TodoList";

function TodoBoard () {
    return (
        <div>
            
            <CheckedTodoList/>
            <TodoList/>
            <AddTodo/>
        
        </div>
    )
    }
    
    export default TodoBoard;
