import { ChevronDown } from "lucide-react";
import { useState } from "react";
import React from "react";
import { useAppSelector, useAppDispatch } from "../utils/hooks";
import type { Todo } from "../utils/types";
import { checkedTodos, updateTodo } from "../store/todoSlice";

const CheckedTodoList: React.FC = () => {
  const [showTodos, setShowTodos] = useState(true);
  const checkedTodo = useAppSelector(checkedTodos);
  const dispatch = useAppDispatch();

  const handleUpdate = (todo: Todo) => {
    dispatch(updateTodo(todo.date));
  };

  const handleCollapse = () => {
    setShowTodos(!showTodos);
  };
  return (
    <div className="bg-accent   w-full">
      {checkedTodo.length > 0 && (
        <>
          <div className=" flex items-center  justify-between px-4 py-2">
            <h1 className=" font-gruppo  text-2xl text-black font-semibold    ">
              Done
            </h1>
            <span onClick={handleCollapse} className=" mr-1">
              <ChevronDown size={40} />
            </span>
          </div>
          {showTodos && (
            <ul>
              {checkedTodo.map((todo) => (
                <li key={todo.date} className=" flex  gap-x-2 pl-4 border-b border-foregroundsecondary py-3 items-center">
                   <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleUpdate(todo)}
                />
                <span className="checkmark"></span>
                </label>
                  <p className=" line-through text-disable ">{todo.text}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default CheckedTodoList;
