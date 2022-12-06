import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleLogIn } = useUserAuth();
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
      await googleLogIn();
      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
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

        <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />

        <div>
          <p>Don't have an account?</p>
          
          <Link to="/signup">signup</Link>
        </div>
      </section>
    </>
  )
}

export default Login;