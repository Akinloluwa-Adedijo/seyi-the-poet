"use client";

import { useSanityData } from "./useSanityData";

const musicQuery = '  *[_type=="musicCards"]|order(publishedAt asc)[0...12]{_id, title, coverImage, coverImageAlt, cursorText, onHome,url, publishedAt }';

export interface musicCards {
  _id: string;
  title: string;
  coverImage: string;
  coverImageAlt: string;
  cursorText: string;
  onHome: boolean;
  url: string;
  publishedAt: string;
}

export const useMusicData = () => {
  return useSanityData<musicCards>(musicQuery);
};
 