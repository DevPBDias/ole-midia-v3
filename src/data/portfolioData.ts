import giuArte1 from "../assets/portfolio/Giuliano/01.webp";
import giuArte2 from "../assets/portfolio/Giuliano/02.webp";
import giuArte3 from "../assets/portfolio/Giuliano/03.webp";
import giuArte4 from "../assets/portfolio/Giuliano/04.webp";
import giuArte5 from "../assets/portfolio/Giuliano/05.webp";
import giuArte6 from "../assets/portfolio/Giuliano/06.webp";
import giuArte7 from "../assets/portfolio/Giuliano/07.webp";
import leoArte1 from "../assets/portfolio/Léo Gugiel/01.webp";
import leoArte2 from "../assets/portfolio/Léo Gugiel/02.webp";
import leoArte3 from "../assets/portfolio/Léo Gugiel/03.webp";
import leoArte4 from "../assets/portfolio/Léo Gugiel/04.webp";
import leoArte5 from "../assets/portfolio/Léo Gugiel/05.webp";
import leoArte6 from "../assets/portfolio/Léo Gugiel/06.webp";
import leoArte7 from "../assets/portfolio/Léo Gugiel/07.webp";
import roniArte1 from "../assets/portfolio/Roni Moura/01.webp";
import roniArte2 from "../assets/portfolio/Roni Moura/02.webp";
import roniArte3 from "../assets/portfolio/Roni Moura/03.webp";
import roniArte4 from "../assets/portfolio/Roni Moura/04.webp";
import roniArte5 from "../assets/portfolio/Roni Moura/05.webp";
import roniArte6 from "../assets/portfolio/Roni Moura/06.webp";
import roniArte7 from "../assets/portfolio/Roni Moura/07.webp";
import sandArte1 from "../assets/portfolio/Sandrinho/01.webp";
import sandArte2 from "../assets/portfolio/Sandrinho/02.webp";
import sandArte3 from "../assets/portfolio/Sandrinho/03.webp";
import sandArte4 from "../assets/portfolio/Sandrinho/04.webp";
import sandArte5 from "../assets/portfolio/Sandrinho/05.webp";
import sandArte6 from "../assets/portfolio/Sandrinho/06.webp";
import sandArte7 from "../assets/portfolio/Sandrinho/07.webp";
import raquelArte1 from "../assets/portfolio/Raquel Fernandes/01.webp";
import rafaelArte1 from "../assets/portfolio/Rafael Moura/01.webp";

export const allArts = {
  id: 1,
  btnName: "Todos",
  arts: [
    giuArte1,
    leoArte1,
    roniArte1,
    sandArte1,
    raquelArte1,
    rafaelArte1,
    giuArte2,
  ],
};

export type IPortfolio = {
  id: number;
  btnName: string;
  arts: string[];
};

export const portfolioData: IPortfolio[] = [
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
];
