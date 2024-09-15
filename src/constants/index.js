import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const EDUCATION = [
	{
		year: "05/2018 - 09/2022",
		institute: "American International University-Bangladesh",
		subject: "Bachelor of Science in Computer Science and Engineering (CSe)",
		major: "Software Engineering",
		gpa: "3.50/4.00",
	},
	{
		year: "06/2015 - 06/2017",
		institute: "Govt. Azizul Haque College , Bogura",
		subject: "Higher Secondary School Certificate (HSC)",
		gpa: "5.00/5.00",
	},
	{
		year: "05/2006 - 03/2015",
		institute: "Police Lines School and College , Bogura",
		subject: "Secondary School Certificate (SSC)",
		gpa: "5.00/5.00",
	},
];

export const PROJECTS = [
	{
		title: "Video Sharing Platform",
		image: project1,
		description: "Create a responsive video sharing platform.",
		technologies: ["HTML", "CSS", "JavaScript"],
	},
	{
		title: "Bistro Boss Restaurant Management System",
		image: project2,
		description:
			"Developed a web-based restaurant management system with React.js (frontend) and Node.js (backend). Manages menus, orders, carts, and inventory with Stripe.js for secure payments. Intuitive UI, real-time updates, secure payment processing, Admin Dashboard.",
		technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Tailwind"],
	},
	{
		title: "Digital Learning Website",
		image: project3,
		description:
			"A digital learning website showcasing courses, skills, and contact information.",
		technologies: ["HTML", "CSS", "Bootstrap"],
	},
	{
		title: "Dentist Management System ",
		image: project4,
		description:
			"Developed a dentist management system with React.js (frontend) and Node.js (backend). Appointment booking for dental services, dynamic calendar for date selection, secure admin dashboard for managing doctors and services.",
		technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Tailwind"],
	},
];

export const CONTACT = {
	address: "Dhaka, Bangladesh",
	phoneNo: "+8801768-798282 ",
	email: "armanjoarder1578@gmail.com",
};
