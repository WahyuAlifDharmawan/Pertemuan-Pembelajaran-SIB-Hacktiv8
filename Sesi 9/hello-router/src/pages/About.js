import { Link, Outlet } from "react-router-dom";

export default function About(){
    return(
        <div>
            <h1>
                About Us
            </h1>
            <p>
                This is my About Us Page
            </p>
            <Link to="about-company">About The Company</Link> |{" "}
            <Link to="about-me">About Me</Link>
            <Outlet />
        </div>
    )
}