import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { PublicationCard } from "../../components/PublicationCard/PublicationCard";
import Layout from "@/Layout/Layout";
import { publicationsData } from "@/hooks/queries";

export default async function Press() {
  const publications = await publicationsData();
  return (
    <Layout>
      <SectionWrapper title="In the Press" padding={true}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {publications?.map((publication) => (
            <PublicationCard
              key={publication.title}
              publication={publication}
            />
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
}
