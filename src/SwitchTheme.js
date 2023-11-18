import { useSite } from "./context";

const SwitchTheme = () => {
  const { theme, dispatch } = useSite();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <>
      <button onClick={toggleTheme}>Tema değiş</button>
      <br />
      {theme}
      <br />
    </>
  );
};

export default SwitchTheme;
