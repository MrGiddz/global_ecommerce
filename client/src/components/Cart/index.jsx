import React from 'react';
import {DeleteOutline} from '@mui/icons-material';
import "./style.scss"
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../network/makeRequest';

const Cart = () => {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    const total = () => {
        let total = 0;
        products.forEach(product => total += product.price * product.quantity)
        return total.toFixed(2)
    }

    const handlePayment = async () => {
        console.log({products})
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products
            });
           await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id
           })
        } catch (error) {
            
        }
    }
  return (
    <div className="cart">
        <h1>Products in your Cart</h1>
        {products?.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0, 100)}</p>
                    <div className="price">{item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutline className='delete' onClick={() => dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${total()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <div className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</div>
    </div>
  )
}

export default Cart