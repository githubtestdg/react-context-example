import { useSite } from "./context";

const SwitchLanguage = () => {
  const { language, dispatch } = useSite();

  const toggleLanguage = () => {
    dispatch({
      type: "TOGGLE_LANGUAGE",
    });
  };

  return (
    <>
      <button onClick={toggleLanguage}>Dil değiş</button> <br />
      {language}
    </>
  );
};

export default SwitchLanguage;
