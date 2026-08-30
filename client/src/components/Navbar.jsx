import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
        

      {isLoggedIn && (
        <>
        <Link to="/">Home</Link>
        <Link to="/products">
          Products
        </Link>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

      {isLoggedIn && (
        <button onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;