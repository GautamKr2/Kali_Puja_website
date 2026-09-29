import { Navigate } from "react-router-dom";

export default function Protected({ children }) {
    if(!localStorage.getItem("name")) {
        return <Navigate to="/member/login" />
    }
    return children
}