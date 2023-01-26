import { useState } from "react";
import { authService } from "../../services/AuthService";

export const AppRegister = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password || !data.name) {
      alert("One or more field is blank.");
      return;
    }
    try {
      await authService.register(data);
    } catch (e) {
      console.log({ e });
    }
  };
  return (
    <div>
      <h1>register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            name="name"
            type="text"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
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
        <button type="submit">register</button>
      </form>
    </div>
  );
};
