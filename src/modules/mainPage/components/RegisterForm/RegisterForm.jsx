import { useState } from "react";
// import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import {
  AuthTitle,
  BtnEyeStyled,
  BtnRegisterStyled,
  ButtonEnterStyled,
  ErrorsStyled,
  InputPasswWrapStyled,
  InputStyled,
  InputsWrapper,
  LuEyeOffStyled,
  LuEyeStyled,
} from "../LoginForm/LoginForm.styled";

const RegisterForm = () => {
  // const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => setPasswordShown((show) => !show);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
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
      <AuthTitle>Sign Up</AuthTitle>
      <form onSubmit={formik.handleSubmit}>
        <InputsWrapper>
          <InputStyled
            name="name"
            type="name"
            value={formik.values.name}
            placeholder="Name"
            autoComplete="off"
            onChange={formik.handleChange}
            label="Name"
          />

          {formik.touched.name && formik.errors.name ? (
            <ErrorsStyled>{formik.errors.name}</ErrorsStyled>
          ) : null}

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

      <Link to="/login">
        <BtnRegisterStyled type="button">Login</BtnRegisterStyled>
      </Link>
    </>
  );
};

export default RegisterForm;
