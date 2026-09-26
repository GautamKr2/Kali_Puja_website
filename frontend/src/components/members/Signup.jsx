import { useState } from "react";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [memberData, setMemberData] = useState();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    async function handleSignupForm(event) {
        event.preventDefault();
        let resp = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
            method: "post",
            body: JSON.stringify(memberData),
            headers: {
                "Content-Type": "Application/json"
            }
        })
        resp = await resp.json();
        if(resp.success) {
            console.log("SignUp successful")
            navigate("/login")
        }
        else {
            console.log("SignUp failed")
            setMessage(resp.message);
            navigate("/signup");
        }
    }

    return (
        <>
            <div className="container">
                <h1> Sign Up </h1>
                <form onSubmit={handleSignupForm}>
                    <label htmlFor="name"> Name: </label>
                    <input type="text" placeholder="Enter your name" name="name" id="name" onChange={(ev) => setMemberData({...memberData, name: ev.target.value})} />

                    <label htmlFor="phone"> Phone: </label>
                    <input type="text" placeholder="Enter your mobile number" name="phone" id="phone" onChange={(ev) => setMemberData({...memberData, phone: ev.target.value})} />

                    <label htmlFor="username"> Username: </label>
                    <input type="text" placeholder="Enter username" name="username" id="username" onChange={(ev) => setMemberData({...memberData, username: ev.target.value})} />

                    <label htmlFor="password"> Create new password: </label>
                    <input type="text" placeholder="Enter new password" name="password" id="password" onChange={(ev) => setMemberData({...memberData, password: ev.target.value})} />

                    <label htmlFor="cnf_pass"> Confirm password: </label>
                    <input type="text" placeholder="Again enter password" name="cnf-password" id="cnf_pass" onChange={(ev) => setMemberData({...memberData, cnf_password: ev.target.value})} />

                    {
                        message == "missing"
                            ? <p className="text-red-600 -mt-3 md:-mt-5 text-[11px] md:text-sm"> *Something s missing above </p>
                        
                            : message == "not_member"
                                ? <p className="text-red-600 -mt-3 md:-mt-5 text-[11px] md:text-sm"> *You are not a member, you can't signup. </p>

                            : message == "cnf_pass_fld"
                                ? <p className="text-red-600 -mt-3 md:-mt-5 text-[11px] md:text-sm"> *Confirmation password is not same. </p>
                            :
                                null
                    }

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