import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
// import useDocumentTitle from "@/utils/useDocumentTitle.js";
import { MusicCard } from "@/components/MusicCard/MusicCard";
import Layout from "@/Layout/Layout";
import { musicData } from "@/hooks/queries";
import { musicCards } from "@/types/musicCards";

const Music = async () => {
  const music: musicCards[] = await musicData();

  return (
    <Layout>
      <SectionWrapper title="Music" padding={false}>
        <div className="grid grid-cols-1 gap-5 w-full">
          {music?.map((item, index) => (
            <MusicCard key={index} music={item} />
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Music;
