"use client";

import { useState } from "react";
import { MusicReviewItem } from "@/types/musicReviews";
import { poemItem } from "@/data/poems";
import ReviewModal from "../Modals/ReviewModal";
// import { poemItem } from "@/types/poems ";

interface ListItemProps {
  item: MusicReviewItem;
}

export const ListItem = ({ item }: ListItemProps) => {
  // const poems = poemsData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MusicReviewItem | null>(
    null
  );

  const onItemClick = (item: MusicReviewItem) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  return (
    <>
      <ul
        key={item._id}
        className="list relative grid grid-cols-3 sm:grid-cols-4 w-full border-t-2 border-accent uppercase p-2 gap-5 cursor-pointer overflow-hidden"
        onClick={() => onItemClick(item)}
      >
        <li className="z-3 font-medium ">
          {item.albumName} {item.type === "review" && "by " + item.artistName}
        </li>
        <li className="z-3 font-medium ">{item.artistName}</li>
        <li className="z-3 font-medium ">{item.reviewYear}</li>
        <li className="hidden sm:block sm:text-right read-text z-3 font-medium ">
          Read Review
        </li>
        <div className="list-bg"></div>
      </ul>
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
      />
    </>
  );
};
