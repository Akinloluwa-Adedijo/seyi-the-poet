
'use client'
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import { poems, type poemItem } from "@/data/poems";
import { musicReviews, type musicReviewItem } from "@/data/musicReviews";
import ReviewModal from "@/components/ReviewModal/ReviewModal";
import { useState } from "react";


import { useAnimate } from "motion/react";
import { useRef } from "react";
import Layout from "@/Layout/Layout";

interface ListItemProps {
  onItemClick: (item: musicReviewItem | poemItem) => void;
  item: musicReviewItem | poemItem;
}

const ListItem = ({ onItemClick, item }: ListItemProps) => {
  const [scope, animate] = useAnimate();
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  const animateIn = async (e: React.MouseEvent) => {
    if (!outer.current || !inner.current) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;
    await animate(outer.current, {top: `${direction * 100}%`}, {duration:0})
    await animate(inner.current, {top: `${-1 * direction * 100}%`}, {duration:0})
    animate([outer.current, inner.current], {top: "0%"}, {duration:0.3})
  };

  const animateOut = async (e: React.MouseEvent) => {
    if (!outer.current || !inner.current) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;
    await animate(outer.current, {top: `${direction * 100}%`}, {duration:0.3})
    await animate(inner.current, {top: `${-1 * direction * 100}%`}, {duration:0.3})
  };

  const isReview = item.type === "review";

  return (
    <ul
      ref={scope}
      key={item.id}
      className="relative grid grid-cols-3 sm:grid-cols-4 w-full border-t-2 border-yellow-300 uppercase p-2 gap-5 cursor-pointer overflow-hidden"
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      onClick={() => onItemClick(item)}
    >
      <li className="z-3 font-medium">{item.name} {item.type === "review" &&  "by " + item.artist}</li>
      <li className="z-3 font-medium">
        {item.type}
      </li>
      <li className="z-3 font-medium">{item.released}</li>
      <li className="hidden sm:block sm:text-right read-text z-3 font-medium">
        {isReview ? "Read Review" : "Read Poem"}
      </li>
      <div className="background-outer pointer-events-none" ref={outer}>
        <div className="background-inner pointer-events-none" ref={inner}></div>
      </div>
    </ul>
  );
};

export default function PoemsReviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    poemItem | musicReviewItem | null
  >(null);

  const onItemClick = (item: poemItem | musicReviewItem) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const allItems = [...musicReviews, ...poems];

  return (
    <Layout>
    <SectionWrapper title="Poems & Reviews">
      <section className="flex flex-col w-full">
        <div className="grid grid-cols-3 sm:grid-cols-4 w-full uppercase p-2 gap-5  text-xl font-medium border-b-2 border-accent pb-2 mb-2">
          <p>Name</p>
          {/* <p>Artist / Theme</p> */}
          <p>Type</p>
          <p>Year</p>
          <span className="hidden sm:block"></span>
        </div>
        {allItems.map((item) => (
          <ListItem key={`${item.type}-${item.id}`} onItemClick={onItemClick} item={item} />
        ))}
      </section>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
      />
    </SectionWrapper>
    </Layout>
  );
}
