import aboutImg from "../assets/about.png";
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="boarder-b boarder-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl font-bold">About
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center mt-[-100px]">
            <img className="rounded-2xl" src={aboutImg} alt="" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light">Hi, I'm Arman Joarder, a CSE graduate passionate about web development. My academic background has equipped me with a solid foundation in computer science, and I am particularly drawn to building intuitive, dynamic web applications. I am focused on honing my skills in front-end and back-end technologies, with a strong interest in JavaScript, React, Node.js, and databases. My goal is to contribute to innovative web solutions while continuously learning and growing in this ever-evolving field. I thrive in collaborative environments, enjoy solving complex problems, and am always looking for opportunities to expand my knowledge and refine my skills to deliver impactful, user-centric applications.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;