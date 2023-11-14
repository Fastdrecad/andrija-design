import "./loader.scss";
import { motion } from "framer-motion";

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};
const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{
        y: 0,
      }}
      exit={{
        y: "-110%",
      }}
      transition={{
        delay: 2,
        duration: 2,
        type: "spring",
        staggerChildren: 0.05,
        staggerDirection: -1,
      }}
    >
      <svg fill="none" viewBox="0 0 120.5 87">
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          strokeWidth={1}
          d="m89.9,19.6l18.2,54.6c2.9,8.6,6,9.9,11.9,9.9v2.4h-35.4v-2.3c6,0,13.5,1.3,10.7-9.4l-18.1-53.3-20.5,65h-1.9l-8.5-26.4h-25.6c-1.9,5.9-4.7,12.8-2.1,19.1,1.8,4.3,3.6,4.8,6.8,5v2.3H.5v-2.3c3.5-.5,5.2-1.4,7.9-4.3,3.1-3.4,6.1-9.6,9.1-18.7l14.7-46.4c-2.1-6.9-4.2-12-10.5-12h-2.3V.5h20.4l21.3,63.1L81,.5h19.3v2.3h-2.3c-9.5,0-12.4,6.5-8.1,16.8h0ZM21.9,56.5h23.2l-11.7-37.3-11.5,37.3h0Z"
        />
      </svg>
      <motion.h1 variants={textVariants} initial="hidden" animate="visible">
        Andrija Micunovic
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
