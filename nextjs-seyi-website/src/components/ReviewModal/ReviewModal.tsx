'use client'
import { useEffect } from "react";
import CustomImage from "../CustomImage/CustomImage";
import type { musicReviewItem } from "../../data/musicReviews";
import type { poemItem } from "../../data/poems";
import { useLenis } from "../../contexts/LenisContext";

import { AnimatePresence, motion } from "motion/react";

interface ReviewModalProps {
  isOpen: Boolean;
  onClose: () => void;
  item: musicReviewItem | poemItem | null;
}

const ReviewModal = ({ isOpen, onClose, item }: ReviewModalProps) => {
  const { lenis } = useLenis();

  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, lenis]);

  const bezier = [0.83, 0, 0.17, 1] as const;

  return (
    <AnimatePresence>
      {isOpen && item && (
        <section className="fixed inset-0 z-25 flex justify-end">
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: bezier }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* modal */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: bezier }}
            className="fixed bg-accent w-full max-w-2xl flex flex-col z-100 p-5 text-fg h-full top-0 right-0 md:h-auto md:top-5 md:bottom-5 md:right-5 md:rounded-3xl"
          >
            <div className="flex-none">
              <button
                onClick={onClose}
                aria-label="Close Modal"
                className="text-lg uppercase font-medium cursor-pointer"
              >
                Close
              </button>
            </div>

            {/* content */}
            <div
              className="flex-1 overflow-y-auto py-10 modal-content"
              data-lenis-prevent
            >
              <div className="py-8">
                <p className="text-4xl sm:text-7xl uppercase font-black py-2">
                  {item.name}
                </p>
                <div className="flex justify-between uppercase  font-medium">
                  <p>{item.type === "review" ? item.artist : item.theme}</p>
                  <p>{item.released}</p>
                </div>
              </div>

              <div>
                {item.type === "review" ? (
                  <div>
                    {item.content.map((it, index) => {
                      return (
                        <div key={index}>
                          <CustomImage
                            imgSrc={it.imgSrc ?? ""}
                            imgAlt={it.imgAlt ?? ""}
                            width={it.width ?? 0}
                            height={it.height ?? 0}
                            classname={`h-[500px] ${it.classname}`}
                          />

                          {it.text.map((text, index) => {
                            return (
                              <p key={index} className="py-2 font-medium p-subheading">
                                {text}
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <>
                    <div>
                      {item.content.map((it, index) => {
                        return (
                          <div key={index}>
                            {it.text.map((text, index) => {
                              return (
                                <p key={index} className="py-2 font-medium p-subheading">
                                  {text}
                                </p>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </section>
      )}
    </AnimatePresence>
  );
};

export default ReviewModal;
