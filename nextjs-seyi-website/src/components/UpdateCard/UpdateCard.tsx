import { UpdateItem } from "@/app/updates/page";
import CustomImage from "../CustomImage/CustomImage";

interface UpdateCardProps {
  onItemClick: (item: UpdateItem) => void;
}

const updatesData: UpdateItem[] = [
  {
    id: 1,
    title: "Godot Live Show",
    cover: "/images/update_images/godot_show/godot_show_1.webp",
    coverAlt: "Seyi The Poet Performing Godot Live",
    coverWidth: 1365,
    coverHeight: 2048,
    coverClassname: "max-h-[500px]",
    content: [
      "Seyi The Poets First Sold Out Live Shoe performing Godot: A performance of self.",
    ],
    images: [
      {
        imgSrc: "/images/update_images/godot_show/godot_show_1.webp",
        imgAlt: "Seyi The Poet Performing Godot Live",
        imgWidth: 1365,
        imgHeight: 2048,
      },
      {
        imgSrc: "/images/update_images/godot_show/godot_show_2.webp",
        imgAlt: "Seyi The Poet Performing Godot Live",
        imgWidth: 2048,
        imgHeight: 1365,
      },
      {
        imgSrc: "/images/update_images/godot_show/godot_show_3.webp",
        imgAlt: "Seyi The Poet Performing Godot Live",
        imgWidth: 1365,
        imgHeight: 2048,
      },
      {
        imgSrc: "/images/update_images/godot_show/godot_show_4.webp",
        imgAlt: "Seyi The Poet Performing Godot Live",
        imgWidth: 1365,
        imgHeight: 2048,
      },
      {
        imgSrc: "/images/update_images/godot_show/godot_show_5.webp",
        imgAlt: "Seyi The Poet Performing Godot Live",
        imgWidth: 2048,
        imgHeight: 1536,
      },
      {
        imgSrc: "/images/update_images/godot_show/godot_show_6.webp",
        imgAlt: "Seyi The Poet Performing Godot Live",
        imgWidth: 1365,
        imgHeight: 2048,
      },
      {
        imgSrc: "/images/update_images/godot_show/godot_show_7.webp",
        imgAlt: "Seyi The Poet Performing Godot Live",
        imgWidth: 1365,
        imgHeight: 2048,
      },
      {
        imgSrc: "/images/update_images/godot_show/godot_show_8.webp",
        imgAlt: "Seyi The Poet Performing Godot Live",
        imgWidth: 1284,
        imgHeight: 2283,
      },
      {
        imgSrc: "/images/update_images/godot_show/godot_show_9.webp",
        imgAlt: "Seyi The Poet Performing Godot Live",
        imgWidth: 1284,
        imgHeight: 2283,
      },
    ],
    href: "https://seyithepoet.bandcamp.com/album/godot-act-1-a-performance-of-self",
  },
  {
    id: 2,
    title: "Upcoming Album: Godot: A Performance of Self",
    cover: "/images/music_images/godot_album_cover.webp",
    coverAlt: "Seyi The Poet New Album GOdot",
    coverWidth: 3000,
    coverHeight: 3000,
    coverClassname: "max-h-[500px]",
    content: [
      "Seyi The Poets Upcoming album Godot: A Performance of Self releasing May 22nd, 2025.",
    ],
    images: [
      {
        imgSrc: "/images/update_images/godot/godot_1.webp",
        imgAlt: "GODOT ALBUM COVER",
        imgWidth: 3000,
        imgHeight: 3000,
      },
      {
        imgSrc: "/images/update_images/godot/godot_2.webp",
        imgAlt: "GODOT ALBUM COVER",
        imgWidth: 5646,
        imgHeight: 8192,
      },
      {
        imgSrc: "/images/update_images/godot/godot_2.webp",
        imgAlt: "GOdot Album Cover Shoot",
        imgWidth: 5646,
        imgHeight: 8192,
      },
      {
        imgSrc: "/images/update_images/godot/godot_3.webp",
        imgAlt: "GOdot Album Cover Shoot",
        imgWidth: 5646,
        imgHeight: 8192,
      },
      {
        imgSrc: "/images/update_images/godot/godot_4.webp",
        imgAlt: "GOdot Album Cover Shoot",
        imgWidth: 5646,
        imgHeight: 8192,
      },
      {
        imgSrc: "/images/update_images/godot/godot_4.webp",
        imgAlt: "GOdot Album Cover Shoot",
        imgWidth: 5646,
        imgHeight: 8192,
      },
      {
        imgSrc: "/images/update_images/godot/godot_5.webp",
        imgAlt: "GOdot Album Cover Shoot",
        imgWidth: 5646,
        imgHeight: 8192,
      },
      {
        imgSrc: "/images/update_images/godot/godot_6.webp",
        imgAlt: "GOdot Album Cover Shoot",
        imgWidth: 5646,
        imgHeight: 8192,
      },
      {
        imgSrc: "/images/update_images/godot/godot_7.webp",
        imgAlt: "GOdot Album Cover Shoot",
        imgWidth: 6016,
        imgHeight: 6016,
      },
    ],
    href: "https://seyithepoet.bandcamp.com/album/godot-act-1-a-performance-of-self",
  },

  {
    id: 3,
    title: "Performance at talk with sosa: A mental health conference",
    cover: "/images/update_images/performance_talk_with_sosa_1.webp",
    coverAlt: "alt text goes here",
    coverWidth: 654,
    coverHeight: 794,
    coverClassname: "max-h-[500px]",
    content: [
      "Performing for this event meant a lot to me as i have also struggled  with mental health issues in the past. I was extremly honoured to play  my piece “I love you,” a tale of two lovers in a toxic cylce, “if my  bottle could talk”, a poem about alcholism, “lost”, a poem about the  troubles finiding yourself in a new enovironment as an international  student.",
    ],
    images: [
      {
        imgSrc: "/images/update_images/performance_talk_with_sosa_1.webp",
        imgAlt: "img text goes",
        imgWidth: 654,
        imgHeight: 794,
      },
      {
        imgSrc: "/images/update_images/performance_talk_with_sosa_2.webp",
        imgAlt: "img text goes",
        imgWidth: 654,
        imgHeight: 794,
      },
      {
        imgSrc: "/images/update_images/performance_talk_with_sosa_3.webp",
        imgAlt: "img text goes",
        imgWidth: 654,
        imgHeight: 794,
      },
      {
        imgSrc: "/images/update_images/performance_talk_with_sosa_4.webp",
        imgAlt: "img text goes",
        imgWidth: 654,
        imgHeight: 794,
      },
    ],
  },
];
const UpdateCard = ({ onItemClick }: UpdateCardProps) => {
  return (
    <>
      {updatesData.map((update) => (
        <div className="flex flex-col gap-3 hover:scale-105 transition-all duration-300 ease-out cursor-pointer" key={update.id} onClick={() => onItemClick(update)}>
          <CustomImage
            imgSrc={update.cover}
            imgAlt={update.coverAlt}
            width={update.coverWidth}
            height={update.coverHeight}
            classname={`${update.coverClassname} h-[500px]`}
          />
          <p className="uppercase font-black p-heading">{update.title}</p>
        </div>
      ))}
    </>
  );
};

export default UpdateCard;
