import React from 'react'
import Banner from './components/Banner'
import Product from './components/Product'
import "./Home.css"

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home-row'>
                <Product
                    id="1"
                    title="RNG EKO GREEN RNG-2001 150 Watt / 5.5 KPA Car Handheld Vacuum Cleaner (White)"
                    price="300"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71yQQ2YAXNL._AC_UL480_FMwebp_QL65_.jpg" />
                <Product title="AmazonBasics Portable Digital Tyre Inflator with Carrying Case"
                    id="2"
                    price="300"
                    rating={5}
                    image="banner1.jpg " />
            </div>
            <div className='home-row'>
                <Product
                    id="3"
                    title="Bergmann Typhoon Heavy Duty Metal Car Tyre Inflator (Blue)"
                    price="300"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/818kmzObgCL._AC_UL480_FMwebp_QL65_.jpg " />
                <Product
                    id="4"
                    title="Mivi Roam 2 Wireless Bluetooth Speaker 5W, Portable Speaker with Studio Quality Sound, Powerful Bass, 24 Hours Playtime, Waterproof, Bluetooth 5.0 and in-Built Mic"
                    price="300"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81QP3C+rTbL._AC_UL480_QL65_.jpg " />
                <Product
                    id="5"
                    title="Boya BYM1 Omnidirectional Lavalier Condenser Microphone with 20ft Audio Cable (Black)"
                    price="300"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41UYenF+lnL._AC_UL480_QL65_.jpg " />
                <Product
                    id="6"
                    title="Sony SA-D40 4.1 Channel Multimedia Speaker System with Bluetooth (Black)"
                    price="300"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61EW1LZ2NHL._AC_UL480_QL65_.jpg " />
            </div>
            <div className='home-row'>
                <Product
                    id="7"
                    title="Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black"
                    price="300"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51kdFjyPRAL._SX679_.jpg " />
                <Product
                    id="8"
                    title="clock"
                    price="300"
                    rating={5}
                    image=" " />
                <Product
                    id="9"
                    title="clock"
                    price="300"
                    rating={5}
                    image=" " />
            </div>
            <div className='home-row'>
                <Product
                    id="10"
                    title="clock"
                    price="300"
                    rating={5}
                    image=" " />
            </div>
        </div>
    )
}

export default Home