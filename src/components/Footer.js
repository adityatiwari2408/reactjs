import { Button } from '@material-ui/core'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"

export default function Footer() {
    return (
        <div className='footer'>
            <div className='Back'>
                <Button className='Backtotop'>Back to top</Button>
            </div>
            <div className='Footer-card'>
                <div className='footer-details'>
                    <ul>
                        <h3>Get to know us</h3>
                        <li><a href='home'>About us</a></li>
                        <li><a href='home'>Carrers</a></li>
                        <li><a href='home'>Press release</a></li>
                        <li><a href='home'>Amazon cares</a></li>
                    </ul>
                    <ul>
                        <h3>Connect with us</h3>
                        <li><a href='/'><FontAwesomeIcon icon={faFacebook} size={"2x"} color="#4968ad" /> Facebook</a></li>
                        <li><a href='home'><FontAwesomeIcon icon={faTwitter} size={"2x"} color="#49a1eb" /> Twitter</a></li>
                        <li><a href='home'><FontAwesomeIcon icon={faInstagram} size={"2x"} color="pink" /> Instagram</a></li>
                    </ul>
                    <ul>
                        <h3>Let us help</h3>
                        <li><a href='home'>Account</a></li>
                        <li><a href='home'>Delivery</a></li>
                        <li><a href='home'>Complain</a></li>
                        <li><a href='home'>Help</a></li>
                    </ul>
                </div>
                <hr style={{ color: "grey", height: "" }}></hr>
            </div>
        </div>
    )
}
