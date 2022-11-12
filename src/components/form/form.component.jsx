import logo from '../../assets/logo.svg';
import TodoList from '../todo-list/todoList.component';
import styled from 'styled-components';

// Form Fields:
const StyledTextInput = styled.input`
border: none;
border-bottom: 1px #d7dae0 solid;
padding: 15px;
&:focus {outline: none};
`

const FormContainer = styled.div`
width: 640px;
height: 637px;
background-color: #fff;
borderRadius: 5px;
boxShadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
padding: 35px 30px;
`

const FormTitle = styled.h2`

`;

export const TextInput = ({placeholder, handleInputChange, handleInputSubmit}) => {
    return <StyledTextInput type="text" placeholder={placeholder} onInput={handleInputChange} onKeyDown={handleInputSubmit}/>
}


const Form = () => {
    return (
        <>
            <FormContainer>
                <img src={logo} />
                <FormTitle>Todo List</FormTitle>
                <TodoList/>
            </FormContainer>
        </>
    )
}

export default Form;