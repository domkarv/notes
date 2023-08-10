import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../state/userReducer";

const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const signUpUser = async (name, email, password) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const jsonData = await response.json();

      if (!response.ok) {
        setLoading(false);
        setError(jsonData.error);
      }

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(jsonData)); // save the user to local storage
        dispatch(login(jsonData)); // update the auth context
        navigate("/");
      }

      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    signUpUser,
    error,
    isLoading,
  };
};

export default useSignup;
