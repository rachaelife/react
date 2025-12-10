

const Product = () => {


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

export default Product