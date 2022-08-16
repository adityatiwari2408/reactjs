import React from 'react'
import { Link } from "react-router-dom"
import "./Login.css"

function Login() {
    return (
        <div className='login'>
            <Link to={"/"}>
                <img src='logo7.png' alt='logo' className='login-logo' />
            </Link>
            <div className='login-container'>
                <h1>Sign-IN</h1>
                <form>
                    <h5>Email</h5>
                    <input type={"text"} className="login-input" placeholder='Enter your Email' required />
                    <h5 >Password</h5>
                    <input type={"password"} className="login-input" placeholder='Enter your password' required />
                    <button className='login-button' value={"submit"} type="submit">Continue</button>
                    <div className='legaltext-row'>
                        <h5>By continuing you are agree to Amazon's</h5><span><Link to={"/"} className="login-term">Conditon of Use</Link></span> and <span><Link to={"/"} className="login-term">Privacy Notice </Link></span>
                    </div>
                </form>
            </div>
            <div className='regester'>
                <span className=' regester-text'>----------New to Amazon?-----------</span>
                <Link to={"/SignIn"}><button type='submit' className='regester-button' value={"submit"} onClick={console.log("clicked")}>Create your Amazon account</button></Link>
                <Link to={"/SignIn"}><button type='submit' className='Login-button' value={"submit"}>Login For delivery partners</button></Link>
            </div>
            <hr style={{ color: "lightgray", backgroundColor: "lightgray", height: "2px", width: "100%" }} />
        </div>
    )
}

export default Login