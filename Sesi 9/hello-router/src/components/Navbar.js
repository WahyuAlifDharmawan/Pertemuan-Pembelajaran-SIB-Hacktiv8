import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }
    return(
        <nav>
            <Link to="/">Home</Link> | {" "} 
            <Link to="/about">About Us</Link> | {" "}
            <Link to="/members">Members</Link> | {" "}
            <Link to="/items">Items</Link> | {" "}
            { localStorage.getItem("token")
            &&
            <button className="logout-button"
            onClick={() => handleLogout()}>
                Logout
            </button>
            }
        </nav>
    )
}