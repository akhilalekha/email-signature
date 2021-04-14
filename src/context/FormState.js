import React, { useReducer } from "react";
import FormContext from "./formContext";
import FormReducer from "./formReducer";

import { SET_TEMPLATE } from "./types";

const FormState = props => {
	const initialState = {
		formData: {}
	};

	const [state, dispatch] = useReducer(FormReducer, initialState);

	const setFormData = data => {
		// console.log("in form context", { data });
		dispatch({
			type: SET_TEMPLATE,
			payload: data
		});
	};

	return (
		<FormContext.Provider
			value={{
				formData: state.formData,
				setFormData
			}}
		>
			{props.children}
		</FormContext.Provider>
	);
};

export default FormState;
