import { Link } from "react-router-dom";
import "../../App.css";

export default function Login() {
    return (
        <>
            <div className="container">
                <h1> Login </h1>
                <form>
                    <label htmlFor="phone"> Phone: </label>
                    <input type="text" placeholder="Enter your mobile number" id="phone" />

                    <label htmlFor="username"> Username: </label>
                    <input type="text" placeholder="Enter username" id="username" />

                    <label htmlFor="password"> Enter password: </label>
                    <input type="text" placeholder="Enter your password" id="password" />

                    <button type="submit"> Login </button>
                </form>
                <Link to="/signup" className="link"> Signup </Link>
            </div>
        </>
    )
}