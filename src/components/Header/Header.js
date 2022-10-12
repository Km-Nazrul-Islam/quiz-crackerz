import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl text-black">Quick Quiz</Link>
            </div>

            <div className="">
                <nav className='text-2xl text-pink-500 font-semibold py-4 space-x-8'>
                    <Link to='/home'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/about'>About</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;


