import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import {
  GridSignup,
  RowSignup,
  Col1Signup,
  Col2Signup,
  Col1BoxSignup,
  TextContent,
  TextHeading,
  CircleIcon,
} from "../components/styles/GridSignup.styled";
import { StyledButton } from "../components/styles/Button.styled";
import {
  StyledLinkDiv,
  StyledLink,
} from "../components/styles/StyledLink.styled";
import { Label } from "../components/styles/Label.styled";
import { Div } from "../components/styles/Div.styled";
import Input from "../components/Inputbox";
// import InputPassword from "../components/Inputbox";
const SignUp = () => {
  // //password validation
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password length should be at least 4 characters'),
    cPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match!'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;


  //navigation to go to login page after sign up
  let navigate = useNavigate();
  //The useState function is a built in hook that can be imported from the react package. It allows you to add state to your functional components. Using the useState hook inside a function component, you can create a piece of state without switching to class components.
  const [newUser, setNewUser] = useState({
    login: "", email: "", password: "", cPassword: ""
  });
  let name, value;
  const handleInputs = (e) => {
    //e= event
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
    //[name]: if I am getting value from name= email, [name] will be email
  }  
  //fetch is utilized to connect to database via server and push the data
  const postData = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(newUser, null, 2));
    const { login, email, password } = newUser;
    // const {name, email, password, cPassword} = newUser;
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
      console.log("Invalid Registration");
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
            {/* <form method="POST"> */}
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
                // {...register('password')}
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
                // {...register('cPassword')}
              ></Input>
              <br />
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
