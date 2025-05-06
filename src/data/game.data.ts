import the08Paradox from "@/assets/the-08-paradox.png";
import unoCardGame from "@/assets/uno-card-online.webp"; 

export interface GameDetailType {
  name: string;
  imgUrl: string;
  redirectUrl: string;
  _id: number;
  description: string;
  rating: number;
  category: string[];
}
export const gameDetail: GameDetailType[] = [
  {
    _id: 1,
    name: "The 0.8 Paradox | Alice in Borderland",
    imgUrl: the08Paradox.src,
    redirectUrl: "/games/alice-in-borderland/the-08-paradox",
    description:
      "A deadly math game where players guess 80% of the average number to survive. Based on the King of Diamonds challenge from Alice in Borderland.",
    rating: 4.8,
    category: ["Puzzle", "Survival", "Math"],
  },
  {
    _id: 2,
    name: "Uno Online: Multiplayer Card Game",
    imgUrl: unoCardGame.src,
    redirectUrl: "/games/card-games/uno-online",
    description:
      "Play the classic Uno card game online with friends or AI. Match colors and numbers, use action cards (Skip, Reverse, Wild), and shout 'Uno!' to win. Free and fun for all ages!",
    rating: 4.9,
    category: ["Card Game", "Multiplayer", "Family", "Strategy"],
  },
];
