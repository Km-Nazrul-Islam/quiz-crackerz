import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';

const Home = () => {
    const carts = useLoaderData().data;
    
    return (
        <div>
            <div>
                <Hero></Hero>
            </div>
            <div className='grid grid-cols-4 mx-20 mt-8'>
                {
                    carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }

            </div>
        </div>
    );
};

export default Home;