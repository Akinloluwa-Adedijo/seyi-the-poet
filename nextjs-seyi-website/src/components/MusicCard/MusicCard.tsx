import type React from "react";
import CustomImage from "../CustomImage/CustomImage";
import { musicCards } from "@/types/musicCards";
import { urlFor } from "@/sanity/client";

interface MusicCardProps {
  music: musicCards;
}

export const MusicCard: React.FC<MusicCardProps> = ({ music }) => {
  return (
    <a
      href={music.url.current}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 w-full "
      data-cursor={music.cursorText}
    >
      <CustomImage
        imgSrc={urlFor(music.coverImage).url()}
        imgAlt={music.coverImageAlt}
        classname="h-[500px] lg:h-[calc(100vh-6rem)]"
      />
      <div className="flex font-medium justify-between px-5">
        <p className=" lg:w-[350px] text-xl font-medium uppercase p-heading">
          {music.title}
        </p>
        <p className="hidden lg:block text-xl font-medium uppercase p-heading">
          {music.year}
        </p>
      </div>
    </a>
  );
};
