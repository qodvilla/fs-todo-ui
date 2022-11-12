import "./App.css";
import SignInScreen from "./components/bonus/signin.component";
import { useState } from "react";
import SignUpScreen from "./components/bonus/signup.component";
import Form from "./components/form/form.component";

function App() {
  const [route, setRoute] = useState('SignIn');
  return (
    <div className="container">
      {route === 'SignIn'? 
      <SignInScreen title="Welcome back!" subtitle="Log in to continue." changeRoute={setRoute} />
      : 
      route === 'SignUp'? 
      <SignUpScreen title="Welcome!" subtitle="Sign up to start using Simpledo today." changeRoute={setRoute}/> 
      :
      route === 'Home'?
      <Form title="Todo List" changeRoute={setRoute}/>
      :
      <h1>You are not meant to be here...</h1>
    }
    </div>
  )
}

export default App;
