"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      // 🔹 Check user with email & password
      const response = await fetch(
        `https://pearlthoughtsfrontend-19-6.onrender.com/users?email=${formData.email}&password=${formData.password}`
      );

      const user = await response.json();

      if (user.length > 0) {
        // Save logged-in user
        localStorage.setItem("user", JSON.stringify(user[0]));

        alert("Login Successful!");
        router.push("/home");
      } else {
        alert("Invalid credentials");
      }

    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <Image src="/logo.jpg" alt="Logo"  width={120}  height={120} />
        <h1>Book Appointment App</h1>
           <p>Skip the wait. Book Online</p>
</div>

  <div className="card">
   <h2 className="title">Login</h2>

    <label className="label">Email</label>
    <input
    type="text"
    name="email"
     placeholder="enter your email"
     className="input"
       value={formData.email}
      onChange={handleChange}
       />
          <label className="label">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="input"
          value={formData.password}
          onChange={handleChange}
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
          Don’t have an account?{" "}
           <span onClick={() => router.push("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

     