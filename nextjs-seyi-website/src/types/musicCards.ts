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
