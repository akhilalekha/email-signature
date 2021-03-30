import React from "react";
import { useForm } from "react-hook-form";

import "./form.css";

function Form() {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => console.log(data);

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<label>First Name</label>
			<input name="firstName" ref={register} placeholder="John" />
			<label>Last Name</label>
			<input name="lastName" ref={register} placeholder="Doe" />
			<label>Job Title</label>
			<input name="jobTitle" ref={register} placeholder="Consultant" />
			<label>Department</label>
			<input name="department" ref={register} placeholder="Business" />
			<label>Company Name</label>
			<input name="companyName" ref={register} placeholder="Neoito" />
			<label>Office Number</label>
			<input name="phoneNum" ref={register} placeholder="111 222 333" />
			<label>Mobile Number</label>
			<input name="mobileNum" ref={register} placeholder="11 222 333" />
			<label>Website URL</label>
			<input name="siteUrl" ref={register} placeholder="john@doe.com" />
			<label>Email Address</label>
			<input name="email" ref={register} placeholder="www.neoito.com" />
			<label>Address</label>
			<input name="addLine1" ref={register} placeholder="Address Line 1" />
			<input name="addLine2" ref={register} placeholder="Address Line 2" />
			<input name="addLine3" ref={register} placeholder="Address Line 3" />
			<input name="addLine4" ref={register} placeholder="Address Line 4" />
			<label>Social Links</label>
			<input
				name="linkedin"
				ref={register}
				placeholder="https://www.linkedin.com"
			/>
			<input
				name="facebook"
				ref={register}
				placeholder="https://www.facebook.com"
			/>
			<input
				name="twitter"
				ref={register}
				placeholder="https://www.twitter.com"
			/>
			<input
				name="instagram"
				ref={register}
				placeholder="https://www.instagram.com"
			/>

			<input className="submit-btn" type="submit" />
		</form>
	);
}

export default Form;
