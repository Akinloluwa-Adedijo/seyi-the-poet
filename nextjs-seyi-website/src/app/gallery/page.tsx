'use client'
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { shootImages } from "../../data/images";
import Layout from "@/Layout/Layout";
export default function Gallery() {
    return (
        <Layout>
        <SectionWrapper title="Gallery">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {shootImages.map((image) => (
                    <img src={image.src} alt={image.title} key={image.id} />
                ))}
            </div>
        </SectionWrapper>
        </Layout>
    );
}