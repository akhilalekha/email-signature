import React from "react";
import facebook from "./facebook_circle.svg";
import linkedin from "./linkedin_circle.svg";
import twitter from "./twitter_circle.svg";
import instagram from "./instagram_circle.svg";
import pin from "./pin.svg";
import phone from "./phone-alt-solid.svg";
import mail from "./envelope-solid.svg";
import link from "./chain.svg";
import "./template1.css";

function Template1() {
	return (
		<div className="template1">
			<div className="signature">
				<div className="details">
					<img
						className="profile-img"
						src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
						alt="profile"
					/>
					<div className="basic-details">
						<p className="fullname">First Name Last Name</p>
						<p>Job Title</p>
						<p>Department | Company</p>
					</div>
					<hr className="vr" />
					<div className="contact-details">
						<img className="contact-icon" src={phone} alt="phone icon" />
						<p>Phone Number | Mobile Number</p>

						<img className="contact-icon" src={mail} alt="mail icon" />
						<p>aaa@aaa.com</p>

						<img className="contact-icon" src={link} alt="url icon" />
						<p>www.aaa.com</p>

						<img className="contact-icon" src={pin} alt="location icon" />
						<p>line1, line2, line3, line4</p>
					</div>
				</div>

				<hr />
				<div className="social-links">
					<img className="social-logo" src={linkedin} alt="facebook logo" />
					<img className="social-logo" src={facebook} alt="facebook logo" />
					<img className="social-logo" src={twitter} alt="twitter logo" />
					<img className="social-logo" src={instagram} alt="instagram logo" />
				</div>
			</div>
		</div>
	);
}

export default Template1;
