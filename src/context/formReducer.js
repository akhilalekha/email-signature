import { SET_TEMPLATE } from "./types";

export default function fr(state, action) {
	switch (action.type) {
		case SET_TEMPLATE:
			return {
				...state,
				formData: action.payload
			};
		default:
			return state;
	}
}
