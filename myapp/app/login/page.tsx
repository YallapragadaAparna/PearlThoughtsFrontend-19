"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./login.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (email.trim() !== "") {
      router.push("/dashboard");
    } else {
      alert("Please enter email");
    }
  };

  return (
    <div className="container">
      <div className="left">
         <Image src="/logo.jpg" alt="Logo"  width={120} 
    height={120}style={{ marginLeft: "100px" }} />
        <h1>Book Appointment App</h1>
             <p>Skip the wait.Book Online</p>
      </div>
      
      <div className="card">

        {/* <div className="logoBox">
          <h3>Your Logo</h3>
        </div> */}

        <h2 className="title">Login</h2>

        <label className="label">Mobile / Email</label>
        <input
          type="text"
          placeholder="Login with Mobile or Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="row">
          <label className="rememberWrap">
            <input type="checkbox" />
            <span>Remember Me</span>
          </label>
          <span className="forgot">Forgot Password?</span>
        </div>

        <button className="loginBtn" onClick={handleLogin}>
          Login
        </button>

        <div className="divider">
          <span>Or login With</span>
        </div>

        <button className="googleBtn">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
          />
          Continue with Google
        </button>

        <p className="signupText">
          Don’t have an account? <span>Sign Up</span>
        </p>

      </div>
    </div>
  );
}
