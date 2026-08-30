
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await registerUser(formData);

      if (result.success) {
        setMessage("Registration successful! Redirecting to login...");

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setMessage(result.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Unable to connect to server");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card register-card">

        {/* Icon */}
        <div className="auth-icon">
          🛍️
        </div>

        {/* Heading */}
        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Register now and start shopping
        </p>

        {/* Register Form */}
        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <div className="auth-form-group">
            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="auth-form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="auth-form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="auth-button"
          >
            Create Account
          </button>

        </form>

        {/* Message */}
        {message && (
          <p
            className={
              message.toLowerCase().includes("successful")
                ? "auth-success"
                : "auth-error"
            }
          >
            {message}
          </p>
        )}

        {/* Login */}
        <div className="auth-footer">

          <span>
            Already have an account?{" "}
          </span>

          <button
            type="button"
            onClick={() => navigate("/")}
            style={{
              border: "none",
              background: "none",
              padding: 0,
              color: "#6366f1",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
};

export default Register;
 
