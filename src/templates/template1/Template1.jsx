import React, { useContext } from "react";
import facebook_icon from "../facebook_circle.svg";
import linkedin_icon from "../linkedin_circle.svg";
import twitter_icon from "../twitter_circle.svg";
import instagram_icon from "../instagram_circle.svg";
import pin_icon from "../pin.svg";
import phone_icon from "../phone-alt-solid.svg";
import mail_icon from "../envelope-solid.svg";
import link_icon from "../chain.svg";
import profileImg from "../user-circle-solid.svg";
import "./Template1.css";
import FormContext from "../../context/formContext";

function Template1() {
	const formContext = useContext(FormContext);

	const { formData } = formContext;
	const {
		firstName,
		lastName,
		jobTitle,
		department,
		companyName,
		email,
		facebook,
		instagram,
		twitter,
		linkedin,
		addLine1,
		addLine2,
		addLine3,
		addLine4,
		mobileNum,
		phoneNum,
		siteUrl
	} = formData;

	console.log(formData);
	return (
		<div className="template1">
			<div className="signature">
				<div className="details">
					<img className="profile-img" src={profileImg} alt="profile" />
					<div className="basic-details">
						<p className="fullname">
							{firstName} {lastName}
						</p>
						<p>{jobTitle}</p>
						<p>
							{department} | {companyName}
						</p>
					</div>
					<hr className="vr" />
					<div className="contact-details">
						<img className="contact-icon" src={phone_icon} alt="phone icon" />
						<p>
							{phoneNum} | {mobileNum}
						</p>
						<img className="contact-icon" src={mail_icon} alt="mail icon" />
						<a href="john@doe.com">{email}</a>
						<img className="contact-icon" src={link_icon} alt="url icon" />
						<a href="www.neoito.com">{siteUrl}</a>
						<img className="contact-icon" src={pin_icon} alt="location icon" />
						<p>
							{addLine1 ? addLine1 + "," : ""} {addLine2 ? addLine2 + "," : ""}{" "}
							{addLine3 ? addLine3 + "," : ""} {addLine4 ? addLine4 : ""}
						</p>
					</div>
				</div>

				<hr />
				<div className="social-links">
					<a href={linkedin}>
						<img
							className="social-logo"
							src={linkedin_icon}
							alt="linkedin logo"
						/>
					</a>
					<a href={facebook}>
						<img
							className="social-logo"
							src={facebook_icon}
							alt="facebook logo"
						/>
					</a>
					<a href={twitter}>
						<img
							className="social-logo"
							src={twitter_icon}
							alt="twitter logo"
						/>
					</a>
					<a href={instagram}>
						<img
							className="social-logo"
							src={instagram_icon}
							alt="instagram logo"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Template1;
