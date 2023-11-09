import { BtnConfirmSettingsS } from "./BtnConfirmSettingsS";


const BtnConfirmSettings = ({ children, isDisabled, selectedFile }) => {
  console.log(123);
  return (
    <>
      <BtnConfirmSettingsS type="submit" disabled={isDisabled} className={isDisabled?"isDisabled":""}>{children}</BtnConfirmSettingsS>
    </>
  );
};

export default BtnConfirmSettings;
