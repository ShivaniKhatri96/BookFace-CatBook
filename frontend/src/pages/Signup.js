import {
  GridSignup,
  RowSignup,
  Col1Signup,
  Col2Signup,
  Col1BoxSignup,
  TextContent,
  TextHeading,
  CircleIcon
} from "../components/styles/GridSignup.styled";
import { StyledButton } from "../components/styles/Button.styled";
import { StyledLinkDiv, StyledLink } from "../components/styles/Anchor.styled";
import Input from "../components/Inputbox";
const SignUp = () => {
  return (
    <div>
      <GridSignup>
        <RowSignup>
          <Col1Signup>
            <Col1BoxSignup>
            <CircleIcon />
              <TextHeading>Quick and free sign-up</TextHeading>
              <TextContent>
                Enter your email address to create an account
              </TextContent>
            </Col1BoxSignup>
            <Col1BoxSignup>
            <CircleIcon />
              <TextHeading>Responsive Design</TextHeading>
              <TextContent>
                You can view CatBook on all types of screen like mobile, ipad,
                and desktop
              </TextContent>
            </Col1BoxSignup>
            <Col1BoxSignup>
            <CircleIcon />
              <TextHeading> Stay Connected</TextHeading>
              <TextContent>
                You can share your thoughts, ideas, and pictures with your cat
                friends from anywhere in the world
              </TextContent>
            </Col1BoxSignup>
          </Col1Signup>
          <Col2Signup>
            <h1>Create your account</h1>
            <form>
              <label>Full Name</label>
              <br />
              <Input
                type="text"
                name="name"
                placeholder="Enter your full name"
              ></Input>
              <br />
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
                placeholder="Type to create a password"
              ></Input>
              <br />
              <label>Confirm Password</label>
              <br />
              <Input
                type="text"
                name="password"
                placeholder="Enter your password again"
              ></Input>
              <br />
              <StyledButton>Sign Up</StyledButton>
            </form>
            <div>
              By signing up you agree to Terms of Service & privacy policy.
            </div>
            <StyledLinkDiv>
              Already have an account?{" "}
              <StyledLink to="./Login">Log In</StyledLink>
            </StyledLinkDiv>
          </Col2Signup>
        </RowSignup>
      </GridSignup>
    </div>
  );
};
export default SignUp;
