import React from 'react';
import { Link } from 'react-router-dom';
const Cart = ({cart}) => {
    const {name, logo, total, id} = cart
    return (
        <div className='border-2 border-pink-500 rounded-xl m-4'>
            <div className="card w-56 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{total}</p>
                    <div className="card-actions">
                        <Link to={`/topics/${id}`}><button className="btn btn-primary">Start Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;