"use client";

import { AnimatePresence } from "motion/react";
import { TransitionRouter } from "next-transition-router";
export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <AnimatePresence mode="wait">
    <TransitionRouter auto>{children}</TransitionRouter>
    // </AnimatePresence>
  );
}
