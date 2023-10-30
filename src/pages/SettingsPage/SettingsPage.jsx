
import { useState } from "react";
import PageTitle from "../../shared/components/PageTitle/PageTitle";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  BtnEyeStyled,
  ErrorsStyled,
  InputPasswWrapStyled,
  InputStyled,
  InputsWrapper,
  LuEyeOffStyled,
  LuEyeStyled,
  SettingForm,
} from "../SettingsPage/SettingsPageStyled";
  import {
  PageWrapper,
  SectionWrapper,
  TitleWrapper,
} from "./SettingsPageStyled";
import BtnConfirmSettings from "../../shared/Buttons/BtnConfirmSettings";



// Перша літера на аватар
// function firstLetterToAvatar(str) {
//   if (str.length > 0) {
//     const firstLetter = str.charAt(0).toUpperCase();
//     console.log(firstLetter);
//   }
// }
// const userName = "";
// firstLetterToAvatar(userName);

const SettingsPage = () => {

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
    <PageWrapper>
        <SectionWrapper>
          firstLetter;
        <TitleWrapper>
          <button
            style={{
              color: "#000000",
              fontFamily: "Roboto",
              fontSize: 16,
              width: 42,
              marginBottom: 16,
            }}
          >
            Back
          </button>
            <PageTitle>Settings</PageTitle>
           </TitleWrapper>
          <SettingForm>
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
        <BtnConfirmSettings type="submit">Save</BtnConfirmSettings>
          </form>
          </SettingForm>
      </SectionWrapper>
    </PageWrapper>
      </>
  )
}

export default SettingsPage;