import React, { createContext, useContext, useState, useEffect } from "react";
import {listTodos, deleteTodo, createTodo} from './todos.service';

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [todosList, setTodosList] = useState([]);

  const getAllTodos = () => {
    setIsLoading(true)
    listTodos().then(response => {
      setTodosList(response);
    setIsLoading(false)
    }).catch(e => {
      setIsLoading(false)
    })
  }


  const insertTodo = title => {
    fetch("http://localhost:8080/createTodo", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            description: title,
            iscomplete: false
        })
    }).then(response => {
      getAllTodos();
    }).catch(e => {
        // Error handling
    })
  }

  const markTodoComplete = (e) => {
    fetch(`http://localhost:8080/markTodoCompleted/${e.target.itemID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        iscomplete: true
      })
    })
    .then(response => {
      getAllTodos();
    })
    .catch(e => {
      // Error handling
    })
  }


  const markTodoIncomplete = e => {
    fetch(`http://localhost:8080/markTodoUncompleted/${e.target.itemID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        iscomplete: false
      })
    })
    .then(response => {
      getAllTodos();
    })
    .catch(e => {
      // Error handling:
    })
  }

  const deleteTodoItem = id => {
      fetch("http://localhost:8080/deleteTodo", {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              id
          })
      }).then(response => {
        getAllTodos();
      }).catch(e => {
        // Error handling
      })
  }

  return (
    <TodosContext.Provider
      value={{
        todosList,
        isLoading,
        getAllTodos,
        insertTodo,
        deleteTodoItem,
        markTodoComplete,
        markTodoIncomplete
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};