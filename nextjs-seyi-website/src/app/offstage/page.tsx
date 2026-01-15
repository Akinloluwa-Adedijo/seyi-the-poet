import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import Layout from "@/Layout/Layout";
import { musicReviewsData } from "@/hooks/queries";
import { ListItem } from "@/components/ListItem/ListItem";
export default async function PoemsReviews() {
  const musicReviews = await musicReviewsData();
  // const poems = poemsData();

  const allItems = [...musicReviews];

  return (
    <Layout>
      <SectionWrapper title="Poems">
        <section className="flex flex-col w-full">
          <div className="grid grid-cols-3 sm:grid-cols-4 w-full uppercase p-2 gap-5  text-xl font-medium border-b-2 border-accent pb-2 mb-2">
            <p>Name</p>
            {/* <p>Artist / Theme</p> */}
            <p>Artist</p>
            <p>Year</p>
            <span className="hidden sm:block"></span>
          </div>
          {allItems.map((item) => (
            <ListItem key={`${item.type}-${item._id}`} item={item} />
          ))}
        </section>
      </SectionWrapper>
    </Layout>
  );
}
