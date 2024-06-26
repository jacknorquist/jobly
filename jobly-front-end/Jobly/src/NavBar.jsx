import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./User/userContext";

/**
 * NavBar component links to Companies, Jobs, Home
 *
 * Props: logout()
 * State: none
 *
 * App-> NavBar-> Links & NavLinks
 */

//Refactor to make user links a component and anon links a component
function NavBar({ logout }) {
    const { user } = useContext(userContext);
    return (
        <div className="Navbar">

            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <Link className="Home nav-link" to="/">Jobly</Link>


                    {user ?
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4">
                                <NavLink className="Companies nav-link" to="/companies">Companies</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="Jobs nav-link" to="/jobs">Jobs</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="Jobs nav-link" to="/profile">Profile</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="Jobs nav-link" onClick={logout}>Log out {user.username}</NavLink>
                            </li>
                        </ul>
                        :
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4">
                                <NavLink className="Jobs nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="Jobs nav-link" to="/signup">Signup</NavLink>
                            </li>
                        </ul>
                    }

                </div>
            </nav>
        </div>
    );
}


export default NavBar;