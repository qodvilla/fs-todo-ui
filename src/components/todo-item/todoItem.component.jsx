import { useState } from 'react';
import deleteButton from '../../assets/delete-button.svg';
import styled from 'styled-components';


const ItemContainer = styled.div`
display: flex;
justify-content: space-between;
`
const DeleteButton = styled.img`
`

const Text = styled.p`

`

const InputsContainer = styled.div`
display: flex;
`

const Checkbox = styled.input`
width: 20px
`


const TodoItem = ({description, isComplete}) => {
    const [isDone, setIsDone] = useState(isComplete);
    return (
            <ItemContainer>
                <InputsContainer>
                    <Checkbox type="checkbox" onChange={() => {
                        setIsDone(!isDone)
                    }} checked={isDone} />
                    <Text>{description}</Text>
                </InputsContainer>
                <DeleteButton src={deleteButton} />
            </ItemContainer> 
        )
    
}

export default TodoItem;