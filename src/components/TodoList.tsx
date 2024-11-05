
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { useState } from 'react';
function TodoList () {

    const [todo, setTodo] = useState('')
    const todos = useAppSelector(state => state.todos.todos)
    const dispatch = useAppDispatch();
    return (
        <div>
          {todos.length > 0 ? (
             <div className=" font-gruppo  text-2xl text-black font-semibold  flex items-center   ">
                Todolists
                </div>
                
         ) : (
                    <p className='  my-4'> Write a todo</p> 

        )}
        </div>
    )
    }
    
    export default TodoList;