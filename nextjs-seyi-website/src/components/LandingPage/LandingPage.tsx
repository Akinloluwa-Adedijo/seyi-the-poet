"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import SeyiLogo from "../SeyiLogo/SeyiLogo";
import CustomImage from "../CustomImage/CustomImage";

const image = {
  src: "/images/landing/home-1.jpg",
  alt: "Carousel Image 1",
  width: 1920,
  height: 1080,
};

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const LandingPage = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Initial page load animation
    const tl = gsap.timeline();
    tl.fromTo(
      imageRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="w-full flex flex-col gap-5 pt-24">
      <div className="w-full h-full px-5 overflow-hidden">
        <SeyiLogo className="w-full h-full" />
        <h1 aria-hidden="true" className="sr-only">
          Șèyí,ThePoet
        </h1>
        {/* <h1 aria-hidden="true" className="">Șèyí,ThePoet</h1> */}
      </div>
      <CustomImage
        imgSrc={image.src}
        imgAlt={image.alt}
        imageRef={imageRef}
        classname="h-[500px] lg:h-[calc(100vh-6rem)]"
        cursorTitle="Stream GODOT"
      />
    </section>
  );
};

export default LandingPage;
