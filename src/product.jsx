
import React from "react";


const Product = () => {
    
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
    )

}

export default Product;

