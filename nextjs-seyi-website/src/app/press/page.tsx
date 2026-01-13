"use client";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { PublicationCard } from "../../components/Publications/Publications";
import { publications } from "../../data/publications";
import Layout from "@/Layout/Layout";
import { usePublicationsData } from "@/hooks/usePublications";

export default function Press() {
  const { data: publications } = usePublicationsData();
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
