import React from "react";
import facebook from "./facebook-f-brands.svg";
// import logo from "./logo.png";
// import logo from "./logo.png";
// import logo from "./logo.png";
import "./template1.css";

function Template1() {
	return (
		<div className="template1">
			<img src="" alt="profile" srcset="" />
			<div className="social-links">
				{/* <img src={facebook} alt="facebooklogo" /> */}
			</div>

			<div>
				<h5>First Name</h5>
				<h5>Last Name</h5>
			</div>
			<p>Job Title</p>
			<p>Department</p>
			<p>Company</p>

			<hr />
			<p>Phone Number | Mobile Number</p>
			<p>aaa@aaa.com</p>
			<p>www.aaa.com</p>
			<p>line1, line2, line3, line4</p>
		</div>
	);
}

export default Template1;
