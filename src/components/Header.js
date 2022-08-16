import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
    return (
        <nav className="header" style={{ backgroundColor: "black" }}>
            <Link to={"/"}>
                <img src='logo6.png' alt='logo' className="header-logo"></img>
            </Link>
            <div className='header-search'>
                <input className='header-searchinput' type={"text"} />
                <SearchIcon className="header-searchIcon" />

            </div>
            <div className='header-nav'>
                <Link to="/login" className='header-link'>
                    <div className='header-option'>
                        <span className='header-option1'>Hello</span>
                        <span className='header-option2'>Sign IN</span>
                    </div>
                </Link>

            </div>
            <div className='header-nav'>
                <Link to="/login" className='header-link'>
                    <div className='header-option'>
                        <span className='header-option1'>Returns</span>
                        <span className='header-option2'>&orders</span>
                    </div>
                </Link>
                <div className='header-nav'>
                    <Link to="/" className='header-link'>
                        <div className='header-option'>
                            <span className='header-option1'>Your</span>
                            <span className='header-option2'>Prime Video</span>
                        </div>
                    </Link>
                </div>
                <Link to="/login" className='header-link'>
                    <div className='header-optioncart'>
                        <ShoppingCartIcon />
                        <span className='header-option2 header-basketcount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header