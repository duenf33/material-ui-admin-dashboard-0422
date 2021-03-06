import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
	Button,
	CircularProgress,
	Snackbar,
	Grid,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import useInputHooks from "../hooks/useInputHooks";
import useEmailHooks from "../hooks/useEmailHooks";
import usePasswordHooks from "../hooks/usePasswordHooks";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: 350,
		},
	},
}));
function Signup() {
	const classes = useStyles();

	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	// const [email, setEmail] = useState("");

	// const [username, setUsername] = useState("");
	// const [firstName, setFirstName] = useState("");
	// const [lastName, setLastName] = useState("");

	// const [password, setPassword] = useState("");

	const [
		password,
		setPassword,
		inputPasswordError,
		errorPasswordMessage,
	] = usePasswordHooks();

	const [email, setEmail, inputEmailError, errorEmailMessage] = useEmailHooks();

	const [
		username,
		setUsername,
		inputUsernameError,
		errorUsernameMessage,
	] = useInputHooks();
	const [
		firstName,
		setFirstName,
		inputFirstNameError,
		errorFirstNameMessage,
	] = useInputHooks();
	const [
		lastName,
		setLastName,
		inputLastNameError,
		errorLastNameMessage,
	] = useInputHooks();

	// const [password, setPassword] = useInputHooks();

	function handleOnSubmit(e) {
		e.preventDefault();

		console.log(username);
		// console.log(email);
		// console.log(firstName);
		// console.log(lastName);
		// console.log(password);
	}
	let errorObj = { username, firstName, lastName, email, password };

	// console.log(password);
	useEffect(() => {
		if (!errorObj) {
			console.log("it works line 82");
		}
	}, [errorObj]);

	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justify="center"
			style={{ minHeight: "30vh" }}>
			<Grid item xs={12}>
				<form
					className={classes.root}
					autoComplete="on"
					onSubmit={handleOnSubmit}>
					<FormControl error={inputUsernameError}>
						<InputLabel htmlFor="component-username">User Name</InputLabel>
						<Input
							id="component-username"
							name="User Name"
							value={username}
							onChange={(e) => setUsername(e)}
						/>
						<FormHelperText id="component-error-text">
							{inputUsernameError && errorUsernameMessage}
						</FormHelperText>
					</FormControl>
					<br />
					<FormControl error={inputEmailError}>
						<InputLabel htmlFor="component-email">E-mail</InputLabel>
						<Input
							id="component-email"
							name="E-mail"
							value={email}
							onChange={(e) => setEmail(e)}
						/>
						<FormHelperText id="component-error-text">
							{inputEmailError && errorEmailMessage}
						</FormHelperText>
					</FormControl>
					<br />
					<FormControl error={inputFirstNameError}>
						<InputLabel htmlFor="component-firstName">First Name</InputLabel>
						<Input
							id="component-firstName"
							name="First Name"
							value={firstName}
							onChange={(e) => setFirstName(e)}
						/>
						<FormHelperText id="component-error-text">
							{inputFirstNameError && errorFirstNameMessage}
						</FormHelperText>
					</FormControl>
					<br />
					<FormControl error={inputLastNameError}>
						<InputLabel htmlFor="component-lastName">Last Name</InputLabel>
						<Input
							id="component-lastName"
							name="Last Name"
							value={lastName}
							onChange={(e) => setLastName(e)}
						/>
						<FormHelperText id="component-error-text">
							{inputLastNameError && errorLastNameMessage}
						</FormHelperText>
					</FormControl>
					<br />
					<FormControl error={inputPasswordError}>
						<InputLabel htmlFor="component-password">Password</InputLabel>
						<Input
							type="password"
							id="component-password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e)}
						/>
						<FormHelperText id="component-error-text">
							{inputPasswordError && errorPasswordMessage}
						</FormHelperText>
					</FormControl>
					<br />
					<Button
						variant="contained"
						color="primary"
						type="submit"
						disabled={isButtonDisabled}>
						Submit
					</Button>
				</form>
			</Grid>
		</Grid>
	);
}
export default Signup;
