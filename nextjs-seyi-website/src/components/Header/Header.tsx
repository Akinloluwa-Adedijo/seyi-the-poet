"use client";
import { useEffect, useRef, useState } from "react";
import { navLinks, footerLinks } from "@/data/navData";
import gsap from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useLenis } from "@/contexts/LenisContext";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
gsap.registerPlugin(useGSAP);

const Header = () => {
  const { lenis } = useLenis();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLAnchorElement[]>([]);
  const menuSocialRef = useRef<HTMLAnchorElement[]>([]);
  const { scrollYProgress } = useScroll();

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!menuOverlayRef.current) return;

      tl.current = gsap
        .timeline({ paused: true })
        .to(menuOverlayRef.current, {
          duration: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power2.out",
        })
        .fromTo(
          menuLinksRef.current,
          {
            opacity: 0,
            y: 100,
            stagger: 0.05,
            duration: 0.75,
            ease: "power1.inOut",
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.75,
            ease: "power1.inOut",
          },
          "<"
        )
        .fromTo(
          menuSocialRef.current,
          {
            opacity: 0,
            y: 100,
            stagger: 0.05,
            duration: 0.75,
            ease: "power1.inOut",
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.75,
            ease: "power1.inOut",
          },
          "<"
        );
    },
    { scope: menuOverlayRef }
  );

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
        lenis?.stop();
        document.body.style.overflow = "hidden";
      } else {
        tl.current.reverse();
        lenis?.start();
        document.body.style.overflow = "";
      }
    }
  }, [isMenuOpen]);

  const rotate = useTransform(
    useSpring(scrollYProgress, {
      stiffness: 50,
      damping: 20,
      restDelta: 0.001,
    }),
    [0, 1],
    [0, 360]
  );
  return (
    <header>
      <nav className="flex justify-between items-center p-5 fixed  w-full z-5">
        <Link href="/">
          <motion.img
            src="/seyi-logo.svg"
            alt="Ṣèyí,ThePoet Logo"
            className="w-16 h-16"
            style={{ rotate }}
          />
        </Link>
        <button
          className="px-4 py-2 bg-fg text-bg cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </nav>

      <div
        className="menu-overlay h-full flex flex-col justify-between"
        ref={menuOverlayRef}
      >
        <div className="menu-nav flex justify-between items-center">
          <Link href="/">
            <img
              src="/seyi-logo.svg"
              alt="Ṣèyí,ThePoet Logo"
              className="w-16 h-16"
            />
          </Link>
          <button
            className="px-4 py-2 bg-bg text-fg cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Close
          </button>
        </div>

        <div className="menu-items flex flex-col justify-center flex-1 gap-1 px-5">
          {navLinks.map((link, index) => (
            <div className="menu-link" key={index}>
              <Link
                href={link.href}
                className="text-bg"
                ref={(el) => {
                  if (el) menuLinksRef.current[index] = el;
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="menu-link-heading">{link.title}</p>
                <div className="menu-link-bg" />
              </Link>
            </div>
          ))}
        </div>
        <div className="menu-social flex flex-wrap gap-5 p-5">
          {footerLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-bg text-link"
              ref={(el) => {
                if (el) menuSocialRef.current[index] = el;
              }}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

// https://codepen.io/cbolson/pen/EaVYoVd FOR NAV LINKS
// https://codepen.io/cbolson/pen/emYWrMg FOR MENU
// https://codepen.io/StratoDev89/pen/raNaZPp for gallery
// https://codepen.io/Sahil-Saundale/pen/qEZJxPj for button anim
