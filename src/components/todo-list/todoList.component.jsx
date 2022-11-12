import TodoItem from "../todo-item/todoItem.component"
import styled from "styled-components";
import Filter from "../filter/filter.component";
import { TextInput } from "../form/form.component";
import { useContext, useEffect, useState } from "react";
import { TodosContext} from "../../services/todos/todos.context";

const TodoListContainer = styled.div`
`
const handleFilterSelect = (e) => {
    console.log(e.target.textContent)
}

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
    const [itemsList, setItemsList] = useState([])

    useEffect(() => {
        todosContext.getAllTodos()
    }, [])

    return  <>
                {
                    todosContext.isLoading && todosContext == null? (<h1>Loading...</h1>)
                : 
                <>
                <TextInput 
                placeholder="Add a new todo" 
                handleInputSubmit={(e) => {setItemsList([...itemsList, {id: 24, description: inputFieldValue, isComplete: false}])}}
                handleInputChange={(e) => {setInputFieldValue(e.target.value)}}/>
                <TodoListContainer>
                    {todosContext.todosList.map(todoItem => {
                        return <TodoItem 
                            description={todoItem.description} 
                            isComplete={todoItem.isComplete} 
                            key={todoItem.id} i
                            d={todoItem.id}
                        />
                    })}
                </TodoListContainer>
                <Filter handleFilterSelect={handleFilterSelect}/>
                </>
                }
            </>
}


export default TodoList;