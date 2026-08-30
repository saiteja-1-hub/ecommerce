import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Login data:", formData);

      const result = await loginUser(formData);

      console.log("Login response:", result);

      if (result.success) {

        // Send JWT to AuthContext
        login(result.token);

        // Go to products after successful login
        navigate("/products");

      } else {
        setMessage(result.message || "Invalid email or password");
      }

    } catch (error) {
      console.error("Login error:", error);
      setMessage("Unable to connect to server");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* Icon */}
        <div className="auth-icon">
          🔐
        </div>

        {/* Heading */}
        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to continue shopping
        </p>

        {/* Login Form */}
        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {/* Email */}
          <div className="auth-form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />

          </div>

          {/* Error message */}
          {message && (
            <p className="auth-error">
              {message}
            </p>
          )}

          {/* Login button */}
          <button
            type="submit"
            className="auth-button"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <div className="auth-footer">

          <span>
            Don't have an account?{" "}
          </span>

          <button
            type="button"
            onClick={() => navigate("/register")}
            style={{
              border: "none",
              background: "none",
              padding: 0,
              color: "#6366f1",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Register
          </button>

        </div>

      </div>

    </div>
  );
};

export default Login;