import React from "react";
import { useForm } from "react-hook-form";

import "./Form.css";

function Form() {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			firstName: "John",
			lastName: "Doe",
			jobTitle: "Product Marketing Manager",
			department: "Marketing",
			companyName: "Neoito",
			phoneNum: "111 222 333",
			mobileNum: "111 222 333",
			siteUrl: "www.neoito.com",
			email: "john@doe.com",
			addLine1: "street",
			addLine2: "city",
			addLine3: "city",
			addLine4: "state",
			linkedin: "www.linkedin.com",
			facebook: "www.facebook.com",
			twitter: "www.twitter.com",
			instagram: "www.instagram.com",
			isDeveloper: true
		}
	});
	const onSubmit = data => console.log(data);

	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<h4>Enter your signature details</h4>
				<label htmlFor="firstName">First Name</label>
				<input name="firstName" ref={register} placeholder="John" />

				<label htmlFor="lastName">Last Name</label>
				<input name="lastName" ref={register} placeholder="Doe" />

				<label htmlFor="jobTitle">Job Title</label>
				<input name="jobTitle" ref={register} placeholder="Consultant" />

				<label htmlFor="department">Department</label>
				<input name="department" ref={register} placeholder="Business" />

				<label htmlFor="companyName">Company Name</label>
				<input name="companyName" ref={register} placeholder="Neoito" />

				<label htmlFor="phoneNum">Office Number</label>
				<input name="phoneNum" ref={register} placeholder="111 222 333" />

				<label htmlFor="mobileNum">Mobile Number</label>
				<input name="mobileNum" ref={register} placeholder="11 222 333" />

				<label htmlFor="siteUrl">Website URL</label>
				<input name="siteUrl" ref={register} placeholder="john@doe.com" />

				<label htmlFor="email">Email Address</label>
				<input
					name="email"
					ref={register}
					placeholder="www.neoito.com"
					type="email"
				/>
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
		</div>
	);
}

export default Form;
