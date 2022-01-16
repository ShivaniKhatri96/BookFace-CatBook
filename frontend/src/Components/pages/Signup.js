import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import {
  GridSignup,
  RowSignup,
  Col1Signup,
  Col2Signup,
  Col1BoxSignup,
  TextContent,
  TextHeading,
  CircleIcon,
} from "../componentsShiv/stylesShiv/GridSignup.styled";

import { StyledButton } from "../componentsShiv/stylesShiv/Button.styled";
import {
  StyledLinkDiv,
  StyledLink,
} from "../componentsShiv/stylesShiv/StyledLink.styled";
import { Label } from "../componentsShiv/stylesShiv/Label.styled";
import { Div } from "../componentsShiv/stylesShiv/Div.styled";
import { Input } from "../componentsShiv/stylesShiv/Input.styled";
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");

  //navigation to go to login page after sign up
  let navigate = useNavigate();
  //The useState function is a built in hook that can be imported from the react package. It allows you to add state to your functional components. Using the useState hook inside a function component, you can create a piece of state without switching to class components.
  const [newUser, setNewUser] = useState({
    login: "", email: "", password: "", cPassword: ""
  });
  let name, value;
  const handleInputs = (e) => {
    //e= event
    name = e.target.name;
    value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
    //[name]: if I am getting value from name= email, [name] will be email
  }
  //password validation
  let passwordMatch = useRef(false);
  useEffect(() => {
    if (newUser.password === newUser.cPassword && newUser.password !== "" && newUser.cPassword !== "") {
      passwordMatch.current = true;
    }
    else {
      passwordMatch.current = false;
    }
  }, [newUser.password, newUser.cPassword])

  const postData = async (e) => {
    e.preventDefault();
    const { login, email, password } = newUser;
    if (passwordMatch.current !== false) {
      const res = await fetch("/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          login, email, password
        })
      });
      if (res.ok) {
        console.log("Successful Registration");
        //moving to login page once signup is successful using navigate
        navigate("../Login");
      } else {
        setErrorMessage("User name / Email already in use!");
        console.log("Invalid Registration");
      }
      console.log("register");
    }
    else {
      console.log("Invalid Registration due to password mismatch");
    }

  }

  return (
    <div>
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
            <form onSubmit={postData}>
              <Label>User Name</Label>
              <br />
              <Input
                type="text"
                name="login"
                placeholder="Enter your full name"
                value={newUser.login}
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
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must contain atleast 1 number, 1 uppercase, 1 lowercase letter, and >= 6 characters."
              ></Input>
              <br />
              <Label>Confirm Password</Label>
              <br />
              <Input
                type="password"
                name="cPassword"
                placeholder="Enter your password again"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Repeat the password you entered above!"
                value={newUser.cPassword}
                onChange={handleInputs}
              ></Input>
              <br />
              <p style={{color:"#9B0000"}}> {errorMessage}</p>
              <StyledButton>Sign Up</StyledButton>
            </form>
            <Div>
              By signing up you agree to Terms of Service & privacy policy.
            </Div>
            <StyledLinkDiv>
              Already have an account?{" "}
              <StyledLink to="../Login">Log In</StyledLink>
            </StyledLinkDiv>
          </Col2Signup>
        </RowSignup>
      </GridSignup>
    </div>
  );
};
export default SignUp;

