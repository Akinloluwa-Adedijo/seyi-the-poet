"use client";

import { useSanityData } from "./useSanityData";

const musicQuery =
  '*[_type=="musicCards"]|order(publishedAt asc)[0...12]{_id, title, coverImage,year, coverImageAlt, cursorText, onHome,url, publishedAt }';

export interface musicCards {
  _id: string;
  title: string;
  coverImage: string;
  year: string;
  coverImageAlt: string;
  cursorText: string;
  onHome: boolean;
  url: {
    _type: string;
    current: string;
  };
  publishedAt: string;
}

export const useMusicData = () => {
  return useSanityData<musicCards[]>(musicQuery);
};
