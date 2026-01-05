'use client'
import type { UpdateItem } from "@/app/updates/page";
import { useEffect } from "react";
import CustomImage from "../CustomImage/CustomImage";
import { useLenis } from "../../contexts/LenisContext";
import { AnimatePresence, motion } from "motion/react";

interface UpdateModalProps {
  isOpen: Boolean;
  onClose: () => void;
  updateItem: UpdateItem | null;
}

const UpdateModal = ({ isOpen, onClose, updateItem }: UpdateModalProps) => {
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
      {isOpen && updateItem && (
        <section className="fixed inset-0 z-50 overflow-hidden flex justify-end">
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
            className="fixed bg-yellow-300 w-full max-w-2xl flex flex-col overflow-hidden z-100 p-5 text-black h-full top-0 right-0 md:h-auto md:top-5 md:bottom-5 md:right-5 md:rounded-3xl"
          >
            <div className="flex-none">
              <button
                onClick={onClose}
                aria-label="Close Modal"
                className="text-lg uppercase font-medium cursor-pointer hover:text-black-800"
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
                <p className="text-4xl sm:text-7xl font-instrument py-2">
                  {updateItem.title}
                </p>
                <p className="p-subheading">{updateItem.content}</p>
              </div>
              <div className="flex flex-col gap-5">
                {updateItem?.images?.map((img, index) => {
                  return (
                    <CustomImage
                      key={index}
                      imgSrc={img.imgSrc}
                      imgAlt={img.imgAlt}
                      width={img.imgWidth}
                      height={img.imgHeight}
                      classname={`rounded-3xl h-[500px] lg:h-[95vh]`}
                    />
                  );
                })}
              </div>
              {updateItem.href && (
                <div className="py-5">
                  <a
                    href={updateItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl underline  hover:no-underline"
                  >
                    Stream GODOT
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </section>
      )}
    </AnimatePresence>
  );
};

export default UpdateModal;
