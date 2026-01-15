import { client } from "@/sanity/client";

export interface HomeDescription {
  _id: string;
  Description: string;
}

const options = { next: { revalidate: 30 } };

export const descriptionData = async () => {
  const homeDescriptionQuery =
    '*[_type == "homeDescription" && defined(_id)][0]{_id, Description}';
  return await client.fetch(homeDescriptionQuery, {}, options);
};

export const musicData = async () => {
  const musicQuery =
    '*[_type=="musicCards"]|order(publishedAt asc)[0...12]{_id, title, coverImage,year, coverImageAlt, cursorText, onHome,url, publishedAt }';

  return await client.fetch(musicQuery, {}, options);
};

export const publicationsData = async () => {
  const publicationsQuery =
    '*[_type=="publications"]|order(publishedAt desc)[0...12]{_id, title, coverImage,year, coverImageAlt, cursorText, onHome,url, publishedAt }';

  return await client.fetch(publicationsQuery, {}, options);
};

export const musicReviewsData = async () => {
  const musicReviewsQuery =
    '*[_type=="reviews"]|order(publishedAt asc){_id, albumName, artistName,reviewYear,reviewImage, publishedAt, reviewContent }';
  return await client.fetch(musicReviewsQuery, {}, options);
};
