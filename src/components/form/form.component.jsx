import logo from '../../assets/logo.svg';
import TodoList from '../todo-list/todoList.component';
import styled from 'styled-components';

// Form Fields:
export const StyledTextInput = styled.input`
border: none;
border-bottom: 1px #d7dae0 solid;
padding: 15px;
width: 370px;
height: 20px;
margin-bottom: 26px;
font-family: MarkPro;
font-size: 16px;
&:focus {outline: none};
::placeholder {
    color: #9ea3b2;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
}
`

const FormContainer = styled.div`
width: 440px;
min-height: 437px;
background-color: #fff;
borderRadius: 5px;
boxShadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
padding: 35px 30px;
`

export const Image = styled.img.attrs(props => ({
    src: logo
}))`
width: 40px;
height: 32px;
`

export const FormTitle = styled.h2`
height: 28px;
font-family: MarkPro;
font-size: 22px;
font-weight: bold;
font-style: normal;
line-height: normal;
letter-spacing: 1.5px;
color: #1f2a4b;
`;

export const LogoutButton = styled.h3`
position: absolute;
top:0;
right: 0;
margin: 20px;
color: #1f2a4b;
cursor: pointer;
`

export const TextInput = ({placeholder, handleInputChange, handleInputSubmit}) => {
    return <StyledTextInput width="7000px" type="text" placeholder={placeholder} onInput={handleInputChange} onKeyDown={handleInputSubmit}/>
}


const Form = ({title, changeRoute}) => {
    return (
        <>
            <LogoutButton onClick={() => {
                changeRoute("SignIn");
            }}>Logout</LogoutButton>
            <FormContainer>
                <Image />
                <FormTitle>{title}</FormTitle>
                <TodoList/>
            </FormContainer>
        </>
    )
}

export default Form;