import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "../../services/AuthService";

export const NavBar = () => {
  const [isAuthUser, setIsAuthUser] = useState(false);

  const logout = async () => {
    await authService.logout();
  };

  useEffect(() => {
    setIsAuthUser(!!window.localStorage.getItem("loginToken"));
  }, []);

  return (
    <nav>
      {!isAuthUser ? (
        <div>
          <Link to="/login">login</Link>
          <br />
          <Link to="/register">register</Link>
        </div>
      ) : (
        <>
          <button onClick={logout}>logout</button>
          <br />
          <br />
          <Link to="/cars">cars</Link>
          <br />
          <br />
          <Link to="/add">add</Link>
        </>
      )}
      <hr />
    </nav>
  );
};
