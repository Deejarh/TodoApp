import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { Todo } from "../utils/types";


interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({ date: Date.now(), text: action.payload, completed: false });
        },
    }
})

export const { addTodo } = todoSlice.actions;


export default todoSlice.reducer;

