
const db = require("../config/db");

const products = [
  {
    id: 1,
    name: "Dell Inspiron 15",
    description: "15-inch laptop suitable for work, study and everyday use",
    price: 55000,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 2,
    name: "HP Pavilion 14",
    description: "Compact laptop with powerful performance and modern design",
    price: 62000,
    category: "Laptops",
    image:
      "https://i.pinimg.com/474x/7c/39/94/7c39947c1f72ce00c704526f50e6a30e.jpg"
  },

  {
    id: 3,
    name: "MacBook Air M3",
    description: "Lightweight Apple laptop with M3 chip",
    price: 95000,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 4,
    name: "Lenovo IdeaPad Slim 5",
    description: "Slim laptop designed for productivity and entertainment",
    price: 58000,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 5,
    name: "iPhone 15",
    description: "Apple smartphone with advanced camera system",
    price: 65000,
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 6,
    name: "Samsung Galaxy S24",
    description: "Premium Android smartphone with high performance",
    price: 72000,
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 7,
    name: "Google Pixel 9",
    description: "Google smartphone with excellent camera and AI features",
    price: 68000,
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 8,
    name: "OnePlus 12",
    description: "High-performance smartphone with fast charging",
    price: 58000,
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 9,
    name: "Sony WH-1000XM5",
    description: "Premium wireless noise-cancelling headphones",
    price: 28000,
    category: "Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 10,
    name: "Boat Rockerz 550",
    description: "Affordable wireless headphones with powerful bass",
    price: 1800,
    category: "Headphones",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 11,
    name: "JBL Tune 770NC",
    description: "Wireless noise-cancelling headphones with long battery life",
    price: 5500,
    category: "Headphones",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 12,
    name: "Logitech MX Master 3S",
    description: "Advanced wireless mouse for productivity",
    price: 8500,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 13,
    name: "Mechanical RGB Keyboard",
    description: "Mechanical keyboard with customizable RGB lighting",
    price: 3500,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 14,
    name: "Apple Magic Mouse",
    description: "Wireless mouse with multi-touch surface",
    price: 7500,
    category: "Accessories",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-iAXXt3oEFEmoxBZxWTbDeOS5k9CIRwjBbfZQYfybNU0Ly60Iqg6tL2ljbfbSoU2H4Ol1mMC3KlcfIPWBBnzoCszninvZ"
  },

  {
    id: 15,
    name: "USB-C Hub",
    description: "Multi-port USB-C hub for laptops and tablets",
    price: 1800,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 16,
    name: "Apple Watch Series 10",
    description: "Smartwatch with fitness and notification features",
    price: 45000,
    category: "Smartwatches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 17,
    name: "Samsung Galaxy Watch 7",
    description: "Smartwatch with fitness tracking and AMOLED display",
    price: 32000,
    category: "Smartwatches",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 18,
    name: "Amazfit GTR 4",
    description: "Fitness-focused smartwatch with long battery life",
    price: 12000,
    category: "Smartwatches",
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 19,
    name: "iPad Air",
    description: "Powerful tablet for work, study and entertainment",
    price: 55000,
    category: "Tablets",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 20,
    name: "Samsung Galaxy Tab S9",
    description: "Premium Android tablet with high-resolution display",
    price: 70000,
    category: "Tablets",
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80"
  }
];


// ======================================
// INSERT PRODUCTS WITH IDs
// ======================================

const query = `
  INSERT OR IGNORE INTO products
  (id, name, description, price, category, image)
  VALUES (?, ?, ?, ?, ?, ?)
`;

let completed = 0;
let failed = 0;

products.forEach((product) => {
  db.run(
    query,
    [
      product.id,
      product.name,
      product.description,
      product.price,
      product.category,
      product.image,
    ],
    function (err) {
      if (err) {
        console.error(
          `Failed to insert product ${product.id}:`,
          err.message
        );
        failed++;
      } else {
        console.log(`Product ${product.id} processed successfully`);
        completed++;
      }

      if (completed + failed === products.length) {
        console.log(
          `Product seeding completed. Success: ${completed}, Failed: ${failed}`
        );

        // IMPORTANT:
        // Do NOT call db.close() here.
        // The server still needs this database connection.
      }
    }
  );
});
 
 
