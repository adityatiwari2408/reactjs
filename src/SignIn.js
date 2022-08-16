import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./SignIn.css"


function SignIn() {
    const [delivery, setdelivery] = useState(false)
    console.log(delivery);
    return (
        <div className='Signin'>
            <Link to={"/"}>
                <img src='logo7.png' alt='logo' className='signIn-logo' />
            </Link>
            <div className='Sign-Container'>
                <h1>create your account</h1>
                <form className='Signin-form'>
                    <h5>Name</h5>
                    <input type={"text"} placeholder="Name" />
                    <h5>Email</h5>
                    <input type={"text"} placeholder="Email" />
                    <h5>Phone no</h5>
                    <input type={"tel"} range={10} placeholder="Phone-no" />
                    <h5>Password</h5>
                    <input type={"Password"} required placeholder="Password" />
                    <h5>Confirm your Password</h5>
                    <input type={"Password"} placeholder=" ConfirmPassword" />
                    <button type='submit' className='form-btn'>Continue</button>
                </form>
                <hr style={{ color: "lightgray", width: "100%" }} className="line-seprator" />
                <div className='Signup-details'>
                    <button type='submit' className='form-btn' onClick={() => { setdelivery(true) }}>Create Agent Account</button><br />
                    <span>Already have an account  <Link to={'/Login'} style={{ textDecoration: "none" }}>Sign-in</Link></span><br />
                    <span>Login for our delivery Partners   <Link to={'/Login'} style={{ textDecoration: "none" }}>Sign-in</Link></span>
                </div>
            </div>

        </div>
    )
}

export default SignIn