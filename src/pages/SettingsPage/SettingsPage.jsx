
import { useState } from "react";
import GoBackBtn from "../../shared/components/Buttons/GoBackBtn/GoBackBtn";
import PageTitle from "../../shared/components/PageTitle/PageTitle";
import Avatar from "../../shared/components/Avatar/Avatar";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  AvatarImg,
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
import { useSelector } from 'react-redux';
import { selectUserAvatar } from "../../redux/user/userSelectors";
import BtnConfirmSettings from "../../shared/components/Buttons/BtnConfirmSettings";

// Перша літера на аватар
function firstLetterNameToAvatar(str) {
  if (str.length > 0) {
    const firstLetter = str.trim().charAt(0).toUpperCase();
    return firstLetter
 // console.log(firstLetter);
  }
}
const userName = firstLetterNameToAvatar(" d");
// console.log(userName);

// function handleNameInputChange(event) {
//   const inputValue = event.target.value;
//   const userLetter = firstLetterNameToAvatar(inputValue);
// }

const SettingsPage = () => {
  const userAvatar = useSelector(selectUserAvatar);
  // console.log(userAvatar);

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
          <TitleWrapper>
            <GoBackBtn to="/"/>
            <PageTitle>Settings</PageTitle>
           </TitleWrapper>
          <SettingForm>
            <AvatarImg>
            {userAvatar ?      
              <Avatar size="large" src="userAvatar" alt="User avatar" width="100px"/>
            :
            <p>{userName}</p>}
            </AvatarImg>
      <form onSubmit={formik.handleSubmit}>
        <InputsWrapper>
          <InputStyled
            name="name"
            type="name"
            // id="idName"
            value={formik.values.name}
            placeholder="Name"
            autoComplete="off"
            onChange={formik.handleChange}
          //   onChange={(event) => {
          //   formik.handleChange(event);
          //   handleNameInputChange(event);
          // }}
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