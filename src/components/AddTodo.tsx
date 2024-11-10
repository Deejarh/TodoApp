import { Plus } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import React, { useState, useRef, useEffect } from "react";
import type { Todo } from "../utils/types";
import { addTodo } from "../store/todoSlice";

const AddTodo: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const [showTextArea, setShowTextArea] = useState(false);
  const [text, setText] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  let todo = {} as Todo;

  useEffect(() => {
    textAreaRef.current?.focus()
  }, []);

  // const showInputField = () => {
  //   setShowTextArea(true);
  //   setTimeout(() => {
  //     textAreaRef.current?.focus();
  //   }, 0);
  // };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      createTodo();
    }
  };

  const createTodo = () => {
    // todo.date = new Date();
    todo.text = text;
    // todo.completed = false;
    dispatch(addTodo(text));
    setText('')
  };

  return (
    <div className=" px-3 py-3">  
        <div className=" flex items-center gap-x-3">
        <textarea
          ref={textAreaRef}
          placeholder="Start typing.."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className=" outline-none w-full p-3 bg-accent text-lg font-bold rounded-xl resize-none my-4 max-h-14"
        ></textarea>
        <button onClick={createTodo} className=" bg-foregroundprimary text-white w-14 h-12 flex items-center justify-center rounded-lg"><Plus/></button>
        </div>
      
    </div>
  );
};

export default AddTodo;
