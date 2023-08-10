import { useState } from "react";
import useSignup from "../hooks/useSignUp";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUpUser, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpUser(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="signup">
      <h1>Sign Up</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
        Sign Up
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SignUpForm;
