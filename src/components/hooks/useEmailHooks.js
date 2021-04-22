import { useState } from "react";
import { isEmail } from "validator";

function useEmailHooks() {
	const [input, setInput] = useState("");
	const [inputError, setInputError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	function handleEmailOnChange(e) {
		let inputValue = e.target.value;
		setInput(inputValue);

		if (isEmail(inputValue)) {
			setInputError(false);
			setErrorMessage("");
		} else {
			setInputError(true);
			setErrorMessage("please enter a valid email");
		}
	}

	return [input, handleEmailOnChange, inputError, errorMessage];
}

export default useEmailHooks;
