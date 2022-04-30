import "./styles/About.scss";
export default function About(props) {
	return (
		<section id="about">
			<div id="about-link"></div>
			<article className="about">
				<p>Nice to meet you.</p>
				<h1>My name is Tony,</h1>
				<p>
					I am a web developer with a diverse background in medicine,
					statistics, and psychology. I am a lifelong learner with a passion for
					building intelligent machines.
				</p>
				<p>
					My interest in programming began during a cognitive science class
					where I was introduced to the concept of neural networks. I started
					learning python in my spare time and created an image classifier on
					the CIFAR-10 dataset.
				</p>
				<p>
					I took a degree in statistics to learn the math behind machine
					learning and after a detour to medical school, I am returning to
					coding because I missed the feeling of building something and seeing
					it come to life.
				</p>
			</article>
		</section>
	);
}
