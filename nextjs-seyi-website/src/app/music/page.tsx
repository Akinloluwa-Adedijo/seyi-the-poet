"use client"
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
// import useDocumentTitle from "@/utils/useDocumentTitle.js";
import { MusicCard } from "@/components/MusicCard/MusicCard";
import { musicItems } from "@/data/music"; 
import Layout from "@/Layout/Layout";


const Music = () => {
//   useDocumentTitle("Ṣèyí,ThePoet | Music");

  return (
    <Layout>
    <SectionWrapper title="Music">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        {musicItems?.map((item, index) => (
          <MusicCard
            key={index}
            title={item.title}
            year={item.year}
            imgSrc={item.imgSrc}
            width={item.imgWidth}
            height={item.imgHeight}
            imgAlt={item.imgAlt}
            href={item.href}
            linkTitle={item.linkTitle}
          />
        ))}
      </div>
    </SectionWrapper>
    </Layout>
  );
};

export default Music;
