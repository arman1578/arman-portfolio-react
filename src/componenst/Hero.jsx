import profile from "../assets/armanjoarderprofile.png";
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
})
const Hero = () => {
  return (
    <div className="boarder-b boarder-neutral-900 pb-4 lg:mb35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start md:items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="lg:pb-16 pb-6 lg:text-6xl text-5xl font-bold tracking-tight lg:mt-16 lg:text-8xl">
              Arman Joarder
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text lg:text-4xl text-3xl font-bold tracking-tight text-transparent">
              Full Stack Web Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-lighter lg:text-xl">As a passionate Full Stack Web Developer, I have skills in front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end expertise in Node.js, Express, and databases like MongoDB. I’m eager to apply my knowledge, solve problems, and contribute to building dynamic web applications while continuously learning and growing.</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Hero;