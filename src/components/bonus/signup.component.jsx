import styled from "styled-components";
import { useState } from "react";
import { FormTitle, Image, StyledTextInput, TextInput } from "../form/form.component";
import ButtonComponent, { Button, ButtonContainer, FormButton } from "./button.component";

export const Form = styled.div`
width: 390px;
height: 530px;
padding: 35px 30px 63px;
border-radius: 8px;
box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
background-color: #fff;
`

export const Subtitle = styled.p`
width: 300px;
height: 20px;
margin-top: 0;
font-family: MarkPro;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #a1a4ad;
`

export const LinkToPage = styled.p`
font-size: 14px;
font-weight: normal;
color: #1f2a4b;
text-decoration: underline;
cursor: pointer;
`

const handleSignUp = (fullname, password, email, changeRoute) => {
    fetch("http://localhost:8080/signUp", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            fullname,
            password,
            email
        })
    }).then(response => {
        changeRoute('SignIn');
    }).catch(e => {
        // Error handling
    })
}

const SignUpScreen = ({title, subtitle, changeRoute}) => {
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    return <>
        <Form>
            <Image />
            <FormTitle>{title}</FormTitle>
            <Subtitle>{subtitle}</Subtitle>
            <StyledTextInput onChange={(e) => {
                setFullname(e.target.value);
            }} placeholder="Full Name" type="text"/>
            <StyledTextInput onInput={(e) => {
                setEmail(e.target.value);
            }} placeholder="Email" type="email"/>
            <StyledTextInput onInput={(e) => {
                setPassword(e.target.value);
            }} placeholder="Password" type="password"/>
            <LinkToPage onClick={() => {
                changeRoute("SignIn")
            }}>Do you have an account? Sign in.</LinkToPage>
            <ButtonContainer>
                <FormButton onClick={(e) => {
                    handleSignUp(fullname, password, email, changeRoute)
                }}>Sign Up</FormButton>
            </ButtonContainer>
        </Form>
    </>
}

export default SignUpScreen;