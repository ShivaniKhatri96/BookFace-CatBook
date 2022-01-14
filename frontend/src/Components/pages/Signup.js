import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from 'yup';
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
// import Input from "../components/Inputbox";
import { Input } from "../componentsShiv/stylesShiv/Input.styled";
// import { Mesg } from "../componentsShiv/stylesShiv/message.styled";
// import InputPassword from "../components/Inputbox";
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  // //password validation
  // const validationSchema = Yup.object().shape({
  //   password: Yup.string()
  //     .required('Password is required')
  //     .min(4, 'Password length should be at least 4 characters'),
  //   cPassword: Yup.string()
  //     .required('Confirm Password is required')
  //     .oneOf([Yup.ref('password')], 'Passwords must match!'),
  // })
  // const formOptions = { resolver: yupResolver(validationSchema) };
  // const { register, formState } = useForm(formOptions);
  // const { errors } = formState;


  //navigation to go to login page after sign up
  let navigate = useNavigate();
  //The useState function is a built in hook that can be imported from the react package. It allows you to add state to your functional components. Using the useState hook inside a function component, you can create a piece of state without switching to class components.
  const [newUser, setNewUser] = useState({
    login: "", email: "", password: "", cPassword: ""
  });
  let name, value;
  const handleInputs = (e) => {
    //e= event
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
    //[name]: if I am getting value from name= email, [name] will be email
  }
  //password validation
  //   let condition = {
  // accept: true
  //   };
  // const [disable,setDisable]= React.useState({
  // disable: true
  // });
  // const handleButton = (e) => {
  //   console.log(e);
  //   name = e.target.name;
  //   value = e.target.value;
  //   setDisable(false);
  //   console.log("button enabled");
  // }
  let passwordMatch = useRef(false);
  useEffect(() => {
    if (newUser.password === newUser.cPassword && newUser.password !== "" && newUser.cPassword !== "") {
      // console.log("matched");
      // console.log(JSON.stringify(newUser.password, null, 2));
      // console.log(JSON.stringify(newUser.cPassword, null, 2));
      passwordMatch.current = true;
      // console.log(passwordMatch.current);
      // newUser.btn.enabled;
    }
    else {
      // console.log("unmatched");
      // console.log(JSON.stringify(newUser.password, null, 2));
      // console.log(JSON.stringify(newUser.cPassword, null, 2));
      passwordMatch.current = false;
      // console.log(passwordMatch.current);
    }
    // console.log(passwordMatch.current);
    // console.log(typeof(passwordMatch.current));
  }, [newUser.password, newUser.cPassword])
  // if ((passwordMatch.current) === (condition.accept)) {
  //   console.log("send");
  //   console.log((passwordMatch.current));
  // }
  // else {
  //   console.log("don't send");
  //   console.log((passwordMatch.current));
  // }
  //fetch is utilized to connect to database via server and push the data
  //
  //here passwordMatch.current gives previous value
  //so condition is opposite
  //   if(passwordMatch.current === false){
  //     console.log(":"+ passwordMatch.current);
  //     console.log(typeof(passwordMatch.current));
  // console.log("register");
  // console.log(" ");
  //   }
  //   else {
  //     console.log("::"+ passwordMatch.current);
  //     console.log(typeof(passwordMatch.current));
  //     console.log("Invalid Registration due to password mismatch");
  //     console.log(" ");
  //   }
  const postData = async (e) => {
    e.preventDefault();
    // console.log(JSON.stringify(newUser, null, 2));
    const { login, email, password } = newUser;
    // const {name, email, password, cPassword} = newUser;
    if (passwordMatch.current !== false) {
      const res = await fetch("/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // name, email, password, cPassword
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
              // {...register('password')}
              // className={`form-control $(errors.password ? 'is-invalid)' : ''}`}
              ></Input>
              {/* <Div className="invalid-feedback">{errors.password?.message}</Div> */}
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
              // {...register('cPassword')}
              // className={`form-control $(errors.cPassword ? 'is-invalid)' : ''}`}
              ></Input>
              {/* <Div className="invalid-feedback">{errors.cPassword?.message}</Div> */}
              <br />
              {/* <StyledButton disabled={disable} onClick={handleButton} >Sign Up</StyledButton> */}
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

