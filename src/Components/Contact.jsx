import { useState } from "react";
import axios from "axios";
import "./styles/Contact.scss";
export default function Contact(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sent, setSent] = useState(false);

	const handleChangeName = e => {
		setName(e.target.value);
	};

	const handleChangeEmail = e => {
		setEmail(e.target.value);
	};

	const handleChangeMessage = e => {
		setMessage(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post("http://localhost:8888/email-form.php", {
				name,
				email,
				message,
			})
			.then(() => {
				console.log("successfully sent");
				setName("");
				setEmail("");
				setMessage("");
				setSent(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<div id="contact">
			<div id="contact-link"></div>
			<form id="contact-form" onSubmit={handleSubmit}>
				<label for="name">Name</label>
				<input
					type="text"
					name="name"
					onChange={handleChangeName}
					value={name}
				></input>
				<label for="email">Email</label>
				<input
					type="email"
					name="email"
					onChange={handleChangeEmail}
					value={email}
				></input>
				<label for="message">Message</label>
				<textarea
					type="text"
					name="message"
					onChange={handleChangeMessage}
					value={message}
				></textarea>
				<input type="submit"></input>
			</form>
		</div>
	);
}
