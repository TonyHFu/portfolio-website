import "./styles/Contact.scss";
export default function Contact(props) {
	return (
		<div id="contact">
			<div id="contact-link"></div>
			<form id="contact-form">
				<label for="name">Name</label>
				<input type="text" name="name"></input>
				<label for="email">Email</label>
				<input type="email" name="email"></input>
				<label for="message">Message</label>
				<textarea type="text" name="message"></textarea>
				<input type="submit"></input>
			</form>
		</div>
	);
}
