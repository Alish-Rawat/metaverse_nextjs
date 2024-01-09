"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        The
        <span className="font-extrabold text-white"> Metaverse </span>
        is a vision of what many in the computer industry believe is the next
        iteration of the internet: a single, shared, immersive, persistent,
        <span className="font-extrabold text-white"> 3D virtual space </span>
        where humans experience life in ways they could not in the ; other
        critical components of the metaverse
        <span className="font-extrabold text-white"> physical world </span> .
      </motion.p>
      <motion.img
        id="explore"
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="./arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain m-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
