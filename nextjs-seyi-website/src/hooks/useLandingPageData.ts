"use client";

import { useSanityData } from "./useSanityData";

const homeDescriptionQuery =
  '*[_type == "homeDescription" && defined(_id)][0]{_id, Description}';

export interface HomeDescription {
  _id: string;
  Description: string;
}

export const useLandingPageData = () => {
  return useSanityData<HomeDescription>(homeDescriptionQuery);
};
