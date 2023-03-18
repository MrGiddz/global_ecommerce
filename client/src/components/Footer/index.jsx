import React from 'react';
import Payment from "../../assets/img/payment.png"
import "./style.scss"


const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel reprehenderit magnam, asperiores eaque, nemo tenetur nesciunt ullam ea sapiente debitis accusamus error, esse quasi. Voluptates, eius? Totam, accusantium non?
            Atque maiores, necessitatibus, quae
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel reprehenderit magnam, asperiores eaque, nemo tenetur nesciunt ullam ea sapiente debitis accusamus error, esse quasi.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="logo">Global Store</div>
          <div className="copyright">
            © Copyright 2023. All Rights Reserved
          </div>
        </div>
        <div className="right">
          <img src={Payment} alt="payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer