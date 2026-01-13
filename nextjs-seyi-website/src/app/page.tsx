"use client";

import { useRef } from "react";
import LandingPage from "@/components/LandingPage/LandingPage";
import Description from "@/components/Description/Description";
import { useLandingPageData } from "@/hooks/useLandingPageData";
import Layout from "@/Layout/Layout";
import { MusicCard } from "@/components/MusicCard/MusicCard";
import Link from "next/link";
import Publications from "@/components/Publications/Publications";
import { musicItems } from "@/data/music";
import { musicCards, useMusicData } from "@/hooks/useMusicData";

export default function Home() {
  const { data: homeDescription, isLoading } = useLandingPageData();
  const { data: musicData } = useMusicData();
  const homeRef = useRef<HTMLDivElement>(null);
  console.log(musicData);

  const descriptionText = homeDescription?.Description;

  if (isLoading) return <> </>;

  return (
    <>
      <Layout>
        <LandingPage />
        <Description description={descriptionText} />
        <section className="flex flex-col gap-10  w-full">
          <h2 className="font-instrument text-5xl md:text-7xl lg:text-8xl italic p-5">
            Music
          </h2>

          {musicData?.map((music: musicCards) => {
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
          <Publications />
        </section>
      </Layout>
    </>
  );
}
