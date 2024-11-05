import { Plus } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import React, { useState, useRef } from "react";
import type { Todo } from "../utils/types";
import { addTodo } from "../store/todoSlice";

const AddTodo: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const [showTextArea, setShowTextArea] = useState(false);
  const [text, setText] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  let todo = {} as Todo;

  const showInputField = () => {
    setShowTextArea(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      createTodo();
    }
  };

  const createTodo = () => {
    console.log("submit");
    // todo.date = new Date();
    todo.text = text;
    // todo.completed = false;
    dispatch(addTodo(text));
  };

  return (
    <div className=" px-3">
      {!showTextArea && (
        <button
          onClick={showInputField}
          className=" font-gruppo  text-2xl text-black font-semibold  flex items-center   "
        >
          <Plus />
          Add a Todo
        </button>
      )}

      {showTextArea && (
        <textarea
          ref={textAreaRef}
          placeholder="Start typing.."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className=" outline-none w-full p-3 bg-secondary rounded-xl resize-none my-4"
        ></textarea>
      )}
    </div>
  );
};

export default AddTodo;
