import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: 'learning redux'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },
    }
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;


// nanoid is a library that generates unique IDs. It's used here to create unique IDs for each todo item.
// createSlice is a function from Redux Toolkit that simplifies the process of creating a Redux slice.
// A slice is a piece of the Redux state that contains its own reducer and actions.
// The createSlice function takes an object with the following properties:
// name: The name of the slice. This is used to prefix the action types.
// initialState: The initial state of the slice.
// reducers: An object containing the reducer functions. Each function will automatically generate an action creator.




