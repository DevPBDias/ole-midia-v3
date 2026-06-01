import image1 from "../assets/images/clients/Giuliano-CAP.webp";
import image2 from "../assets/images/clients/LeoGugiel-Benfica.webp";
import image3 from "../assets/images/clients/Roni_Moura.jpg";
import image4 from "../assets/images/clients/Fernando.jpeg";
import image5 from "../assets/images/clients/Gabriel_Knesowitsch.jpeg";
import image6 from "../assets/images/clients/CAMV_Sports_Supervôlei.webp";

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
    team: "Sem clube",
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
    team: "AFS Vila das Aves (POR)",
    image: image3,
  },
  {
    id: 4,
    name: "Fernando",
    team: "Ceará",
    image: image4,
  },
  {
    id: 5,
    name: "Gabriel Knesowitsch",
    team: "Cuiabá",
    image: image5,
  },
  {
    id: 6,
    name: "CAMV Sports",
    team: "Time de base de voleibol",
    image: image6,
  },
];

export default clientsData;
