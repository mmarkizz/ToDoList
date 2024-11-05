// src/useTodoStore.js
import { create }from 'zustand';
import { persist } from 'zustand/middleware';
import {produce} from 'immer';

const useTodoStore = create(persist(
    (set) => ({
        todos: [],
        addTodo: (todo) => set(produce((state) => {
            state.todos.push(todo);
        })),
        removeTodo: (id) => set(produce((state) => {
            state.todos = state.todos.filter(todo => todo.id !== id);
        })),
        clearTodos: () => set({ todos: [] }),
    }),
    {
        name: 'todo-storage', // имя для локального хранилища
    }
));

export default useTodoStore;
