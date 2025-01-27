import giuArte1 from "../assets/portfolio/Giuliano/01.webp";
import giuArte2 from "../assets/portfolio/Giuliano/02.webp";
import giuArte3 from "../assets/portfolio/Giuliano/03.webp";
import giuArte4 from "../assets/portfolio/Giuliano/04.webp";
import giuArte5 from "../assets/portfolio/Giuliano/05.webp";
import giuArte6 from "../assets/portfolio/Giuliano/06.webp";
import giuArte7 from "../assets/portfolio/Giuliano/07.webp";
import leoArte1 from "../assets/portfolio/Léo Gugiel/1.webp";
import leoArte2 from "../assets/portfolio/Léo Gugiel/2.webp";
import leoArte3 from "../assets/portfolio/Léo Gugiel/3.webp";
import leoArte4 from "../assets/portfolio/Léo Gugiel/4.webp";
import leoArte5 from "../assets/portfolio/Léo Gugiel/5.webp";
import leoArte6 from "../assets/portfolio/Léo Gugiel/6.webp";
import leoArte7 from "../assets/portfolio/Léo Gugiel/7.webp";
import roniArte1 from "../assets/portfolio/Roni Moura/1.webp";
import roniArte2 from "../assets/portfolio/Roni Moura/2.webp";
import roniArte3 from "../assets/portfolio/Roni Moura/3.webp";
import roniArte4 from "../assets/portfolio/Roni Moura/4.webp";
import roniArte5 from "../assets/portfolio/Roni Moura/5.webp";
import roniArte6 from "../assets/portfolio/Roni Moura/6.webp";
import roniArte7 from "../assets/portfolio/Roni Moura/7.webp";
import sandArte1 from "../assets/portfolio/Sandrinho/01.webp";
import sandArte2 from "../assets/portfolio/Sandrinho/02.webp";
import sandArte3 from "../assets/portfolio/Sandrinho/03.webp";
import sandArte4 from "../assets/portfolio/Sandrinho/04.webp";
import sandArte5 from "../assets/portfolio/Sandrinho/05.webp";
import sandArte6 from "../assets/portfolio/Sandrinho/06.webp";
import sandArte7 from "../assets/portfolio/Sandrinho/07.webp";
import luisArte1 from "../assets/portfolio/Luis Eduardo/1.webp";
import luisArte2 from "../assets/portfolio/Luis Eduardo/2.webp";
import luisArte3 from "../assets/portfolio/Luis Eduardo/3.webp";
import luisArte4 from "../assets/portfolio/Luis Eduardo/4.webp";
import luisArte5 from "../assets/portfolio/Luis Eduardo/5.webp";
import luisArte6 from "../assets/portfolio/Luis Eduardo/6.webp";
import luisArte7 from "../assets/portfolio/Luis Eduardo/7.webp";
import gabardoArte1 from "../assets/portfolio/Gabardo/1.webp";
import gabardoArte2 from "../assets/portfolio/Gabardo/2.webp";
import gabardoArte3 from "../assets/portfolio/Gabardo/3.webp";
import gabardoArte4 from "../assets/portfolio/Gabardo/4.webp";
import fernandoArte1 from "../assets/portfolio/Fernando/1.webp";
import fernandoArte2 from "../assets/portfolio/Fernando/2.webp";
import fernandoArte3 from "../assets/portfolio/Fernando/3.webp";

export const allArts = {
  id: 1,
  btnName: "Todos",
  arts: [
    giuArte1,
    leoArte1,
    roniArte1,
    fernandoArte1,
    gabardoArte1,
    luisArte1,
    sandArte1,
  ],
};

export type IPortfolio = {
  id: number;
  btnName: string;
  arts: string[];
};

export const portfolioData: IPortfolio[] = [
  {
    id: 1,
    btnName: "Giuliano",
    arts: [
      giuArte1,
      giuArte2,
      giuArte3,
      giuArte4,
      giuArte5,
      giuArte6,
      giuArte7,
    ],
  },
  {
    id: 2,
    btnName: "Léo Gugiel",
    arts: [
      leoArte1,
      leoArte2,
      leoArte3,
      leoArte4,
      leoArte5,
      leoArte6,
      leoArte7,
    ],
  },
  {
    id: 3,
    btnName: "Roni Moura",
    arts: [
      roniArte1,
      roniArte2,
      roniArte3,
      roniArte4,
      roniArte5,
      roniArte6,
      roniArte7,
    ],
  },
  {
    id: 4,
    btnName: "Sandrinho",
    arts: [
      sandArte1,
      sandArte2,
      sandArte3,
      sandArte4,
      sandArte5,
      sandArte6,
      sandArte7,
    ],
  },
  {
    id: 5,
    btnName: "Luis Eduardo",
    arts: [
      luisArte1,
      luisArte2,
      luisArte3,
      luisArte4,
      luisArte5,
      luisArte6,
      luisArte7,
    ],
  },
  {
    id: 6,
    btnName: "Gabardo",
    arts: [gabardoArte1, gabardoArte2, gabardoArte3, gabardoArte4],
  },
  {
    id: 7,
    btnName: "Fernando",
    arts: [fernandoArte1, fernandoArte2, fernandoArte3],
  },
];
