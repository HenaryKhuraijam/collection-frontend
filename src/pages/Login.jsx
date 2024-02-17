import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="loginForm-contaniner">
            
            <form className="login-form" action="submit">
            <h1>Welcome to Bros Group</h1>
            <p>High Alert !!! If enter wrong data to Login we will Destroy your system</p>
                <input type="text" placeholder="Enter your UserID" />
                <input type="text" placeholder="Enter your Password" />
                <button>Submit</button>
                <Link to="/register">Sign Up</Link>
            </form>
        </div>
    )
}

export default Login