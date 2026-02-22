"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./signup.css";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
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

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      // 🔹 Step 1: Check if email already exists
      const checkUser = await fetch(
        `https://pearlthoughtsfrontend-19-6.onrender.com/users?email=${formData.email}`
      );

      const existingUser = await checkUser.json();

      if (existingUser.length > 0) {
        alert("User already exists!");
        return;
      }

      // 🔹 Step 2: Create new user
      const response = await fetch("https://pearlthoughtsfrontend-19-6.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: "user"
        })
      });

      if (response.ok) {
        alert("Signup Successful!");
        router.push("/login");
      } else {
        alert("Signup failed");
      }

    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSignup} className="signup-form">
          
          <label className="label">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
           <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
            
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

         <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => router.push("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}