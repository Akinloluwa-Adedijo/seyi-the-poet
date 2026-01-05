'use client'
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
  type?: "default" | "contact";
};

const opacity = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] as const },
  },
};

const SectionWrapper = ({ title, children, type = "default" }: SectionWrapperProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, {
    once: true,
  });
  return (
    <main className="py-30">
      <motion.section
        ref={sectionRef}
        className= {type === "contact" ? "flex flex-col lg:flex-row items-start gap-10 p-5 overflow-hidden" : "flex flex-col items-start gap-10 p-5 overflow-hidden"}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={opacity}
      >
        <h2 className= {type === "contact" ? "w-full font-instrument text-fg" : "font-instrument text-fg"}>
          {title}
        </h2>

        {children}
      </motion.section>
    </main>
  );
};

export default SectionWrapper;
