
export interface musicReviewItem {
  id: number;
  name?: string;
  artist?: string;
  released: number;
  type: "review";
  content: {
    imgSrc?: string;
    imgAlt?: string;
    width?: number;
    height?: number;
    classname?: string;
    text: string[];
  }[];
}


export const musicReviews: musicReviewItem[] = [
  {
    id: 1,
    name: "Heis",
    artist: "Rema",
    released: 2024,
    type: "review",
    content: [
      {
        imgSrc: "/images/review_images/review-1.webp",
        imgAlt: "Rema's Heis Album Cover",
        width: 320,
        height: 320,
        classname: "rounded-lg",
        text: [
          "Rema has returned with an album that not only cements his place at the top of the new wave of Afrobeats artists but also showcases his unique artistry and bold creativity. From the outset, Rema's mission is to demonstrate his dominance and versatility within the genre.",
          "The album kicks off with an intensity that is hard to ignore. Rema bursts out of the gates with the energy of a sprinter, setting a pace that is relentless, only easing up near the very end. His choice of beats is as polarizing as it is innovative, with tracks that weave between ethereal vocal deliveries and sharply crafted songwriting. Rema doesn't just want to be heard—he demands it, asserting his presence as if to say, “I am HIM.” The confidence is palpable and unapologetic.",
          "On the track 'Hehehehe,', Rema repeats with conviction that he 'isn't going to take it on his hater,' a statement that feels both like a mantra and a warning. Following this, 'Yayo' showcases Rema's vocal agility and his ability to find unique rhythmic pockets within the music. Here, he boasts of his success—money, hits, women, and cars—delivering each line with a flair that's almost theatrical.",
          "This album is bold, and it dares to be different. There's a certain Yeezus-like vibe in its unapologetic nature, a raw authenticity that makes it feel almost outrageous in its self-assurance. Rema's confidence in his art is admirable, and it's clear that Mavin Records has given him the creative freedom to explore and push boundaries. This level of artistic control is rare, especially for artists on the rise, and it's something that has allowed Rema to produce a body of work that is as defining for his career as it is for the current state of Afrobeats.",
          "The timing of this album is crucial. Afrobeats has reached a crossroads, where the soundscape is increasingly dominated by more watered-down iterations of the genre. Rema's album feels like a necessary disruption, following in the footsteps of groundbreaking albums like 'Made In Lagos' (MMWTV) and 'Superstar'. It's a reminder of what Afrobeats can be when artists are allowed to experiment and stay true to their roots.",
          "If there's one critique, it's the album's relentless pace. The high BPM and non-stop energy can be overwhelming, with the only reprieve coming in the form of the final two tracks. However, even this ties into the overall concept, creating a listening experience that is as exhausting as it is exhilarating.",
          "In the end, this album isn't just a collection of songs—it's a statement. It's Rema proving a point, and doing so with a style and bravado that is uniquely his.",
          "So, to wrap it up: “Siri, play me OZEBA jaare.”",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Lungu Boy",
    artist: "Asake",
    released: 2024,
    type: "review",
    content: [
      {
        imgSrc: "/images/review_images/review-2.webp",
        imgAlt: "Asake Lungu Boy Album Cover",
        width: 320,
        height: 320,
        classname: "rounded-lg",
        text: [
          "Lungu Boy to Space: A Poetry Album Review on Lungu Boys.",
          "On Asake's second work of art, We take a dive into the mind of the lungu boy himself, Swimming through his mother's words on patience, backstroking through his struggles in his early stage of his career and belly flopping into his love for skating.",
          "Asake doesn't fail to take the listener on a serious aquatic lesson. Some essentials include life jacket synthesizers and live “swimsuit” instrumentals.",
          "Can't help but mention life guards Sarz and Pprime Ensuring our safety as we breaststroke through the famous “my heart”, the notorious sea called “wave” and the breath taking ocean “worldwide” Oh my! Their production could sink the titanic !",
          "During my lesson central cee instilled in me the dangers of riding a wave alone at sea Stormzy seems to be alright with it, his only advice to me was to be patient.",
          "LUDMILLA, whines about the sharks notorious essence.",
          "The class ends with a delicacy We had the bass and choir entry at the 18 second mark on “Worldwide” The maxing guitar intro on “My heart” And the ethereal synth on “Wave”",
          "A delicious feast to say the least 8/10",
        ],
      },
    ],
  },
];