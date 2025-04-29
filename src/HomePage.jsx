import React from 'react';

const products = [
  {
    id: 1,
    name: "Antibacterial Sponge",
    description: "Bamboo charcoal sponge for chemical-free scrubbing.",
    price: 4.99,
  },
  {
    id: 2,
    name: "Coconut Scrub Brush",
    description: "Ergonomic bamboo handle + natural coconut bristles.",
    price: 6.99,
  },
  {
    id: 3,
    name: "Reusable Dishcloths",
    description: "Soft, biodegradable bamboo-fiber cloths.",
    price: 5.49,
  },
  {
    id: 4,
    name: "Bamboo Drying Rack",
    description: "Elegant, space-saving bamboo drying rack.",
    price: 12.99,
  },
  {
    id: 5,
    name: "Bamboo Cellulose Cleaning Pads",
    description: "Three-pack of compostable cleaning pads.",
    price: 7.99,
  },
  {
    id: 6,
    name: "Bamboo Broom & Dustpan Set",
    description: "Minimalist broom and dustpan crafted from bamboo.",
    price: 18.99,
  },
];

function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '40vh',
        backgroundColor: '#e8f5e9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px'
      }}>
        <h1 style={{ fontSize: '48px', color: '#2e7d32' }}>Welcome to CleanCove</h1>
        <p style={{ fontSize: '20px', color: '#388e3c', maxWidth: '600px' }}>
          Eco-friendly cleaning essentials powered by bamboo.
        </p>
      </section>

      {/* Products Section */}
      <section style={{ padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#ffffff'
          }}>
            <h2 style={{ color: '#2e7d32', fontSize: '24px', marginBottom: '10px' }}>{product.name}</h2>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#000' }}>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#2e7d32',
        color: '#ffffff',
        marginTop: '40px'
      }}>
        © {new Date().getFullYear()} CleanCove. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
