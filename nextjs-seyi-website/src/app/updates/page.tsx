'use client'
import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import UpdateCard from "@/components/UpdateCard/UpdateCard";
import UpdateModal from "@/components/UpdateModal/UpdateModal";
import useDocumentTitle from "@/utils/useDocumentTitle";
import Layout from "@/Layout/Layout";

export interface UpdateItem {
  id: number;
  title: string;
  cover: string;
  coverAlt: string;
  coverWidth: number;
  coverHeight: number;
  coverClassname?: string;
  images?: {
    imgSrc: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
  }[];
  content: string[];
  href?: string;
}

const Updates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<UpdateItem | null>(null);

  const handleItemClick = (item: UpdateItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  useDocumentTitle("Ṣèyí,ThePoet | Updates");

  return (
    <Layout>
    <SectionWrapper title="Updates">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <UpdateCard onItemClick={handleItemClick} />
      </div>

      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        updateItem={selectedItem}
      />
    </SectionWrapper>
    </Layout>
  );
};

export default Updates;
