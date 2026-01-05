'use client'
import Layout from "@/Layout/Layout";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { aboutData } from "../../data/about";

export default function About() {
    return (
        <Layout>
        <SectionWrapper title="About the Poet">
            {aboutData.map((item, index) => (
                <p key={index} style={{ fontSize: "clamp(24px, 5vw, 64px)" }} className="font-bold">{item}</p>
            ))}
        </SectionWrapper>
        </Layout>
    );
}