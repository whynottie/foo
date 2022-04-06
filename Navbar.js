import react from "react";
import { useState } from "react";

import "./Navbar.css"
export default function Navbar() {
    const [click, setClick] = useState(false);
  
    return (
        <div className="navigation-bar">
            <div className="logos">
                <img src="./eve.png" className="nav-logos" />
            </div>
            <button className="ham-icon" >
            </button>
            <div classname="nav-menu" >
                <ul className="lists" >
                    <li className="items" display="flex">
                        <a className="textitems" href="/Home" >
                            Home
                        </a>
                    </li>
                    <li className="items" color="white" >
                        <a className="textitems" href="/About Me">
                            About Me
                        </a>
                    </li>
                    <li className="items">
                        <a className="textitems" href="/Gallery">
                            Gallery
                        </a>
                    </li>
                    <li className="items">
                        <a className="textitems" href="/Payment">
                            Payment
                        </a>
                    </li>
                    <li className="items">
                        <a className="textitems" href="/Book">
                            Book Me
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )


}