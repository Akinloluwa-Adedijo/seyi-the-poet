import CustomImage from "../CustomImage/CustomImage";
import { publicationsData } from "@/hooks/queries";
import convertImage from "@/utils/convertImage";
import { publications } from "@/types/publications";
import { urlFor } from "@/sanity/client";

export const PublicationCard = ({
  publication,
}: {
  publication: publications;
}) => {
  console.log(publication);
  return (
    <a
      href={publication.url.current}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-3 hover:scale-95 transition-all duration-300 ease-out"
    >
      <CustomImage
        imgSrc={urlFor(publication.coverImage).url()}
        imgAlt={publication.coverImageAlt}
        classname="h-[350px] lg:h-[500px] object-cover"
      />

      <div className="flex flex-col gap-1">
        <div>
          <p className="font-medium uppercase p-heading">{publication.title}</p>
        </div>
        <p className="p-subheading">{publication.description}</p>
      </div>
    </a>
  );
};

export default PublicationCard;
