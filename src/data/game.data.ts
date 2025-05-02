export interface GameDetailType {
    name: string;
    imgUrl: string;
    redirectUrl: string;
    _id: number;
    description: string;
  }
  
  import the08Paradox from "@/assets/the-08-paradox.png"
  export const gameDetail: GameDetailType[] = [
    {
      _id: 1,
      name: "The 0.8 Paradox | Alice botherland",
      imgUrl: the08Paradox.src,
      redirectUrl: "/games/alice-in-borderland/the-08-paradox",
      description: "A deadly math game where players guess 80% of the average number to survive. Based on the King of Diamonds challenge from Alice in Borderland. Will you outsmart your opponents or fall victim to the paradox?"
    },
    {
      _id: 2,
      name: "Wolf Among Sheep",
      imgUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      redirectUrl: "/wolf-among-sheep",
    
      description: "Psychological battle where players must identify the traitor among them. The Hearts game that broke Arisu in Season 1. Can you spot the wolf before time runs out?"
    },
    {
      _id: 3,
      name: "King of Spades",
      imgUrl: "https://images.unsplash.com/photo-1612036782180-207f001a1f05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      redirectUrl: "/king-of-spades",
      description: "Brutal city-wide manhunt against a masked mercenary. The deadliest Spades game from Season 2. Will you survive the hunt or become another casualty?"
    },
    {
      _id: 4,
      name: "Light Bulb Test",
      imgUrl: "https://images.unsplash.com/photo-1512053459797-38c3a066cabd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      redirectUrl: "/light-bulb-test",
      description: "Logic puzzle where players must determine which switch controls a distant bulb. Chishiya's signature Diamonds game. Can you solve it with limited information?"
    },
    {
      _id: 5,
      name: "The Beach",
      imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      redirectUrl: "/the-beach",
      description: "Chaotic battle royale in a resort setting. The Season 1 climax where alliances shatter. Will you collaborate or betray to collect all the cards?"
    },
    {
      _id: 6,
      name: "Witch Hunt",
      imgUrl: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      redirectUrl: "/witch-hunt",
      description: "Psychological horror game where players must identify the witch among them. Mira's twisted Hearts challenge from Season 2. Can you resist the paranoia?"
    }
  ];