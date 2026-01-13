"use client";

import { useSanityData } from "./useSanityData";

const publicationsQuery =
  '*[_type=="publications"]|order(publishedAt desc)[0...12]{_id, title, description,coverImage, year, coverImageAlt,url, publishedAt }';

export interface publications {
  _id: string;
  title: string;
  description: string;
  year: string;
  coverImage: string;
  coverImageAlt: string;
  cursorText: string;
  onHome: boolean;
  url: {
    _type: string;
    current: string;
  };
  publishedAt: string;
}

export const usePublicationsData = () => {
  return useSanityData<publications[]>(publicationsQuery);
};
