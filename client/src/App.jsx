import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />

        <Routes>

          <Route path="/" element={<Login />} />
         

          <Route path="/register" element={<Register />} />

          <Route path="/home" element={<Home />} />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />

          <Route
            path="/products/:id"
         element={
        <ProtectedRoute>
         <ProductDetails />
          </ProtectedRoute>
          }
        />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;