import Swal from 'sweetalert2';
import ButtonComponent, { Button, ButtonContainer, FormButton } from "./button.component";
import { useState } from "react";
import { FormTitle, Image, StyledTextInput, TextInput } from "../form/form.component";
import { Form, LinkToPage, Subtitle } from "./signup.component";


const handleSignIn = (password, email, changeRoute) => {
    fetch("http://localhost:8080/signIn", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            password,
            email
        })
    }).then(async response => {
        const user = await response.json();
        if(!user.email) {
            throw new Error("Authentication Failed");
        }
        changeRoute('Home');
    }).catch(e => {
        // Error handling
        Swal.fire(
            'Hmmmnn!',
            `We couldn't let you in, please try again or Sign Up`,
            'error'
          )
    })
}


const SignInScreen = ({title, subtitle, changeRoute}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return <>
        <Form>
            <Image />
            <FormTitle>{title}</FormTitle>
            <Subtitle>{subtitle}</Subtitle>
            <StyledTextInput onInput={(e) => {
                setEmail(e.target.value)
            }} placeholder="Email" type="email"/>
            <StyledTextInput onInput={(e) => {
                setPassword(e.target.value);
            }} placeholder="Password" type="password" />
            <LinkToPage onClick={() => {
                changeRoute("SignUp")
            }}>Don't have an account? Sign up.</LinkToPage>
            <ButtonContainer>
                <FormButton onClick={() => handleSignIn(password, email, changeRoute)}>Sign In</FormButton>
            </ButtonContainer>
        </Form>
    </>
}

export default SignInScreen;