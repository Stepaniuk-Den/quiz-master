
import UserStats from "../../modules/homepage/components/UserStats"
import {
  // BoxUserStats,
  PageWrapper,
  SectionWrapper,
  TitleSettings,
  TitleWrapper,
} from "./SettingsPageStyled";

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
          <TitleSettings>Settings</TitleSettings>
        </TitleWrapper>
        <UserStats />
      </SectionWrapper>
    </PageWrapper>
      </>
  )
}

export default SettingsPage;