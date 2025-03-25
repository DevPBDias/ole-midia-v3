import image1 from "../assets/images/clients/Giuliano-CAP.webp";
import image2 from "../assets/images/clients/LeoGugiel-Benfica.webp";
import image3 from "../assets/images/clients/RoniMoura-Mirassol.webp";
import image4 from "../assets/images/clients/Sandrinho-Goianesia.webp";
import image5 from "../assets/images/clients/LuisEduardo-GoiasU17.webp";
import image6 from "../assets/images/clients/Gabardo.png";
import image7 from "../assets/images/clients/Fernando-CAP.webp";
import image8 from "../assets/images/clients/Moises-CSKA.webp";
import image9 from "../assets/images/clients/LeandoLima-SK ProstějovTchéquia.webp";
import image10 from "../assets/images/clients/LeoJaba-SãoBernardo.webp";
import image11 from "../assets/images/clients/LucasCafé-Brasiliense.webp";
import image12 from "../assets/images/clients/CAMV_Sports_Supervôlei.webp";

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
    team: "Athletico-PR",
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
    name: "Fernando",
    team: "Athletico-PR",
    image: image7,
  },
  {
    id: 4,
    name: "Moisés",
    team: "CSKA (RUS)",
    image: image8,
  },
  {
    id: 5,
    name: "Roni Moura",
    team: "Mirassol",
    image: image3,
  },
  {
    id: 6,
    name: "Sandrinho",
    team: "Goianésia",
    image: image4,
  },
  {
    id: 7,
    name: "Luis Eduardo",
    team: "Goiás (U-17)",
    image: image5,
  },
  {
    id: 8,
    name: "Gabardo Jr.",
    team: "São José - RS (Treinador)",
    image: image6,
  },
  {
    id: 9,
    name: "Leando Lima",
    team: "SK Prostějov (Rep. Theca)",
    image: image9,
  },
  {
    id: 10,
    name: "Leo Jabá",
    team: "São Bernardo",
    image: image10,
  },
  {
    id: 11,
    name: "Lucas Café",
    team: "Brasiliense",
    image: image11,
  },
  {
    id: 12,
    name: "CAMV Sports Supervôlei",
    team: "Escolinha de Vôlei",
    image: image12,
  },
];

export default clientsData;
