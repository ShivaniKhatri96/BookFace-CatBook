import { GridLogin, RowLogin, Col1Login, Col2Login } from "../components/styles/GridLogin.styled";
import { StyledButton } from "../components/styles/Button.styled";
import { StyledLinkDiv, StyledLink } from "../components/styles/Anchor.styled";
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
              <label>Email</label>
              <br />
              <Input
                type="text"
                name="email"
                placeholder="Enter your email address"
              ></Input>
              <br />
              <label>Password</label>
              <br />
              <Input
                type="text"
                name="password"
                placeholder="Enter your password"
              ></Input>
              <br />
              <StyledButton>Log In</StyledButton>
            </form>
            <StyledLinkDiv>Don't have an account? <StyledLink to="./Signup">Sign Up</StyledLink></StyledLinkDiv>
          </Col2Login>
        </RowLogin>
      </GridLogin>
    </div>
  );
};
export default LogIn;
