import { animate, motion } from "framer-motion";
import "./hero.scss"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x:0
  },
  animate: {
    x: "-220%", //220% means the element moves far enough to exit the viewport, creating a sliding effect.
    transition: {
      repeat: Infinity,
      duration: 20,
      repeatType: "mirror"
    }
  }
}
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>SNEHA UPADHYAY</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer & Machine Learning Engineer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Exercising Singing Archery Reading
      </motion.div>
      <div className="imageContainer">
        <img src="/Girl.svg" alt="" />
      </div>
    </div>
  )
};
export default Hero;