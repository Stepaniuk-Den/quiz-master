import { BtnConfirmSettingsS } from "./BtnConfirmSettingsS";


const BtnConfirmSettings = ({ children, isDisabled, selectedFile }) => {
  return (
    <>
      <BtnConfirmSettingsS type="submit" disabled={isDisabled} className={isDisabled?"isDisabled":""}>{children}</BtnConfirmSettingsS>
    </>
  );
};

export default BtnConfirmSettings;
