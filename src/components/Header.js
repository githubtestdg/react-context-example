import SwitchTheme from "../SwitchTheme";
import SwitchLanguage from "../SwitchLanguage";
import { useAuth } from "../context";

const Header = () => {
  const { user, dispatch } = useAuth();
  function login() {
    dispatch({
      type: "LOGIN",
      payload: {
        id: 1,
        name: "dgn",
      },
    });
  }
  function logout() {
    dispatch({
      type: "LOGOUT",
    });
  }
  return (
    <>
      <h3>Header</h3>
      {(user && <button onClick={logout}>Çıkış yap</button>) || (
        <button onClick={login}>Giriş yap</button>
      )}
      <br />
      <hr />
      <SwitchTheme />
      <SwitchLanguage />
    </>
  );
};

export default Header;
