import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error)
    }
  };

  return (
    <>
      <section>
        <h2>Signup</h2>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />

          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

          <button variant="primary" type="Submit">Sign up</button>
        </form>

        <div>
          <p>Already have an account?</p>
          
          <Link to="/login">Log in</Link>
        </div>
      </section>
    </>
  )
}

export default Signup;