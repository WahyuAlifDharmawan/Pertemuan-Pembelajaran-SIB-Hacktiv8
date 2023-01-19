import { Link, Outlet } from "react-router-dom";

export default function Members(){
    return (
        <div>
            <h1>Members Page</h1>
            <p>Select a member to be shown</p>
            <Link to="John Doe">John Doe</Link> |{" "}
            <Link to="Doe Jane">Doe Jane</Link>
            <Outlet />
        </div>
    )
}