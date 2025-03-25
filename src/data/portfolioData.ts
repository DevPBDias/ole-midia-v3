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
import sandArte1 from "../assets/portfolio/Sandrinho - Alterar/1.webp";
import sandArte2 from "../assets/portfolio/Sandrinho - Alterar/2.webp";
import sandArte3 from "../assets/portfolio/Sandrinho - Alterar/3.jpg";
import sandArte4 from "../assets/portfolio/Sandrinho - Alterar/4.webp";
import sandArte5 from "../assets/portfolio/Sandrinho - Alterar/5.webp";
import sandArte6 from "../assets/portfolio/Sandrinho - Alterar/6.webp";
import sandArte7 from "../assets/portfolio/Sandrinho - Alterar/7.webp";
import luisArte1 from "../assets/portfolio/Luis Eduardo - Manter/1.webp";
import luisArte2 from "../assets/portfolio/Luis Eduardo - Manter/2.webp";
import luisArte3 from "../assets/portfolio/Luis Eduardo - Manter/3.webp";
import luisArte4 from "../assets/portfolio/Luis Eduardo - Manter/4.webp";
import luisArte5 from "../assets/portfolio/Luis Eduardo - Manter/5.webp";
import luisArte6 from "../assets/portfolio/Luis Eduardo - Manter/6.webp";
import luisArte7 from "../assets/portfolio/Luis Eduardo - Manter/7.webp";
import gabardoArte1 from "../assets/portfolio/Gabardo - Alterar/1.webp";
import gabardoArte2 from "../assets/portfolio/Gabardo - Alterar/2.webp";
import gabardoArte3 from "../assets/portfolio/Gabardo - Alterar/3.webp";
import gabardoArte4 from "../assets/portfolio/Gabardo - Alterar/4.webp";
import gabardoArte5 from "../assets/portfolio/Gabardo - Alterar/5.webp";
import gabardoArte6 from "../assets/portfolio/Gabardo - Alterar/6.webp";
import gabardoArte7 from "../assets/portfolio/Gabardo - Alterar/7.webp";
import fernandoArte1 from "../assets/portfolio/Fernando - Alterar/1.webp";
import fernandoArte2 from "../assets/portfolio/Fernando - Alterar/2.webp";
import fernandoArte3 from "../assets/portfolio/Fernando - Alterar/3.webp";
import fernandoArte4 from "../assets/portfolio/Fernando - Alterar/4.webp";
import fernandoArte5 from "../assets/portfolio/Fernando - Alterar/5.webp";
import fernandoArte6 from "../assets/portfolio/Fernando - Alterar/6.webp";
import fernandoArte7 from "../assets/portfolio/Fernando - Alterar/7.webp";
import leandroArte1 from "../assets/portfolio/Leandro Lima - Adicionar/1.webp";
import leandroArte2 from "../assets/portfolio/Leandro Lima - Adicionar/2.webp";
import leandroArte3 from "../assets/portfolio/Leandro Lima - Adicionar/3.webp";
import jabaArte1 from "../assets/portfolio/Léo Jabá - Adicionar/1.webp";
import jabaArte2 from "../assets/portfolio/Léo Jabá - Adicionar/2.webp";
import jabaArte3 from "../assets/portfolio/Léo Jabá - Adicionar/3.webp";
import jabaArte4 from "../assets/portfolio/Léo Jabá - Adicionar/4.webp";
import jabaArte5 from "../assets/portfolio/Léo Jabá - Adicionar/5.webp";
import jabaArte6 from "../assets/portfolio/Léo Jabá - Adicionar/6.webp";
import jabaArte7 from "../assets/portfolio/Léo Jabá - Adicionar/7.webp";
import moisesArte1 from "../assets/portfolio/Moisés - Adicionar/1.webp";
import moisesArte2 from "../assets/portfolio/Moisés - Adicionar/2.webp";
import moisesArte3 from "../assets/portfolio/Moisés - Adicionar/3.webp";

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
    arts: [
      gabardoArte1,
      gabardoArte2,
      gabardoArte3,
      gabardoArte4,
      gabardoArte5,
      gabardoArte6,
      gabardoArte7,
    ],
  },
  {
    id: 7,
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
  {
    id: 8,
    btnName: "Leandro Lima",
    arts: [leandroArte1, leandroArte2, leandroArte3],
  },
  {
    id: 9,
    btnName: "Léo Jabá",
    arts: [
      jabaArte1,
      jabaArte2,
      jabaArte3,
      jabaArte4,
      jabaArte5,
      jabaArte6,
      jabaArte7,
    ],
  },
  {
    id: 10,
    btnName: "Moisés",
    arts: [moisesArte1, moisesArte2, moisesArte3],
  },
];
