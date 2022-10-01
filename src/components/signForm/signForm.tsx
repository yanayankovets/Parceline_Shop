import React, { useState } from "react";
import Fade from "@mui/material/Fade";
import {
  Backdrop,
  Modal,
  Box,
  FormGroup,
  Checkbox,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  ExitStyled,
  FormControlLabelStyled,
  SignInBoxStyled,
  SignInLink,
  SignUpButtonStyled,
  SignFormStyled,
  styledModal,
  TextFieldStyled,
} from "./signForm.styled";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { useAppDispatch } from "../redux/hooks/reduxHooks";
import { setUser } from "../redux/store/reducers/authSlice";
import { Error } from "../errors/errors";

export default function SignInPageForm({ open, handleClose }: any) {
  const dispatch = useAppDispatch();
  const [type, setType] = useState("Sign In");
  const [error, setError] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = React.useState(false);
  const [isChecked, setChecked] = useState<boolean>(false);

  const handleCloseSnackBar = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
    setOpenErrorSnackbar(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [emailError, setEmailError] = useState("Email is required");
  const [passwordError, setPasswordError] = useState("Password is required");
  const [confirmedPasswordError, setConfirmedPasswordError] = useState(
    "Password is required"
  );

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.match(mailFormat)) {
      setEmailError("");
    } else {
      setEmailError("Email is invalid");
    }
    setEmail(event.target.value);
  };

  const passwordFormat = /^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/;

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.match(passwordFormat)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must contain at least 8 characters and have one uppercase and one lowercase letter"
      );
    }
    setPassword(event.target.value);
  };

  const onChangeConfirmedPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.match(passwordFormat)) {
      setConfirmedPasswordError("");
    } else {
      setConfirmedPasswordError(
        "Password must contain at least 8 characters and have one uppercase and one lowercase letter"
      );
    }
    setConfirmedPassword(event.target.value);
  };

  const handleOnClickSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(user));
      setOpenSnackbar(true);
      setTimeout(handleClose(), 2000);
      setTimeout(() => setOpenSnackbar(false), 4000);
    } catch (e: any) {
      setError(e.message);
      setOpenErrorSnackbar(true);
    }
  };

  const handleOnClickSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser(user));
      setOpenSnackbar(true);
      setTimeout(handleClose(), 2000);
      setTimeout(() => setOpenSnackbar(false), 4000);
    } catch (error: any) {
      setError(error.message);
      setOpenErrorSnackbar(true);
    }
  };

  const handleOnClickSetChecked = () => setChecked(!isChecked);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {type === "SignIn" ? (
            <Box sx={styledModal}>
              <ExitStyled onClick={handleClose}>&times;</ExitStyled>
              <SignFormStyled id="transition-modal-title" variant="h5">
                Sign in
              </SignFormStyled>
              <TextFieldStyled
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e: any) => onChangeEmail(e)}
              />
              <Error
                error={
                  email !== "" && emailError ? (
                    <p style={{ marginTop: 0 }}>{emailError}</p>
                  ) : null
                }
              />
              <TextFieldStyled
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={(e: any) => onChangePassword(e)}
              />
              <Error
                error={
                  password !== "" && passwordError ? (
                    <p style={{ width: "340px", margin: "0 0 0 17px" }}>
                      {passwordError}
                    </p>
                  ) : null
                }
              />

              <SignUpButtonStyled
                onClick={() => handleOnClickSignIn()}
                variant="contained"
              >
                Login
              </SignUpButtonStyled>
              <SignInBoxStyled>
                <Typography>Don't have an account? </Typography>
                <SignInLink onClick={() => setType("SignUp")}>
                  Sign Up
                </SignInLink>
              </SignInBoxStyled>
            </Box>
          ) : (
            <Box sx={styledModal}>
              <ExitStyled onClick={handleClose}>&times;</ExitStyled>
              <SignFormStyled id="transition-modal-title" variant="h5">
                Sign up
              </SignFormStyled>
              <TextFieldStyled
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e: any) => onChangeEmail(e)}
              />
              <Error
                error={
                  email !== "" && emailError ? (
                    <p style={{ marginTop: 0 }}>{emailError}</p>
                  ) : null
                }
              />
              <TextFieldStyled
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={(e: any) => onChangePassword(e)}
              />

              <Error
                error={
                  password !== "" && passwordError ? (
                    <p style={{ width: "340px", margin: "0 0 10px 17px" }}>
                      {passwordError}
                    </p>
                  ) : null
                }
              />
              <TextFieldStyled
                id="filled-password-input"
                label="Confirm password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={(e: any) => onChangeConfirmedPassword(e)}
              />
              <Error
                error={
                  confirmedPassword !== "" && confirmedPasswordError ? (
                    <p style={{ width: "340px", margin: "0 0 10px 17px" }}>
                      {confirmedPasswordError}
                    </p>
                  ) : null
                }
              />
              <FormGroup>
                <FormControlLabelStyled
                  control={<Checkbox color="default" />}
                  label="I agree to the processing of personal data"
                  onClick={handleOnClickSetChecked}
                />
              </FormGroup>

              {!emailError &&
              isChecked &&
              !passwordError &&
              password === confirmedPassword ? (
                <SignUpButtonStyled
                  onClick={() => handleOnClickSignUp()}
                  variant="contained"
                >
                  Create Account
                </SignUpButtonStyled>
              ) : (
                <SignUpButtonStyled disabled variant="contained">
                  Create Account
                </SignUpButtonStyled>
              )}
              <SignInBoxStyled>
                <Typography>Do you have an account? </Typography>
                <SignInLink onClick={() => setType("SignIn")}>
                  Sign in
                </SignInLink>
              </SignInBoxStyled>
            </Box>
          )}
        </Fade>
      </Modal>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert onClose={handleClose} severity="success">
          Successfully done!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}
