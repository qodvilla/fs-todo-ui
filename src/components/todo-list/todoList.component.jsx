import TodoItem from "../todo-item/todoItem.component"
import styled from "styled-components";
import Filter from "../filter/filter.component";
import { TextInput } from "../form/form.component";
import { useContext, useEffect, useState } from "react";
import { TodosContext} from "../../services/todos/todos.context";

const TodoListContainer = styled.div`
`

const handleAddNewTodoItem = (e, itemTodo) => {
    // Trigger the service to update the list of items for the UI
    if(e.code === 'Enter' && itemTodo) {
        // should make an API request to save the new item
        alert(itemTodo);
    }
}


const TodoList = () => {
    const [inputFieldValue, setInputFieldValue] = useState("")
    const todosContext = useContext(TodosContext);
    const [itemsList, setItemsList] = useState([]);
    const [filter, setFilter] = useState("All");
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/listTodos").then(response => response.json())
        .then(response => {
            setRefresh(false);
            if (filter === "All") {
                setItemsList(response);
            } else if(filter === "Complete") {
                setItemsList(response.filter(item => item.iscomplete));
            } else if(filter === "Incomplete") {
                setItemsList(response.filter(item => !item.iscomplete));
            }
        }).catch(e => {
            // Error handling
        })

    }, [filter, refresh])

    const handleDelete = (id) => {
        todosContext.deleteTodoItem(id)
        todosContext.getAllTodos();
        setRefresh(true);
    }

    const applyFilter = (e) => {
        setFilter(e.target.textContent);
    }
    return  <>
                {
                    todosContext.isLoading? (<h1>Loading...</h1>)
                : 
                <>
                <TextInput 
                placeholder="Add a new todo" 
                handleInputSubmit={(e) => {
                    if(e.code === 'Enter' && inputFieldValue) {
                        todosContext.insertTodo(inputFieldValue);
                        todosContext.getAllTodos();
                        setRefresh(true);
                    } else {
                    }
                }}
                handleInputChange={(e) => {setInputFieldValue(e.target.value)}}/>
                <TodoListContainer>
                    {itemsList.map(todoItem => {
                        return <TodoItem
                            description={todoItem.description} 
                            isComplete={todoItem.iscomplete}
                            handleDelete={handleDelete} 
                            handleToggle={(e) => {
                                if(e.target.checked) {
                                    todosContext.markTodoComplete(e)
                                } else {
                                    todosContext.markTodoIncomplete(e)
                                }
                            }}
                            key={todoItem.id}
                            id={todoItem.id}
                        />
                    })}
                </TodoListContainer>
                <Filter handleFilterSelect={applyFilter}/>
                </>
                }
            </>
}


export default TodoList;
