import React from "react";
import { useForm } from "react-hook-form";

import "./form.css";

function Form() {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => console.log(data);

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<label>First Name</label>
			<input name="firstName" ref={register} />
			<label>Last Name</label>
			<input name="lastName" ref={register} />
			<label>Job Title</label>
			<input name="jobTitle" ref={register} />
			<label>Department</label>
			<input name="department" ref={register} />
			<label>Company Name</label>
			<input name="companyName" ref={register} />
			<label>Office Number</label>
			<input name="phoneNum" ref={register} />
			<label>Mobile Number</label>
			<input name="mobileNum" ref={register} />
			<label>Website URL</label>
			<input name="siteUrl" ref={register} />
			<label>Email Address</label>
			<input name="email" ref={register} />
			<label>Address</label>
			<input name="addLine1" ref={register} />
			<input name="addLine2" ref={register} />
			<input name="addLine3" ref={register} />
			<input name="addLine4" ref={register} />
			<label>Social Links</label>
			<input name="linkedin" ref={register} />
			<input name="facebook" ref={register} />
			<input name="twitter" ref={register} />
			<input name="instagram" ref={register} />

			<input type="submit" />
		</form>
	);
}

export default Form;
