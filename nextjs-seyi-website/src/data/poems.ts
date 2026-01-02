


export interface poemItem {
  id: number;
  name?: string;
  theme?: string;
  released: number;
  type: "poem";
  content: {
    imgSrc?: string;
    imgAlt?: string;
    width?: number;
    height?: number;
    classname?: string;
    text: string[];
  }[];
}

export const poems: poemItem[] = [
  {
    id: 1,
    name: "Untitled 1",
    theme: "Grief",
    released: 2024,
    type: "poem",
    content: [
      {
        text: [
          "/*",
          "I hope the things I said out of ignorance are forgiven. ",
          "What does a shielded child know? We don't do shit like this back at home, so IDK, IDK.",
          "Correct me if I'm wrong.",
          "Don't be throwing stones.",
          "IDK, IDK.",
          "Please lower your tone.",
          "IDK, IDK…",
          "*/",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Untitled 2",
    theme: "Sadness",
    released: 2024,
    type: "poem",
    content: [
      {
        text: [
          "/*",
          "I forgive my mother for the hurtful things she said to me whilst growing up.",
          "I forgive my father for walking out the door when I needed him the most.",
          "I forgive myself for saying some hurtful things I didn't mean.",
          "I forgive myself for walking out of doors that meant something to me.",
          "I learned to grow as a man, even with broken foundations.",
          "I understood too much whilst growing up; now the anger has taken a toll.",
          "I have to learn to let some things go.",
          "I understood what love was and ran home to safety.",
          "And if love leads me to hurt, I don't wanna go.",
          "I have seen things I don't wanna see…",
          "*/",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Untitled 3",
    theme: "Sadness",
    released: 2024,
    type: "poem",
    content: [
      {
        text: [
          "/*",
          "I understand where they were coming from",
          "Maybe I forgave to easily cause the anger still boils in my bones ",
          "I had to let some things go ",
          "*/",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Untitled 4",
    theme: "Sadness",
    released: 2024,
    type: "poem",
    content: [
      {
        text: [
          "/*",
          "And I can never be perfect.",
          "I wonder why I try. I'm done trying to prove myself to you,",
          "It's exhausting.",
          "There's something liberating about accepting me for me.",
          "So today is about the death of the me that cared, that succumbed,",
          "the one that said 'sorry' multiple times or laughed when I didn't understand what",
          "you said,",
          "“Young man please repeat yourself.”",
          "And people tell me they love me; I couldn't believe it because I didn't love parts of myself.",
          "But this album is acceptance. And I thought my demons still lay with my innocence, but tonight they are all gone.",
          "*/",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Untitled 5",
    theme: "Sadness",
    released: 2024,
    type: "poem",
    content: [
      {
        text: [
          "/*",
          "I saw you with him just behind the pulpit.",
          "The air was thick with incense and secrets.",
          "You told him, “Be quiet, not a sound should leave your mouth.”",
          "Pushed him to his knees, unzipped your pants, and did your deed.",
          "Indeed, his sins were forgiven.",
          "Was that the communion you promised after the service,",
          "The same service where you preached about perversion?",
          "I'm throwing stones at the church house.",
          "She came to you battered and bruised,",
          "A millionaire had just taken advantage of her.",
          "“Preacher, preacher, please save me,”",
          "Bleeding from her inner thighs, bloodshot eyes,",
          "Broken heels, gum in her hair, torn pleated skirt.",
          "“Preacher man, preacher man, please save me.”",
          "You carried her to the pulpit,",
          "She told her story, raw and unfiltered,",
          "Every toss, turn, and mingling of fluids.",
          "The more she spoke, the slower you swallowed,",
          "Lust in your eyes, something else in your thighs.",
          "Right in front of the cross,",
          "You forcefully took a piece of the pie.",
          "“Preacher man, preacher man, don't.”",
          "I guess I'm throwing stones at the church house.",
          "And before my very eyes, the place I call home has been contaminated,",
          "Filled with lust and lies.",
          "Mr. Preacher man, who exactly are you preaching to?",
          "Does a few bad eggs make the whole basket bad?",
          "Can it?",
          "Who was I even looking up to?",
          "The farther I ran from God, the closer I got.",
          "I guess I'm throwing stones at the church house.",
          "*/",
        ],
      },
    ],
  },
];