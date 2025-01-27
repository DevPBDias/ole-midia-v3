import image1 from "../assets/images/clients/giu.png";
import image2 from "../assets/images/clients/leo.webp";
import image3 from "../assets/images/clients/roni.png";
import image4 from "../assets/images/clients/sandrinho.png";
import image5 from "../assets/images/clients/Luis_Eduardo.png";
import image6 from "../assets/images/clients/gabardo.png";
import image7 from "../assets/images/clients/fernando.png";
import image8 from "../assets/images/clients/moises.png";

export type IClientProps = {
  id: number;
  name: string;
  team: string;
  image: string;
};

const clientsData: IClientProps[] = [
  {
    id: 1,
    name: "Giuliano",
    team: "Santos",
    image: image1,
  },
  {
    id: 2,
    name: "Léo Gugiel",
    team: "Benfica (POR) - Futsal",
    image: image2,
  },
  {
    id: 3,
    name: "Roni Moura",
    team: "Mirassol",
    image: image3,
  },
  {
    id: 4,
    name: "Sandrinho",
    team: "Trindade (GO)",
    image: image4,
  },
  {
    id: 5,
    name: "Luis Eduardo",
    team: "Goiás (U-17)",
    image: image5,
  },
  {
    id: 6,
    name: "Gabardo Jr.",
    team: "ABECAT (Treinador)",
    image: image6,
  },
  {
    id: 7,
    name: "Fernando",
    team: "Athletico-PR",
    image: image7,
  },
  {
    id: 8,
    name: "Moisés",
    team: "CSKA (RUS)",
    image: image8,
  },
];

export default clientsData;
