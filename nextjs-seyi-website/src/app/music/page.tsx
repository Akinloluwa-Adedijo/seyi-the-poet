"use client";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
// import useDocumentTitle from "@/utils/useDocumentTitle.js";
import { MusicCard } from "@/components/MusicCard/MusicCard";
import { musicItems } from "@/data/music";
import Layout from "@/Layout/Layout";
import { useMusicData } from "@/hooks/useMusicData";

const Music = () => {
  //   useDocumentTitle("Ṣèyí,ThePoet | Music");
  const { data: musicData } = useMusicData();

  return (
    <Layout>
      <SectionWrapper title="Music" padding={false}>
        <div className="grid grid-cols-1 gap-5 w-full">
          {musicData?.map((item, index) => (
            <MusicCard key={index} music={item} />
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Music;
