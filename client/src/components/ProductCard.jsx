import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div  onClick={handleClick} className="product-card">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">

          <div>
            <p className="product-price">
              ₹{product.price}
            </p>

            <p className="product-stock">
              {product.stock} available
            </p>
          </div>

          <button className="cart-button">
            🛒
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;

