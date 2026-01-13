import CustomImage from "../../components/CustomImage/CustomImage";
import { publications, usePublicationsData } from "@/hooks/usePublications";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const PublicationCard = ({
  publication,
}: {
  publication: publications;
}) => {
  const publicationImageUrl = publication?.coverImage
    ? urlFor(publication.coverImage)?.url()
    : null;

  return (
    <a
      href={publication.url.current}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-3 hover:scale-105 transition-all duration-300 ease-out"
    >
      <CustomImage
        imgSrc={publicationImageUrl ? publicationImageUrl : ""}
        imgAlt={publication.coverImageAlt}
        classname="h-[350px] lg:h-[500px] object-cover"
      />

      <div className="flex flex-col gap-1">
        <div>
          <p className="font-black uppercase p-heading">{publication.title}</p>
        </div>
        <p className="p-subheading">{publication.description}</p>
      </div>
    </a>
  );
};

const Publications = () => {
  const { data: publications } = usePublicationsData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {publications?.slice(0, 3).map((publication) => (
        <PublicationCard publication={publication} key={publication._id} />
      ))}
    </div>
  );
};

export default Publications;
