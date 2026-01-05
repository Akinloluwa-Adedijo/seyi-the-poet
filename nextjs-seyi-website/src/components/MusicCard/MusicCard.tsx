import type React from "react";
import CustomImage from "../CustomImage/CustomImage";

type MusicCardProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  year: number;
  href: string;
  width: number;
  height: number;
  linkTitle?: string;
  cursorTitle?: string;
  onHome?: boolean;
};

export const MusicCard: React.FC<MusicCardProps> = ({
  title,
  imgSrc,
  imgAlt,
  year,
  href,
  width,
  height,
  cursorTitle,
}) => {
  return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2 w-full " data-cursor={cursorTitle}>
        <CustomImage imgSrc={imgSrc} imgAlt={imgAlt} classname="h-[500px] lg:h-[calc(100vh-6rem)]" width={width} height={height}/>
        <div className="flex font-medium justify-between">
          <p className=" lg:w-[350px] text-xl font-black uppercase p-heading" 
            >{title}</p>
          <p className="hidden lg:block text-xl font-black uppercase p-heading" >{year}</p>
         </div>
      </a>
  );
};
