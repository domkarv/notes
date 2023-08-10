import { useState } from "react";
import useLogin from "../hooks/useLogin";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logInUser, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logInUser(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={isLoading}>
        Login
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default LogInForm;
