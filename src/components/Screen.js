import * as React from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 0.3,
  ease: [0.43, 0.13, 0.23, 0.76]
};

const backVariants = {
  initial: {x: 0, opacity: 0, transition},
  exit: { x: 0, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition }
};

const Screen = (props) => (

  <motion.div

    initial="initial"
    animate="enter"
    exit="exit"
  >

    <motion.div variants={backVariants}>
    
     {props.component}
    
    </motion.div>

  </motion.div>
)

export default Screen
