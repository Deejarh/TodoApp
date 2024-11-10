import React from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import type { Todo } from "../utils/types";
import { uncheckedtodos, updateTodo } from "../store/todoSlice";

const TodoList: React.FC = () => {
  const todos = useAppSelector(uncheckedtodos);
  const dispatch = useAppDispatch();

  const handleUpdate = (todo: Todo) => {
    console.log("update");
    dispatch(updateTodo(todo.date));
  };

  return (
    <div className=" w-full ">
      {todos.length > 0 ? (
        <div className=" w-full   text-2xl text-black font-semibold  flex items-center  my-2   ">
          <ul className=" w-full">
            {todos.map((todo) => (
              <li key={todo.date} className="  flex  border-b border-foregroundsecondary items-center gap-x-2 pl-4    py-3">
                <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleUpdate(todo)}
                />
                <span className="checkmark"></span>
                </label>
                <p>{todo.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="  my-4 pl-4 font-bold text-xl animate-pulse">
          Bravo 💪 Lets get you cracking with new set of todos
        </p>
      )}
    </div>
  );
};

export default TodoList;
