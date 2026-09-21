import { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Signup() {
    const [memberData, setMemberData] = useState();
    console.log(memberData)

    function handleSubmit() {

    }

    return (
        <>
            <div className="container">
                <h1> Sign Up </h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name"> Name: </label>
                    <input type="text" placeholder="Enter your name" id="name" onChange={(ev) => setMemberData({...memberData, name: ev.target.value})} />

                    <label htmlFor="phone"> Phone: </label>
                    <input type="text" placeholder="Enter your mobile number" id="phone" onChange={(ev) => setMemberData({...memberData, phone: ev.target.value})} />

                    <label htmlFor="username"> Username: </label>
                    <input type="text" placeholder="Enter username" id="username" onChange={(ev) => setMemberData({...memberData, username: ev.target.value})} />

                    <label htmlFor="password"> Create new password: </label>
                    <input type="text" placeholder="Enter new password" id="password" onChange={(ev) => setMemberData({...memberData, password: ev.target.value})} />

                    <label htmlFor="cnf_pass"> Confirm password: </label>
                    <input type="text" placeholder="Again enter password" id="cnf_pass" onChange={(ev) => setMemberData({...memberData, cnf_password: ev.target.value})} />

                    <button type="submit"> Sign Up </button>
                </form>
                <div className="link-container">
                    <p className="link-text"> For existing user, click for login: </p>
                    <Link to="/login" className="link"> Click here </Link>
                </div>
            </div>
        </>
    )
}