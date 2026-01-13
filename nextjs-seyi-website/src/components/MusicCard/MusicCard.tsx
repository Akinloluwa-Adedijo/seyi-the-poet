import type React from "react";
import CustomImage from "../CustomImage/CustomImage";
import { musicCards } from "@/hooks/useMusicData";
// import { ImageUrlBuilder } from "@sanity/image-url";
import imageUrlBuilder from "@sanity/image-url";

// import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
// import { SanityImageSource } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";
// type MusicCardProps = {
//   title: string;
//   imgSrc: string;
//   imgAlt: string;
//   year: number;
//   href: string;
//   width: number;
//   height: number;
//   linkTitle?: string;
//   cursorTitle?: string;
//   onHome?: boolean;
// };

interface MusicCardProps {
  music: musicCards;
}
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const MusicCard: React.FC<MusicCardProps> = ({ music }) => {
  const postImageUrl = music?.coverImage
    ? urlFor(music.coverImage)?.width(800).height(550).url()
    : null;
  // console.log(music.coverImage);
  // console.log(postImageUrl);
  return (
    <a
      href={music.url.current}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 w-full "
      data-cursor={music.cursorText}
    >
      <CustomImage
        imgSrc={postImageUrl ? postImageUrl : ""}
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
