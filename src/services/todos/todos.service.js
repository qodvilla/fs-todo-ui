import {todos} from './todos.mock';

export const listTodos = () => {
    return new Promise((resolve, reject) => {
        resolve(todos)
    })
}