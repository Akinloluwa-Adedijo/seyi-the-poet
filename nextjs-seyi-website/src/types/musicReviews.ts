// export interface musicReviewItem {
//   _id: number;
//   albumName?: string;
//   artistName?: string;
//   reviewYear: number;
//   type: "review";
//   reviewImage: string;
//   reviewContent: {
//     children: {
//       text: string;
//       _type: string;
//     }[];
//   }[];
// }

export interface MusicReviewItem {
  _id: number;
  albumName?: string;
  artistName?: string;
  reviewYear: number;
  type: "review";
  reviewImage: string;
  reviewContent: ReviewBlock[];
}

export interface ReviewBlock {
  children: ReviewChild[];
}

export interface ReviewChild {
  text: string;
  _type: string;
  marks: string[];
}

// Optional: If you want to be more specific about the _type values
export type ReviewChildType = "span" | "strong" | "em" | "code";

export interface ReviewChildStrict {
  text: string;
  _type: ReviewChildType;
}

// Then you could use:
export interface MusicReviewItemStrict {
  _id: number;
  albumName?: string;
  artistName?: string;
  reviewYear: number;
  type: "review";
  reviewImage: string;
  reviewContent: {
    children: ReviewChildStrict[];
  }[];
}
