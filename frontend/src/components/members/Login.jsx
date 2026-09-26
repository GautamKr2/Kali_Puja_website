import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { useState } from "react";

export default function Login() {
    const [memberData, setMemberData] = useState();
    const navigate = useNavigate();

    async function handleLoginForm(event) {
        event.preventDefault();
        let response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
            method: "post",
            body: JSON.stringify(memberData),
            headers: {
                "Content-Type": "Application/json"
            }
        })
        response = await response.json();
        if(response.success) {
            console.log("Login successful")
            navigate("/collab");
        }
        else {
            console.log("Login failed")
            alert("Login failed");
            navigate("/login")
        }
    }

    return (
        <>
            <div className="container">
                <h1> Login </h1>
                <form onSubmit={handleLoginForm}>
                    <label htmlFor="phone"> Phone: </label>
                    <input type="text" placeholder="Enter your mobile number" name="phone" id="phone" onChange={(ev) => setMemberData({...memberData, phone: ev.target.value})} />

                    <label htmlFor="username"> Username: </label>
                    <input type="text" placeholder="Enter username" name="username" id="username" onChange={(ev) => setMemberData({...memberData, username: ev.target.value})} />

                    <label htmlFor="password"> Enter password: </label>
                    <input type="text" placeholder="Enter your password" name="password" id="password" onChange={(ev) => setMemberData({...memberData, password: ev.target.value})} />

                    <button type="submit"> Login </button>
                </form>
                <div className="link-container">
                    <p className="link-text"> For new user, click for sign up: </p>
                    <Link to="/signup" className="link"> Click here </Link>
                </div>
            </div>
        </>
    )
}