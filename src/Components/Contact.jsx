import { useState, useRef } from "react";
// import axios from "axios";
import "./styles/Contact.scss";
import emailjs from "@emailjs/browser";
import "dotenv/config";

export default function Contact(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sent, setSent] = useState(false);

	const form = useRef();

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
		// axios
		// 	.post("http://localhost:8888/email-form.php", {
		// 		name,
		// 		email,
		// 		message,
		// 	})
		// 	.then(() => {
		// 		console.log("email successfully sent");
		// 		setName("");
		// 		setEmail("");
		// 		setMessage("");
		// 		setSent(true);
		// 	})
		// 	.catch(err => console.log(err));

		emailjs
			.sendForm(
				process.env.SERVICE,
				process.env.TEMPLATE,
				form.current,
				process.env.PUBLIC
			)
			.then(
				result => {
					console.log(result.text);
					setSent(true);
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<section id="contact">
			<div id="contact-link"></div>
			{sent && (
				<div id="contact-sent">
					<p>Thank you for your message, I will get back to you soon!</p>
				</div>
			)}
			{!sent && (
				<form id="contact-form" ref={form} onSubmit={handleSubmit}>
					<div className="control-group">
						<label for="name">Name</label>
						<input
							type="text"
							name="name"
							onChange={handleChangeName}
							value={name}
						></input>
					</div>
					<div className="control-group">
						<label for="email">Email</label>
						<input
							type="email"
							name="email"
							onChange={handleChangeEmail}
							value={email}
						></input>
					</div>
					<br></br>
					<div className="control-group">
						<label for="message">Message</label>
						<textarea
							type="text"
							name="message"
							onChange={handleChangeMessage}
							value={message}
						></textarea>
					</div>
					<button type="submit">Send</button>
				</form>
			)}
		</section>
	);
}
