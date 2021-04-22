import { useState } from "react";
import { isEmail } from "validator";

function useEmailHooks() {
	const [input, setInput] = useState("");
	const [inputError, setInputError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	function handleEmailOnChange(e) {
		let inputValue = e.target.value;
		let inputName = e.target.name;
		setInput(inputValue);

		let errorMessage;

		if (inputName === "E-mail") {
			if (isEmail(inputValue)) {
				return true;
			} else {
				return false;
			}
		} else {
			errorMessage = `${inputName} is in the wrong format.`;
		}
	}

	return [input, handleEmailOnChange, inputError, errorMessage];
}

export default useEmailHooks;
