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


export default function Home() {
  const { data: homeDescription, isLoading } = useLandingPageData();
  const homeRef = useRef<HTMLDivElement>(null);

  const descriptionText = homeDescription?.Description;

  if (isLoading) return <div>Loading...</div>;

  return (
    <><Layout>

        <LandingPage />
        <Description description={descriptionText} />
        <section className="flex flex-col gap-10 w-full pt-20 p-5">
         <h2 className="font-instrument text-5xl md:text-7xl lg:text-8xl italic">
        Music
        </h2>

        {musicItems?.map((music, index) => {
          if (music.onHome) {
            return (
          <MusicCard
            key={index}
            title={music.title}
            year={music.year}
            imgSrc={music.imgSrc}
            imgAlt={music.imgAlt}
            width={music.imgWidth}
            height={music.imgHeight}
            href={music.href}
            linkTitle={music.linkTitle}
            cursorTitle={music.cursorTitle}
          />
          );
          }
        })}
      </section> 
      <section className="w-full flex flex-col gap-10 p-5 pb-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-end">
          <h2 className="font-instrument  italic">
            In the Press
          </h2>
          <Link href="/press">See More</Link>
        </div>
        <Publications />
      </section>
      </Layout>
    </>
  );
}
