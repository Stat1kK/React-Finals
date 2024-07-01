import React from 'react';
import {NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

<NavLink/>


function Navbar(props) {


    return (<nav style={{background:"#222426"}} className="navbar navbar-dark navbar-expand-lg">
            <div  className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse justify-content-center  navbar-collapse" id="navbarNavAltMarkup">
                    <div className="  navbar-nav">
                        <Link style={{color:"white"}} className="nav-link active" to={"/"}>Home</Link>
                        <Link style={{color:"white"}} className="nav-link active" to={"/Randogs"}>Randogs</Link>
                        <Link style={{color:"white"}} className="nav-link active" to={"/gallery"}>Gallery</Link>

                    </div>
                </div>
            </div>
        </nav>
    );


}

export default Navbar;