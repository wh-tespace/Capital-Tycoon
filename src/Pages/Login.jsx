import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section>
        <h2>Log in</h2>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />

          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

          <button variant="primary" type="Submit">Log in</button>
        </form>

        <button onClick={handleGoogleSignIn}>
          Google
        </button>

        <div>
          <p>Don't have an account?</p>
          
          <Link to="/signup">signup</Link>
        </div>
      </section>
    </>
  )
}

export default Login;