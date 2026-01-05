'use client'
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { aboutData } from "../../data/about";
import Layout from "@/Layout/Layout";
import useDocumentTitle from "@/utils/useDocumentTitle";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Contact() {
    useDocumentTitle("Ṣèyí,ThePoet | Contact");
    return (
        <Layout>

    <SectionWrapper title="Let's Make Something.">
      <ContactForm />
    </SectionWrapper>

        </Layout>
    );
}