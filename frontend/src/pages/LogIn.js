import {
  GridLogin,
  RowLogin,
  Col1Login,
  Col2Login,
} from "../components/styles/GridLogin.styled";
import { StyledButton } from "../components/styles/Button.styled";
import {
  StyledLinkDiv,
  StyledLink,
} from "../components/styles/StyledLink.styled";
import { Label } from "../components/styles/Label.styled";
// import Input from "../components/Inputbox";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Input } from "../components/styles/Input.styled";
const LogIn = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    login:"", password:""
  });
  let name, value;
  const handleInputs= (e) => {
    console.log(e);
    name= e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value});
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(user, null, 2));
    const {login, password} = user;
    const res= await fetch("/users/login", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        login,password
      })
    });
    if(res.ok){
      console.log("Successfully logged in");
      navigate("../");
    }
  }
  return (
    <div>
      <GridLogin>
        <RowLogin>
          <Col1Login></Col1Login>
          <Col2Login>
            <h1>Log in</h1>
            <form onSubmit={submitHandler}>
              <Label>User name</Label>
              <br />
              <Input
                type="text"
                name="login"
                placeholder="Enter your user name"
                // value={newUser.email}
                onChange={handleInputs}
              ></Input>
              <br />
              <Label>Password</Label>
              <br />
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                // value={newUser.password}
                onChange={handleInputs}
              ></Input>
              <br />
              <StyledButton>Log In</StyledButton>
            </form>
            <StyledLinkDiv>
              Don't have an account?{" "}
              <StyledLink to="../Signup">Sign Up</StyledLink>
            </StyledLinkDiv>
          </Col2Login>
        </RowLogin>
      </GridLogin>
    </div>
  );
};
export default LogIn;
