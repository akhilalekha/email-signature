import "./App.css";
import Form from "./form/Form";
import Template1 from "./templates/template1/Template1";
import FormState from "./context/FormState";

function App() {
	return (
		<FormState>
			<div className="App">
				<Form />
				<Template1 />
			</div>
		</FormState>
	);
}

export default App;
