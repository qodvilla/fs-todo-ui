import {todos} from './todos.mock';

export const listTodos = async () => {
    try {
        const response = await fetch("http://localhost:8080/listTodos");
        return await response.json();
    } catch (e) {
        // Error handling
    }
}

// Most of the code in context should be moved here...

export const markTodo = id => {
    // mark todo done/not
}