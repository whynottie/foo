import react from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"
export default function Footer() {
    return (
        <div className="Footer-bar">
            <div className="logos">
                <img src="./eve.png" className="Footer-logos" />
            </div>
            <div classname="Footer-menu" >
                <ul className="Flists" >
                    <li className="Fitems" display="flex">
                        <a className="Ftextitems" href="/Home" >
                            Home
                        </a>
                    </li>
                    <li className="Fitems" color="white" >
                        <a className="Ftextitems" href="/About Me">
                            About Me
                        </a>
                    </li>
                    <li className="Fitems">
                        <a className="Ftextitems" href="/Gallery">
                            Gallery
                        </a>
                    </li>
                    <li className="Fitems">
                        <a className="Ftextitems" href="/Payment">
                            Payment
                        </a>
                    </li>
                    <li className="Fitems">
                        <a className="Ftextitems" href="/Book">
                            Book Me
                        </a>
                    </li>
                </ul>
                <div className="socials">
                    <a href="https://www.facebook.com/EvesGardenJust1Bite"
                        className="facebook-social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/@eves_garden_just1bite"
                        className="instagram-social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>

            </div>
        </div>
    )
}