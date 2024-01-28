import "../assets/a4.css";

const Document = () => {
	return (
		<>
			<div className="body">
				<main className="resumeCanvas">
					<div className="gridParent">
						<div className="titleHeader">
							<h1>
								<a className="red1">C</a>
								<a className="orange2">o</a>
								<a className="yellow3">o</a>
								<a className="green4">p</a>
								<a className="blue5">e</a>
								<a className="purple6">r</a>
							</h1>
							<h1>
								<a className="red1">V</a>
								<a className="orange2">i</a>
								<a className="yellow3">k</a>
								<a className="green4">t</a>
								<a className="blue5">o</a>
								<a className="purple6">r</a>
							</h1>
						</div>
						<section className="leftSummary">
							<div className="bioIntro">
								<h1>About Me</h1>
								<p>
									Originally a Banker with 7-years experience
									across multiple disciplines, I moved to
									Melbourne mid 2017 for a career change to
									Web and Software Development.
								</p>
								<p>
									Graduating Aug 2019 from Coder Academy with
									a Diploma of IT I completed a 6-month
									Software Developer Internship with JB Hi-Fi
									Solutions.
								</p>
								<p>
									I am passionate about design and the user
									experience through simple, functional and
									practical user interfaces. With a background
									in Usability Testing and Digital Coaching,
									I’ve always been driven by perfecting the
									end-user experience through researching and
									analysing direct feedback.
								</p>
							</div>
							<div className="Experience">
								<h1>Experience</h1>
								<h4>Grace Papers 2021 - current</h4>
								<h5>Front-end UI/UX Developer</h5>
								<p>
									As part of a small team, planning and
									developing a custom in house learning and
									professional development system.
								</p>
								<p>
									Working with organisation stakeholders, I
									create Figma designs until approved.
								</p>
								<p>
									Building custom designed components in the
									Laravel API, and React front-end with
									Styled-components, Storybook and Chromatic,
									React-testing-library.
								</p>
								<h4>Cardiobase 2020</h4>
								<h5>Software Developer</h5>
								<p>
									Customising the Cardiobase application in
									accordance with improvements and
									requirements driven from end-user feedback.
								</p>
								<h4>JB Hi-Fi Solutions 2019-2020</h4>
								<h5>Junior Software Developer</h5>
								<p>
									Re-designing and building responsive
									front-end features into an employee facing
									inventory management system.
								</p>
								<p>
									Building and implementing changes to the
									main jbhifi.com.au website, mainly Google
									Analytics tracking.
								</p>
								<p>
									Writing in the languages/frameworks used
									VanillaJS, jQuery, React, Redux, Handlebars,
									and Shopify.
								</p>
								<h4>Other roles</h4>
								<p>
									For more of my pre-tech roles, view my
									LinkedIn for more.
								</p>
							</div>
						</section>
						<section className="rightInfo">
							<div className="contacts">
								<h1>Contact details</h1>
								<p>
									<i
										className="fa fa-envelope-o"
										aria-hidden="true"
									></i>
									<a
										href="mailto:im.cooperviktor@gmail.com"
										className="red1"
									>
										im.cooperviktor@gmail.com
									</a>
								</p>
								<p>
									<i
										className="fa fa-phone"
										aria-hidden="true"
									></i>
									<a className="orange2">0401 205 545</a>
								</p>
								<p>
									<i
										className="fa fa-github"
										aria-hidden="true"
									></i>
									<a
										href="https://github.com/CoopsCodes"
										className="yellow3"
									>
										github.com/CoopsCodes
									</a>
								</p>
								<p>
									<i
										className="fa fa-desktop"
										aria-hidden="true"
									></i>
									<a
										href="https://cooper-codes.dev"
										className="green4"
									>
										cooper-codes.dev
									</a>
								</p>
								<p>
									<i
										className="fa fa-linkedin"
										aria-hidden="true"
									></i>
									<a
										href="https://www.linkedin.com/in/cooper-viktor/"
										className="blue5"
									>
										linkedin.com/in/cooper-viktor
									</a>
								</p>
								<p>
									<i
										className="fa fa-twitter"
										aria-hidden="true"
									></i>
									<a
										href="https://www.linkedin.com/in/cooper-viktor/"
										className="purple6"
									>
										twitter.com/CooperCodes
									</a>
								</p>
							</div>
							<div className="skills">
								<h1>Tech Stack</h1>
								<p className="red1">
									Semantic and Accessible HTML
								</p>
								<p className="orange2">
									CSS / Styled-components / Tailwind
								</p>
								<p className="yellow3">Figma</p>
								<p className="green4">Laravel / PHP</p>
								<p className="blue5">
									JavaScript / React / NextJS
								</p>
								<p className="purple6">GitHub</p>
							</div>
							<div className="education">
								<h1>Education</h1>
								<p>
									Diploma of IT (Coding Bootcamp): Coder
									Academy 2019
								</p>
								<p>Diploma of Project Management: TAFE 2019</p>
							</div>
						</section>
					</div>
				</main>
			</div>
		</>
	);
};

export default Document;
