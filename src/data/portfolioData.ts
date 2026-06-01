import giuArte1 from "../assets/portfolio/Giuliano - Alterar/1.webp";
import giuArte2 from "../assets/portfolio/Giuliano - Alterar/2.webp";
import giuArte3 from "../assets/portfolio/Giuliano - Alterar/3.webp";
import giuArte4 from "../assets/portfolio/Giuliano - Alterar/4.webp";
import giuArte5 from "../assets/portfolio/Giuliano - Alterar/5.webp";
import giuArte6 from "../assets/portfolio/Giuliano - Alterar/6.webp";
import giuArte7 from "../assets/portfolio/Giuliano - Alterar/7.webp";
import leoArte1 from "../assets/portfolio/Leo Gugiel - Manter/1.webp";
import leoArte2 from "../assets/portfolio/Leo Gugiel - Manter/2.webp";
import leoArte3 from "../assets/portfolio/Leo Gugiel - Manter/3.webp";
import leoArte4 from "../assets/portfolio/Leo Gugiel - Manter/4.webp";
import leoArte5 from "../assets/portfolio/Leo Gugiel - Manter/5.webp";
import leoArte6 from "../assets/portfolio/Leo Gugiel - Manter/6.webp";
import leoArte7 from "../assets/portfolio/Leo Gugiel - Manter/7.webp";
import roniArte1 from "../assets/portfolio/Roni Moura - Manter/1.webp";
import roniArte2 from "../assets/portfolio/Roni Moura - Manter/2.webp";
import roniArte3 from "../assets/portfolio/Roni Moura - Manter/3.webp";
import roniArte4 from "../assets/portfolio/Roni Moura - Manter/4.webp";
import roniArte5 from "../assets/portfolio/Roni Moura - Manter/5.webp";
import roniArte6 from "../assets/portfolio/Roni Moura - Manter/6.webp";
import roniArte7 from "../assets/portfolio/Roni Moura - Manter/7.webp";
import fernandoArte1 from "../assets/portfolio/Fernando - Alterar/1.webp";
import fernandoArte2 from "../assets/portfolio/Fernando - Alterar/2.webp";
import fernandoArte3 from "../assets/portfolio/Fernando - Alterar/3.webp";
import fernandoArte4 from "../assets/portfolio/Fernando - Alterar/4.webp";
import fernandoArte5 from "../assets/portfolio/Fernando - Alterar/5.webp";
import fernandoArte6 from "../assets/portfolio/Fernando - Alterar/6.webp";
import fernandoArte7 from "../assets/portfolio/Fernando - Alterar/7.webp";

export const allArts = {
  id: 1,
  btnName: "Todos",
  arts: [giuArte1, leoArte1, roniArte1, fernandoArte1],
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
    btnName: "Fernando",
    arts: [
      fernandoArte1,
      fernandoArte2,
      fernandoArte3,
      fernandoArte4,
      fernandoArte5,
      fernandoArte6,
      fernandoArte7,
    ],
  },
];
