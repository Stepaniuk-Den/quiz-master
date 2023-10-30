import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  InputStyled,
  InputsWrapper,
  RestoreStyled,
  AuthTitle,
  LuEyeStyled,
  BtnEyeStyled,
  LuEyeOffStyled,
  InputPasswWrapStyled,
  ErrorsStyled,
} from "./LoginForm.styled";
import BtnToggleFormAuth from "../../../shared/components/Buttons/BtnToggleFormAuth";
import BtnConfirmAuth from "../../../shared/components/Buttons/BtnConfirmAuth";


const LogInForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => setPasswordShown((show) => !show);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .min(6, "Enter at least 6 characters")
        .max(20, "Must be maximum 20 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
        dispatch(loginUserThunk(values));
      // console.log(values);
      dispatch(toggleShowAuthPage(""));
    },
  });

  return (
    <>
      <AuthTitle>Login</AuthTitle>
      <form onSubmit={formik.handleSubmit}>
        <InputsWrapper>
          <InputStyled
            name="email"
            type="email"
            value={formik.values.email}
            placeholder="Email"
            // autoComplete="off"
            onChange={formik.handleChange}
            label="Email"
          />

          {formik.touched.email && formik.errors.email ? (
            <ErrorsStyled>{formik.errors.email}</ErrorsStyled>
          ) : null}

          <InputPasswWrapStyled>
            <InputStyled
              name="password"
              type={passwordShown ? "text" : "password"}
              value={formik.values.password}
              placeholder="Password"
              // autoComplete="off"
              onChange={formik.handleChange}
              label="Password"
            />
            <BtnEyeStyled
              type="button"
              onClick={togglePasswordShown}
              name="togglePassword"
              aria-label="Toggle password visibility"
            >
              {passwordShown ? (
                <LuEyeStyled size={18} />
              ) : (
                <LuEyeOffStyled size={18} />
              )}
            </BtnEyeStyled>
          </InputPasswWrapStyled>

          {formik.touched.password && formik.errors.password ? (
            <ErrorsStyled>{formik.errors.password}</ErrorsStyled>
          ) : null}

        </InputsWrapper>
        <BtnConfirmAuth type="submit">Enter</BtnConfirmAuth>
      </form>

      <RestoreStyled>Restore password</RestoreStyled>

      <Link to="/auth/registerForm">
        <BtnToggleFormAuth type="button">Register</BtnToggleFormAuth>
      </Link>
    </>
  );
};

export default LogInForm;
