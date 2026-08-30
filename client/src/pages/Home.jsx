import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-small-text">WELCOME TO OUR STORE ✨</p>

          <h1>
            Shop Smart.
            <br />
            <span>Live Better.</span>
          </h1>

          <p className="hero-description">
            Discover amazing products, great prices, and everything
            you need in one beautiful place.
          </p>

          <div className="hero-buttons">
            <button
              className="shop-button"
              onClick={() => navigate("/products")}
            >
              Shop Now 🛍️
            </button>

            <button
              className="explore-button"
              onClick={() => navigate("/products")}
            >
              Explore Products →
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="floating-card card-one">
            ⭐ 4.9 Rating
          </div>

          <div className="shopping-circle">
            🛍️
          </div>

          <div className="floating-card card-two">
            🔥 Best Deals
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered quickly and safely.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure Payment</h3>
          <p>Your payments and personal information are protected.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💎</div>
          <h3>Best Quality</h3>
          <p>We bring you quality products at great prices.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>24/7 Support</h3>
          <p>Our support team is always ready to help you.</p>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <p className="section-subtitle">EXPLORE OUR STORE</p>

        <h2>Shop By Category</h2>

        <div className="category-grid">
          <div className="category-card electronics">
            <span>📱</span>
            <h3>Electronics</h3>
            <p>Latest gadgets & devices</p>
          </div>

          <div className="category-card fashion">
            <span>👕</span>
            <h3>Fashion</h3>
            <p>Style for every occasion</p>
          </div>

          <div className="category-card home">
            <span>🏠</span>
            <h3>Home</h3>
            <p>Make your home beautiful</p>
          </div>

          <div className="category-card accessories">
            <span>⌚</span>
            <h3>Accessories</h3>
            <p>Complete your style</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div>
          <h2>Ready to Start Shopping?</h2>
          <p>
            Find your favorite products and enjoy amazing deals today.
          </p>
        </div>

        <button
          className="cta-button"
          onClick={() => navigate("/products")}
        >
          Start Shopping 🛒
        </button>
      </section>

    </div>
  );
};

export default Home;

