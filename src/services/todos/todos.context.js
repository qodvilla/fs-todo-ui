import React, { createContext, useContext, useState, useEffect } from "react";
import {listTodos} from './todos.service';

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [todosList, setTodosList] = useState([]);
  const [requesting, setRequesting] = useState(false);

  const getAllTodos = () => {
    setIsLoading(true)
  }

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(true);
        listTodos()
        .then(todos => todos)
        .then(data => {
            setTodosList(data);
            setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            console.log(err)
        });
    }, 5000);
  }, [requesting]);

  return (
    <TodosContext.Provider
      value={{
        todosList,
        isLoading,
        getAllTodos
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};