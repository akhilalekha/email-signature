import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import FormContext from "../context/formContext";
import "./Form.css";

function Form() {
	const formContext = useContext(FormContext);

	const { register } = useForm({
		defaultValues: {
			firstName: "John",
			lastName: "Doe",
			jobTitle: "Product Marketing Manager",
			department: "Marketing",
			companyName: "Neoito",
			phoneNum: "111 222 333",
			mobileNum: "111 222 333",
			siteUrl: "https://www.neoito.com",
			email: "john@doe.com",
			addLine1: "street",
			addLine2: "city",
			addLine3: "city",
			addLine4: "state",
			linkedin: "https://www.linkedin.com",
			facebook: "https://www.facebook.com",
			twitter: "https://www.twitter.com",
			instagram: "https://www.instagram.com",
			isDeveloper: true
		}
	});

	const [template, setTemp] = useState({
		firstName: "",
		lastName: "",
		jobTitle: "",
		department: "",
		companyName: "",
		phoneNum: "",
		mobileNum: "",
		siteUrl: "",
		email: "",
		addLine1: "",
		addLine2: "",
		addLine3: "",
		addLine4: "",
		linkedin: "",
		facebook: "",
		twitter: "",
		instagram: ""
	});

	function handleChange(e) {
		const { name, value } = e.target;
		// console.log("e.target", e.target.value);

		setTemp(prevValue => {
			return {
				...prevValue,
				[name]: value
			};
		});

		formContext.setFormData(template);
	}

	// const setTemplate = data => formContext.setFormData(data);

	return (
		<div className="form-container">
			<form className="form">
				<h4>Enter your signature details</h4>
				<label htmlFor="firstName">First Name</label>
				<input
					name="firstName"
					ref={register}
					onChange={handleChange}
					placeholder="John"
				/>

				<label htmlFor="lastName">Last Name</label>
				<input
					name="lastName"
					ref={register}
					onChange={handleChange}
					placeholder="Doe"
				/>

				<label htmlFor="jobTitle">Job Title</label>
				<input
					name="jobTitle"
					ref={register}
					onChange={handleChange}
					placeholder="Consultant"
				/>

				<label htmlFor="department">Department</label>
				<input
					name="department"
					ref={register}
					onChange={handleChange}
					placeholder="Business"
				/>

				<label htmlFor="companyName">Company Name</label>
				<input
					name="companyName"
					ref={register}
					onChange={handleChange}
					placeholder="Neoito"
				/>

				<label htmlFor="phoneNum">Office Number</label>
				<input
					name="phoneNum"
					ref={register}
					onChange={handleChange}
					placeholder="111 222 333"
				/>

				<label htmlFor="mobileNum">Mobile Number</label>
				<input
					name="mobileNum"
					ref={register}
					onChange={handleChange}
					placeholder="11 222 333"
				/>

				<label htmlFor="siteUrl">Website URL</label>
				<input
					name="siteUrl"
					ref={register}
					onChange={handleChange}
					placeholder="john@doe.com"
				/>

				<label htmlFor="email">Email Address</label>
				<input
					name="email"
					ref={register}
					onChange={handleChange}
					placeholder="www.neoito.com"
					type="email"
				/>
				<label>Address</label>
				<input
					name="addLine1"
					ref={register}
					onChange={handleChange}
					placeholder="Address Line 1"
				/>
				<input
					name="addLine2"
					ref={register}
					onChange={handleChange}
					placeholder="Address Line 2"
				/>
				<input
					name="addLine3"
					ref={register}
					onChange={handleChange}
					placeholder="Address Line 3"
				/>
				<input
					name="addLine4"
					ref={register}
					onChange={handleChange}
					placeholder="Address Line 4"
				/>
				<label>Social Links</label>
				<input
					name="linkedin"
					ref={register}
					placeholder="https://www.linkedin.com"
					onChange={handleChange}
				/>
				<input
					name="facebook"
					ref={register}
					placeholder="https://www.facebook.com"
					onChange={handleChange}
				/>
				<input
					name="twitter"
					ref={register}
					placeholder="https://www.twitter.com"
					onChange={handleChange}
				/>
				<input
					name="instagram"
					ref={register}
					placeholder="https://www.instagram.com"
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}

export default Form;
