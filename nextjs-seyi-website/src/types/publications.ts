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
