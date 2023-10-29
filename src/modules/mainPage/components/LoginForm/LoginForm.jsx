import { useState } from "react";
// import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  ButtonEnterStyled,
  InputStyled,
  InputsWrapper,
  RestoreStyled,
  AuthTitle,
  LuEyeStyled,
  BtnEyeStyled,
  LuEyeOffStyled,
  InputPasswWrapStyled,
  BtnRegisterStyled,
  ErrorsStyled,
} from "./LoginForm.styled";
import { useFormik } from "formik";
import { Link } from "react-router-dom";


const LogInForm = () => {
  // const dispatch = useDispatch();
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
        .max(20, "Must be maximum 30 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      //   dispatch(loginThunk(values));
      console.log(values);
    },
  });


  return (
    <>
      <AuthTitle>Login</AuthTitle>
      <form
        onSubmit={formik.handleSubmit}
      >
        <InputsWrapper>
          <InputStyled
            name="email"
            type="email"
            value={formik.values.email}
            placeholder="Email"
            autoComplete="off"
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
              autoComplete="off"
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
        <ButtonEnterStyled type="submit">Enter</ButtonEnterStyled>
      </form>

      <RestoreStyled>Restore password</RestoreStyled>

      {/* <Link to="/register">
        <BtnRegisterStyled type="button">Register</BtnRegisterStyled>
      </Link> */}

      {/* <BtnRegisterStyled type="button" >Register</BtnRegisterStyled> */}
      {/* {isShowAuthPage && <AuthPage />} */}
      {/* ================ */}
      {/* {activeWindow === 'registration' && <RegisterForm />} */}
      {/* ================= */}

      <Link to="/auth/registerForm">
        <BtnRegisterStyled type="button">Register</BtnRegisterStyled>
      </Link>
    </>
  );
};

export default LogInForm;
