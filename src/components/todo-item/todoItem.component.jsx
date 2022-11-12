import { useState } from 'react';
import deleteButton from '../../assets/delete-button.svg';
import styled from 'styled-components';


const ItemContainer = styled.div`
display: flex;
justify-content: space-between;
`
const DeleteButton = styled.img`
cursor: pointer;
margin-right: 32px;
`

const Text = styled.p`
margin-left: 14px;
`

const InputsContainer = styled.div`
display: flex;
`

const Checkbox = styled.input`
width: 18px;
border-radius: 4px;
border: solid 1px rgba(0, 0, 0, 0.25);
background-color: #fff;
`


const TodoItem = ({description, isComplete, handleDelete, id, handleToggle}) => {
    const [isDone, setIsDone] = useState(isComplete);
    const [itemID, setItemID] = useState(id);
    return (
            <ItemContainer>
                <InputsContainer>
                    <Checkbox 
                        type="checkbox" 
                        onChange={(e) => {
                            // injecting item ID through event target.
                            e.target.itemID = itemID;
                            handleToggle(e);
                        }} 
                        defaultChecked={isDone}
                     />
                    <Text>{description}</Text>
                </InputsContainer>
                <DeleteButton onClick={() => {handleDelete(itemID)}}  src={deleteButton} />
            </ItemContainer> 
        )
    
}

export default TodoItem;