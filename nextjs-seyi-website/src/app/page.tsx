import LandingPage from "@/components/LandingPage/LandingPage";
import Description from "@/components/Description/Description";
import { descriptionData, musicData, publicationsData } from "@/hooks/queries";
import Layout from "@/Layout/Layout";
import Link from "next/link";
import { musicCards } from "@/types/musicCards";
import { MusicCard } from "@/components/MusicCard/MusicCard";
import { publications } from "@/types/publications";
import { PublicationCard } from "@/components/PublicationCard/PublicationCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ṣèyí,ThePoet | Artist",
  description: "Ṣèyí,ThePoet Website",
};

export default async function Home() {
  const homeDescription = await descriptionData();
  const music: musicCards[] = await musicData();
  const publications: publications[] = await publicationsData();

  return (
    <>
      <Layout>
        <LandingPage />
        <Description description={homeDescription.Description} />
        <section className="flex flex-col gap-10  w-full">
          <h2 className="font-instrument text-5xl md:text-7xl lg:text-8xl italic p-5">
            Music
          </h2>

          {music?.map((music: musicCards) => {
            // if (music.onHome) {
            return <MusicCard music={music} key={music._id} />;
            // }
          })}
        </section>
        <section className="w-full flex flex-col gap-10 p-5 pb-20">
          <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-end">
            <h2 className="font-instrument  italic">In the Press</h2>
            <Link
              href="/press"
              className="text-fg border-fg border-2 px-5 py-2 w-fit"
            >
              See More
            </Link>
          </div>
          {/* <Publications /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {publications?.slice(0, 3).map((publication) => (
              <PublicationCard
                publication={publication}
                key={publication._id}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
