import React from "react";

function App() {
  const products = [
    {
      name: "Green Apple",
      price: "$14.99",
      oldPrice: "$20.00",
      tag: "50% Off",
      image: "assets/apple.jpg",
    },
    {
      name: "Fresh Indian Kaltos",
      price: "$20.00",
      image: "assets/orange.jpg",
    },
    {
      name: "Chinese Cabbage",
      price: "$12.00",
      image: "assets/cabbage.jpg",
      active: true,
    },
    {
      name: "Green Lettuce",
      price: "$9.00",
      image: "assets/lettuce.jpg",
    },
    {
      name: "Eggplant",
      price: "$34.00",
      image: "assets/eggplant.jpg",
    },
    {
      name: "Big Potatoes",
      price: "$14.00",
      image: "assets/potatoes.jpg",
    },
    {
      name: "Corn",
      price: "$20.00",
      image: "assets/corn.jpg",
    },
    {
      name: "Fresh Cauliflower",
      price: "$20.00",
      image: "assets/flower.jpg",
    },
    {
      name: "Green Capsicum",
      price: "$9.50",
      oldPrice: "$20.00",
      tag: "Sale 50%",
      image: "assets/green.jpg",
    },
    {
      name: "Green Chilli",
      price: "$20.00",
      image: "assets/chili.jpg",
    },
  ];

  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        .popular-wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          padding: 40px 0;
        }

        .popular-container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .popular-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .popular-header h2 {
          font-size: 28px;
          font-weight: 600;
        }

        .view-all {
          font-size: 16px;
          color: green;
          text-decoration: none;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 25px;
          height: 100%;
          overflow-y: auto;
          padding-bottom: 20px;
        }

        .product-card {
          background: #fff;
          border-radius: 12px;
          padding: 20px;
          position: relative;
          border: 2px solid transparent;
          transition: 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .product-card:hover {
          border-color: #34a853;
        }

        .product-card.active {
          border-color: #34a853;
        }

        .product-card img {
          width: 100%;
          height: 180px;
          object-fit: contain;
        }

        .tag {
          position: absolute;
          top: 10px;
          left: 10px;
          background: red;
          color: #fff;
          padding: 4px 10px;
          font-size: 12px;
          border-radius: 6px;
        }

        .info h4 {
          font-size: 16px;
          font-weight: 600;
        }

        .price {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .current {
          color: #000;
          font-weight: 600;
        }

        .old {
          color: #999;
          text-decoration: line-through;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .popular-container {
            padding: 0 20px;
          }

          .product-card img {
            height: 150px;
          }
        }
      `}</style>

      {/* COMPONENT */}
      <section className="popular-wrapper">
        <div className="popular-container">
          <div className="popular-header">
            <h2>Popular Products</h2>
            <a href="#" className="view-all">View All →</a>
          </div>

          <div className="product-grid">
            {products.map((p, i) => (
              <div className={`product-card ${p.active ? "active" : ""}`} key={i}>
                {p.tag && <span className="tag">{p.tag}</span>}

                <img src={p.image} alt={p.name} />

                <div className="info">
                  <h4>{p.name}</h4>
                  <div className="price">
                    <span className="current">{p.price}</span>
                    {p.oldPrice && <span className="old">{p.oldPrice}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
