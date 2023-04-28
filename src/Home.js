import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img className="bannerImage" src="banner.jpg" alt="" />
      <div className="home__row">
        <Product
          id="1"
          title="iQOO 11 5G (Legend, 8GB RAM, 256 GB Storage) | Snapdragon ® 8 Gen 2 Mobile Platform | 2K E6 AMOLED..."
          price={59999}
          rating={4}
          image="https://m.media-amazon.com/images/I/71ZeuCAbcSL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="2"
          title="OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost EMI/Additional Exchange Offers..."
          price={15490}
          rating={5}
          image="https://m.media-amazon.com/images/I/71geVdy6-OS._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Apple iPhone 14 Pro Max 256GB Space Black..."
          price={149000}
          rating={5}
          image="https://m.media-amazon.com/images/I/610pghkO81L._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="4"
          title="Apple iPhone 13 (256GB) - (Product) RED..."
          price={71499}
          rating={5}
          image="https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="5"
          title="Apple iPhone 14 Pro 128GB Deep Purple..."
          price={120000}
          rating={5}
          image="https://m.media-amazon.com/images/I/61HHS0HrjpL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Apple 2021 MacBook Pro (16-inch//41.05 cm, M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB..."
          price={296894}
          rating={5}
          image="https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
