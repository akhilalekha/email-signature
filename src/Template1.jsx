import React from "react";
import facebook from "./facebook-f-brands.svg";
import linkedin from "./linkedin-in-brands.svg";
import twitter from "./twitter-brands.svg";
import instagram from "./instagram-brands.svg";
import "./template1.css";

function Template1() {
	return (
		<div className="template1">
			<div className="signature">
				<img
					className="profile-img"
					src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
					alt="profile"
				/>
				<div className="details">
					<div className="basic-details">
						<div className="full-name">
							<h5>First Name</h5>
							<h5>Last Name</h5>
						</div>
						<p>Job Title</p>
						<p>Department | Company</p>
					</div>
					<div className="contact-details">
						<p>Phone Number | Mobile Number</p>
						<p>aaa@aaa.com</p>
						<p>www.aaa.com</p>
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
