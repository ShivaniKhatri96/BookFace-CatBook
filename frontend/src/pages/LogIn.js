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
import Input from "../components/Inputbox";
const LogIn = () => {
  return (
    <div>
      <GridLogin>
        <RowLogin>
          <Col1Login></Col1Login>
          <Col2Login>
            <h1>Log in</h1>
            <form>
              <Label>Email</Label>
              <br />
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
              ></Input>
              <br />
              <Label>Password</Label>
              <br />
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
              ></Input>
              <br />
              <StyledButton>Log In</StyledButton>
            </form>
            <StyledLinkDiv>
              Don't have an account?{" "}
              <StyledLink to="./Signup">Sign Up</StyledLink>
            </StyledLinkDiv>
          </Col2Login>
        </RowLogin>
      </GridLogin>
    </div>
  );
};
export default LogIn;
