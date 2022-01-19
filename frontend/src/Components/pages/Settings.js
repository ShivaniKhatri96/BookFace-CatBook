import {
  GridSignup,
  RowSignup,
  Col1Signup,
  Col2Signup,
} from "../componentsShiv/stylesShiv/GridSignup.styled";
import { Input } from "../componentsShiv/stylesShiv/Input.styled";
import { Label } from "../componentsShiv/stylesShiv/Label.styled";
import { StyledButton } from "../componentsShiv/stylesShiv/Button.styled";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
function Settings({ props, coolDan }) {
  const [errMessage, setErrMessage] = useState("");
  const [errMessage2, setErrMessage2] = useState("");
  const [pw, setPw] = useState({
    //   login: props.login,
    _id: props.login,
    pass: props.password,
    repass: "",
    password: "",
    renew: "",
  });
  let name, value;
  const passwordCheck = (e) => {
    name = e.target.name;
    value = e.target.value;
    setPw({ ...pw, [name]: value });
  };
  console.log(pw);
  //password validation
  let passMatch = useRef(false);
  let newpassMatch = useRef(false);
  useEffect(() => {
    if (pw.pass === pw.repass && pw.pass !== "" && pw.repass !== "") {
      passMatch.current = true;
      // console.log("password is wrong");
    }
    if (pw.password === pw.renew && pw.password !== "" && pw.renew !== "") {
      newpassMatch.current = true;
      // console.log("new password match");
    } else {
      console.log("password incorrect");
      passMatch.current = false;
      newpassMatch.current = false;
    }
  }, [pw.pass, pw.repass, pw.password, pw.renew]);
  console.log(passMatch);
  console.log(newpassMatch);

  const formHandler = async (e) => {
    e.preventDefault();
    const { _id, password } = pw;
    console.log(pw);
    if (passMatch.current === true && newpassMatch.current === true) {
      // const response = await
      const response = await fetch(`/users/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setErrMessage("Congratulations!");
          setErrMessage2("Your new password has been registered!");
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      //   if (res.ok) {
      //     setErrMessage("Congratulations!");
      //     setErrMessage2("Your new password has been registered!");
      //     console.log("password match");
      //   }
      // if (pw.recieved !== pw.password){
      //     setErrMessage("Your Password is wrong!");
      //     console.log("password is wrong");
      // }
      // else if(pw.newpw !== pw.renew){
      //     setErrMessage2("Your new passwords do not match!");
      //     console.log("new password mismatch");
      // }
      // else{
      //     console.log("password correct");
      // }
      //     };
    } else {
      if (passMatch.current !== true) {
        setErrMessage("Your current password is wrong!");
      }
      if (newpassMatch.current !== true) {
        setErrMessage2("Your new passwords do not match!");
      }
    }
  };
  //     const formHandler = (e) => {
  //         e.preventDefault();
  // if (pw.recieved !== pw.password){
  //     setErrMessage("Your Password is wrong!");
  //     console.log("password is wrong");
  // }
  // else if(pw.newpw !== pw.renew){
  //     setErrMessage2("Your new passwords do not match!");
  //     console.log("new password mismatch");
  // }
  // else{
  //     console.log("password correct");
  // }
  return (
    <GridSignup>
      <RowSignup>
        <Col1Signup></Col1Signup>
        <Col2Signup>
          <h1>Settings</h1>
          <form onSubmit={formHandler}>
            <Label>{props.login}</Label>
            <br />
            <br />
            <Label>Current Password</Label>
            <Input
              type="password"
              name="repass"
              placeholder="Type your old password"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              onChange={passwordCheck}
              value={pw.repassword}
            ></Input>
            <br />
            <Label>New Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Type to create new password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must contain atleast 1 number, 1 uppercase, 1 lowercase letter, and >= 6 characters."
              value={pw.newpw}
              onChange={passwordCheck}
            ></Input>
            <br />
            <Label>Confirm New Password</Label>
            <Input
              type="password"
              name="renew"
              placeholder="Enter your new password again"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Repeat the new password you entered above!"
              onChange={passwordCheck}
              value={pw.renew}
            ></Input>
            <br />
            <p style={{ color: "#9B0000" }}> {errMessage}</p>
            <p style={{ color: "#9B0000" }}> {errMessage2}</p>
            <br />
            <StyledButton>Confirm</StyledButton>
          </form>
        </Col2Signup>
      </RowSignup>
    </GridSignup>
  );
}

export default Settings;
