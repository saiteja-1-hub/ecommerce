
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getProducts();

        console.log("Products API response:", result);

        if (result.success) {
          setProducts(result.products);
        } else {
          setError(result.message || "Failed to load products");
        }
      } catch (error) {
        console.error("Products fetch error:", error);
        setError("Unable to connect to server");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-page">

      {/* Page Header */}
      <section className="products-header">
        <div>
          <p className="products-subtitle">
            OUR COLLECTION ✨
          </p>

          <h1>Explore Products</h1>

          <p>
            Discover amazing products at great prices.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">

        {/* Loading */}
        {loading && (
          <div className="products-message">
            Loading products...
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="products-message">
            {error}
          </div>
        )}

        {/* Empty Products */}
        {!loading && !error && products.length === 0 && (
          <div className="products-message">
            No products found.
          </div>
        )}

        {/* Product List */}
        {!loading && !error && products.length > 0 && (
          <div className="products-container">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </section>

    </div>
  );
};

export default Products;

