import React from "react";
import facebook from "./facebook_circle.svg";
import linkedin from "./linkedin_circle.svg";
import twitter from "./twitter_circle.svg";
import instagram from "./instagram_circle.svg";
import pin from "./pin.svg";
import phone from "./phone-alt-solid.svg";
import mail from "./envelope-solid.svg";
import link from "./chain.svg";
import profileImg from "./user-circle-solid.svg";
import "./template1.css";

function Template1() {
	return (
		<div className="template1">
			<div className="signature">
				<div className="details">
					<img className="profile-img" src={profileImg} alt="profile" />
					<div className="basic-details">
						<p className="fullname">John Doe</p>
						<p>Job Title</p>
						<p>Department | Company</p>
					</div>
					<hr className="vr" />
					<div className="contact-details">
						<img className="contact-icon" src={phone} alt="phone icon" />
						<p>Phone Number | Mobile Number</p>

						<img className="contact-icon" src={mail} alt="mail icon" />
						<a href="aaa@aaa.com">aaa@aaa.com</a>

						<img className="contact-icon" src={link} alt="url icon" />
						<a href="aaa@aaa.com">aaa@aaa.com</a>

						<img className="contact-icon" src={pin} alt="location icon" />
						<p>line1, line2, line3, line4</p>
					</div>
				</div>

				<hr />
				<div className="social-links">
					<a href="www.linkedin.com">
						<img className="social-logo" src={linkedin} alt="linkedin logo" />
					</a>
					<a href="www.facebook.com">
						<img className="social-logo" src={facebook} alt="facebook logo" />
					</a>
					<a href="www.twitter.com">
						<img className="social-logo" src={twitter} alt="twitter logo" />
					</a>
					<a href="www.instagram.com">
						<img className="social-logo" src={instagram} alt="instagram logo" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Template1;
