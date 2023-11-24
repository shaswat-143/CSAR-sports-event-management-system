import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<div className="footer">
			<div className="col">
				<div className="head-line">
					<h1>Get in touch</h1>
					<p className="text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div className="social-media">
					<Link className="icon" to="#link">
						<FaFacebook />
					</Link>
					<Link className="icon" to="#link">
						<FaInstagram />
					</Link>
					<Link className="icon" to="#link">
						<FaTwitter />
					</Link>
					<Link className="icon" to="#link">
						<FaLinkedin />
					</Link>
				</div>
			</div>
			<div className="quick-link">
				<div className="col">
					<h1>Quick Link</h1>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
						<li>Login</li>
					
					</ul>
				</div>
				<div className="col">
					<h1>Event</h1>
					<ul>
						<li>About</li>
						<li>Mission</li>
						<li>Services</li>
						<li>Social</li>
				
					</ul>
				</div>
                <div className="col" id="last-col">
					<form action="#comm" method="post">
                        <h1>Quick Contact</h1>
                        <input type="email"  name="email" placeholder="Enter your email" required/>
                        <button>Send</button>
                    </form>
				</div>
			
			
			
			</div>
			{/* <p className="copy">© 2021 - 2022</p> */}
		</div>
	);
}

export default Footer;
