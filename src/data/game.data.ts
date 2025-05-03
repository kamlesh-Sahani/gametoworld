export interface GameDetailType {
  name: string;
  imgUrl: string;
  redirectUrl: string;
  _id: number;
  description: string;
  rating: number;
  category: string[];
}

import the08Paradox from "@/assets/the-08-paradox.png";

export const gameDetail: GameDetailType[] = [
  {
    _id: 1,
    name: "The 0.8 Paradox | Alice in Borderland",
    imgUrl: the08Paradox.src,
    redirectUrl: "/games/alice-in-borderland/the-08-paradox",
    description: "A deadly math game where players guess 80% of the average number to survive. Based on the King of Diamonds challenge from Alice in Borderland.",
    rating: 4.8,
    category: ["Puzzle", "Survival", "Math"]
  },
  {
    _id: 2,
    name: "Wolf Among Sheep",
    imgUrl: the08Paradox.src,
    redirectUrl: "/games/wolf-among-sheep",
    description: "Psychological battle where players must identify the traitor among them. The Hearts game that broke Arisu in Season 1.",
    rating: 4.6,
    category: ["Psychological", "Social Deduction"]
  },
  {
    _id: 3,
    name: "King of Spades",
    imgUrl: the08Paradox.src,
    redirectUrl: "/games/king-of-spades",
    description: "Brutal city-wide manhunt against a masked mercenary. The deadliest Spades game from Season 2.",
    rating: 4.9,
    category: ["Action", "Survival", "Battle Royale"]
  },
  {
    _id: 4,
    name: "Light Bulb Puzzle",
    imgUrl: the08Paradox.src,
    redirectUrl: "/games/light-bulb-puzzle",
    description: "Solve the binary switch puzzle to escape before time runs out. Featured in the Jack of Hearts game.",
    rating: 4.3,
    category: ["Puzzle", "Escape Room"]
  },
  {
    _id: 5,
    name: "Distance Game",
    imgUrl: the08Paradox.src,
    redirectUrl: "/games/distance-game",
    description: "Measure exact distances to cross a deadly bridge. From the Queen of Spades challenge.",
    rating: 4.5,
    category: ["Precision", "Survival"]
  },
  {
    _id: 6,
    name: "Witch Hunt",
    imgUrl: the08Paradox.src,
    redirectUrl: "/games/witch-hunt",
    description: "Find the witch before you're eliminated in this social deduction game.",
    rating: 4.7,
    category: ["Social Deduction", "Psychological"]
  },
  {
    _id: 7,
    name: "Solitary Confinement",
    imgUrl: the08Paradox.src,
    redirectUrl: "/games/solitary-confinement",
    description: "Endure psychological torture in isolation. Based on the Jack of Hearts game.",
    rating: 4.2,
    category: ["Psychological", "Endurance"]
  },
  {
    _id: 8,
    name: "Beach Flag Rush",
    imgUrl: the08Paradox.src,
    redirectUrl: "/games/beach-flag-rush",
    description: "Compete in a deadly race to grab the last remaining flag. From the Five of Spades game.",
    rating: 4.4,
    category: ["Action", "Competitive"]
  },
  {
    _id: 9,
    name: "Balance Scale Puzzle",
    imgUrl: the08Paradox.src,
    redirectUrl: "/games/balance-scale-puzzle",
    description: "Solve weight measurement puzzles to progress. Inspired by the King of Diamonds games.",
    rating: 4.1,
    category: ["Puzzle", "Logic"]
  },
  {
    _id: 10,
    name: "Hide and Seek Extreme",
    imgUrl: the08Paradox.src,
    redirectUrl: "/games/hide-and-seek-extreme",
    description: "A deadly version of hide and seek with armed pursuers. From the Seven of Spades game.",
    rating: 4.7,
    category: ["Stealth", "Survival"]
  }
];