import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { useState } from "react";

export default function Collaborator() {
    const [clbrData, setCobrData] = useState();
    const navigate = useNavigate();

    async function handleCollabForm(event) {
        event.preventDefault();
        const date = new Date().toDateString("en-IN", {
            timeZone: "Asia/Kolkata"
        })
        const time = new Date().toTimeString("en-IN", {
            timeZone: "Asia/Kolkata"
        })
        const dataToSend = {
            ...clbrData,
            takenBy: localStorage.getItem("name"),
            date: date,
            time: time
        }
        let resp = await fetch(`${import.meta.env.VITE_API_URL}/add-collab`, {
            method: "post",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "Application/json"
            },
            credentials: "include"
        })
        resp = await resp.json();
        if(resp.success) {
            console.log("Data stored")
            navigate("/collab")
        }
        else {
            console.log("Data not stored", resp)
        }
    }

    return (
        <>
            <div className="container">
                <h1> Add collaborator </h1>
                <form onSubmit={handleCollabForm}>
                    <label htmlFor="name"> Name: </label>
                    <input type="text" placeholder="Enter name" name="name" id="name" onChange={(ev) => setCobrData({...clbrData, name: ev.target.value})} />

                    <label htmlFor="address"> Address: </label>
                    <input type="text" placeholder="Enter address" name="address" id="address" onChange={(ev) => setCobrData({...clbrData, address: ev.target.value})} />

                    <label htmlFor="phone"> Mobile number: </label>
                    <input type="text" placeholder="Enter mobile number" name="phone" id="phone" onChange={(ev) => setCobrData({...clbrData, phone: ev.target.value})} />

                    <label htmlFor="amount"> Amount: </label>
                    <input type="text" placeholder="Enter amount" name="amount" id="amount" onChange={(ev) => setCobrData({...clbrData, amount: ev.target.value})} />

                    <button type="submit"> Add collaborator </button>
                </form>
                <Link to="/" className="home-link"> Go to Home </Link>
            </div>
        </>
    )
}