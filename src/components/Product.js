import React from 'react'
import "./Product.css"
import { useStateValue } from '../StateProvider';


function Product({ id, title, price, rating, image }) {
    const [{ }, dispatch] = useStateValue();
    const addtobasket = () => {
        dispatch({
            type: "Addtobasket",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    };
    const removefrombasket = () => {
        dispatch({
            type: "removefrombasket",
            id: id,
        });
    }
    return (
        <div className='product'>
            <div className='product-info'>
                <p>{title}</p>
                <p className='product-price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product-rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>*</p>
                    ))}
                </div>

            </div>
            <img src={image} alt="product logo" className="product-img" />
            <button onClick={addtobasket} >Add to cart</button>
            <button onClick={removefrombasket} >Remove from cart</button>

        </div>
    )
}

export default Product