import { Link,useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdminSection() {
    const navigate = useNavigate();

    async function handleAdmin() {
        let response  = await fetch(`${import.meta.env.VITE_API_URL}/admin`, {
            method: "post",
            credentials: "include"
        });
        response = await response.json();
        if(!response.success) {
            navigate("/member/login");
        }
        else {
            if(localStorage.getItem("name") !== "Gautam Kumar") {
                alert("You are not admin, you can't access this page");
                navigate("/");
            }
        }
    }
    useEffect(() => {
        handleAdmin();
    }, []);
    return (
        <>
            <div className="container">
                <h1> Admin Section </h1>
                <ul className="flex flex-col gap-4 items-center mb-2">
                    <li className="admin-list-item"> <Link to="/admin/member-list">Member List</Link> </li>
                    <li className="admin-list-item"> <Link to="/admin/login-member-list">Signed-in Member List</Link> </li>
                    <li className="admin-list-item"> <Link to="/admin/collaborators-list">Collaborators List</Link> </li>
                </ul>
            </div>
        </>
    )
}