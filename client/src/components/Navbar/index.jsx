import React, { useState } from 'react'
import {
    KeyboardArrowDown, 
    Search,
    PersonOutlineOutlined,
    FavoriteBorderOutlined,
    ShoppingCartOutlined
} from '@mui/icons-material'
import EN_IMG from "../../assets/img/en.png";
import PAYMENT_IMG from "../../assets/img/payment.png";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from '../Cart';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const products = useSelector(state => state.cart.products)
  const {data, loading, error} = useFetch(
    `/categories`
  )


  console.log({cat: data})

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
              <div className="item">
                <img src={EN_IMG} alt="" />
                <KeyboardArrowDown />
              </div>
              <div className="item">
                <span>USD</span>
                <KeyboardArrowDown />
              </div>
              {
                data?.slice(0, 3).map(cat => <div className="item" key={cat.id}>
                    <Link className="link" to={`/products/${cat.id}`}>{cat.attributes.title}</Link>
                  </div>
                )
              }
            </div>
            <div className="center">
              <Link className="link" to="/">GLOBAL STORE</Link>
            </div>
            <div className="right">
                <div className="item">
                  <Link className="link" to="/">Homepage</Link>
                </div>
                <div className="item">
                  <Link className="link" to="/">About</Link>
                </div>
                <div className="item">
                  <Link className="link" to="/">Contact</Link>
                </div>
                <div className="item">
                  <Link className="link" to="/">Stores</Link>
                </div>
               
                <div className="icons">
                  <Search />
                  <PersonOutlineOutlined />
                  <FavoriteBorderOutlined />
                  <div className="cartIcon" onClick={() => setOpened(!opened)}>
                    <ShoppingCartOutlined />
                    <span>{products.length}</span>
                  </div>
                </div>
            </div>
        </div> 
        {opened && <Cart />}
    </div>
  )
}

export default Navbar