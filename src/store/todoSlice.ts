import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { createSelector } from '@reduxjs/toolkit';
import type { Todo } from "../utils/types";
import { RootState } from ".";


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
            
            state.todos.unshift({ date: Date.now(), text: action.payload, completed: false });
        },
        updateTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find(todo => todo.date === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
    }
})

export const checkedTodos = createSelector((state: RootState): Todo[] => 
    state.todos.todos, (todos) => todos.filter(todo => todo.completed))
export const uncheckedtodos = createSelector((state: RootState): Todo[] => 
    state.todos.todos, (todos) => todos.filter( todo => !todo.completed))


export const { addTodo, updateTodo } = todoSlice.actions;


export default todoSlice.reducer;

