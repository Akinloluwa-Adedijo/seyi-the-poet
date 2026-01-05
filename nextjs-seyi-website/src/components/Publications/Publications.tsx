import { publications }  from "../../data/publications";
import type { publicationItem } from "../../data/types";
import CustomImage from "../../components/CustomImage/CustomImage";

export const PublicationCard = ({ publication }: { publication: publicationItem }) => {
  return (
    <a href={publication.href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-3 hover:scale-105 transition-all duration-300 ease-out">
          <CustomImage imgSrc={publication.imgSrc} imgAlt={publication.imgAlt} classname="h-[500px] object-cover" width={publication.imgWidth} height={publication.imgHeight} />

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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {publications.slice(0, 3).map((publication) => (
          <PublicationCard key={publication.title} publication={publication} />
      ))}
    </div>
  );
};

export default Publications;
