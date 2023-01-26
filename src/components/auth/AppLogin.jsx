import { useState } from "react";
import { authService } from "../../services/AuthService";

export const AppLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      alert("One or more field is blank.");
      return;
    }
    try {
      await authService.login(data);
    } catch (e) {
      console.log({ e });
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email address</label>
          <input
            name="email"
            type="text"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label>password</label>
          <input
            name="password"
            type="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};
