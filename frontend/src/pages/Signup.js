import { useState } from "react";
import {
  GridSignup,
  RowSignup,
  Col1Signup,
  Col2Signup,
  Col1BoxSignup,
  TextContent,
  TextHeading,
  CircleIcon,
} from "../Components/styles/GridSignup.styled";
import { StyledButton } from "../Components/styles/Button.styled";
import {
  StyledLinkDiv,
  StyledLink,
} from "../Components/styles/StyledLink.styled";
import { Label } from "../Components/styles/Label.styled";
import { Div } from "../Components/styles/Div.styled";
import Input from "../Components/Inputbox";
const SignUp = () => {
  const [newUser, setNewUser]= useState ({
    name:"", email:"",password:"",cPassword:""
  });
  let name, value;
  const handleInputs = (e) => {
    //e= event
    console.log(e);
    name= e.target.name;
    value= e.target.value;
    setNewUser({...newUser, [name]:value});
    //[name]: if I am getting value from name= email, [name] will be email
  }
  const PostData = async (e) => {
    e.preventDefault();
    const {name, email, password, cPassword} = newUser;
    //what is the route where I need to send form data???
    //for now I am writing register
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, password, cPassword
      })
    })
  }

  return (
    <>
      <GridSignup>
        <RowSignup>
          <Col1Signup>
            <Col1BoxSignup>
              <CircleIcon />
              <TextHeading>Quick and Free Sign-up</TextHeading>
              <TextContent>
                Enter your email address to create an account
              </TextContent>
            </Col1BoxSignup>
            <Col1BoxSignup>
              <CircleIcon />
              <TextHeading>Responsive Design</TextHeading>
              <TextContent>
                View CatBook on all types of screen like mobile, ipad, and
                desktop
              </TextContent>
            </Col1BoxSignup>
            <Col1BoxSignup>
              <CircleIcon />
              <TextHeading> Stay Connected</TextHeading>
              <TextContent>
                Share your thoughts, ideas, and pictures with your cat friends
                from anywhere in the world
              </TextContent>
            </Col1BoxSignup>
          </Col1Signup>
          <Col2Signup>
            <h1>Create your account</h1>
            <form method="POST">
              <Label>Full Name</Label>
              <br />
              <Input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={newUser.name} 
                onChange={handleInputs} 
              ></Input>
              <br />
              <Label>Email</Label>
              <br />
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={newUser.email} 
                onChange={handleInputs} 
              ></Input>
              <br />
              <Label>Password</Label>
              <br />
              <Input
                type="password"
                name="password"
                placeholder="Type to create a password"
                value={newUser.password} 
                onChange={handleInputs} 
              ></Input>
              <br />
              <Label>Confirm Password</Label>
              <br />
              <Input
                type="password"
                name="cPassword"
                placeholder="Enter your password again"
                value={newUser.cPassword} 
                onChange={handleInputs} 
              ></Input>
              <br />
              <StyledButton>Sign Up</StyledButton>
            </form>
            <Div>
              By signing up you agree to Terms of Service & privacy policy.
            </Div>
            <StyledLinkDiv>
              Already have an account?{" "}
              <StyledLink to="./Login">Log In</StyledLink>
            </StyledLinkDiv>
          </Col2Signup>
        </RowSignup>
      </GridSignup>
    </>
  );
};
export default SignUp;
