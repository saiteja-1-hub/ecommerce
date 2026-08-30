import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("Loading product...");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await getProductById(id);

        console.log("Product details:", result);

        if (result.success) {
          setProduct(result.product);
          setMessage("");
        } else {
          setMessage(
            result.message || "Product not found"
          );
        }
      } catch (error) {
        console.error("Product error:", error);
        setMessage("Unable to connect to server");
      }
    };

    fetchProduct();
  }, [id]);

  if (message) {
    return (
      <div className="products-message">
        {message}
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="product-details-page">

      <button
        className="back-button"
        onClick={() => navigate("/products")}
      >
        ← Back to Products
      </button>

      <div className="product-details-card">

        {/* Product Image */}
        <div className="product-details-image">

          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
            />
          ) : (
            <div className="no-image">
              🛍️
            </div>
          )}

        </div>

        {/* Product Information */}
        <div className="product-details-info">

          <p className="product-category">
            {product.category}
          </p>

          <h1>
            {product.name}
          </h1>

          <p className="product-details-description">
            {product.description}
          </p>

          <div className="product-details-price">
            ₹{product.price}
          </div>

          <p className="product-details-stock">
            {product.stock
              ? `${product.stock} available`
              : "Available"}
          </p>

          <button className="add-cart-button">
            🛒 Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;