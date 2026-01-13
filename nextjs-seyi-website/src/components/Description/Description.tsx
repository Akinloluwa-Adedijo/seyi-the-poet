"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

interface DescriptionProps {
  description?: string;
}

const Description = ({ description }: DescriptionProps) => {
  const charsRef = useRef<HTMLParagraphElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = charsRef.current;
      if (!element) return;

      const split = new SplitText(element, {
        type: "lines,words",
        mask: "lines",
        linesClass: "line-js",
        wordsClass: "word-js",
        autoSplit: true,
        onSplit: (self) => {
          gsap.from(self.lines, {
            scrollTrigger: {
              start: "top bottom",
              trigger: element,
            },
            duration: 1.8,
            yPercent: 100,
            delay: 0.15,
            ease: "expo.out",
            stagger: 0.06,
          });
        },
      });

      return () => {
        split.revert();
      };
    },
    { scope: containerRef }
  );
  return (
    <section
      className="flex flex-col gap-5 w-full text-fg p-5"
      ref={containerRef}
    >
      <h2 className="font-instrument text-[2.5em] italic" ref={h2Ref}>
        About
      </h2>
      <p
        ref={charsRef}
        style={{ fontSize: "clamp(24px, 5vw, 64px)" }}
        className="font-medium"
      >
        {description ||
          "Șèyí,ThePoet is a passionate spoken word artist, model and creative director; who brings raw emotion and profound insight to the stage. His performances, rich with themes of mental health and the human experience, have touched hearts and sparked conversations."}
      </p>
    </section>
  );
};

export default Description;
