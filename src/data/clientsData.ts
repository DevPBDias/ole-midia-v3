import image1 from "../assets/images/giu.webp";
import image2 from "../assets/images/leo.webp";
import image3 from "../assets/images/roni.webp";
import image4 from "../assets/images/sandrinho.webp";
import image7 from "../assets/images/Luis_Eduardo.png";
import image8 from "../assets/images/Gabardo.png";
import image1_dk from "../assets/images/giu_dk.webp";
import image2_dk from "../assets/images/leo.webp";
import image3_dk from "../assets/images/roni_dk.webp";
import image4_dk from "../assets/images/sandrinho_dk.webp";
import image7_dk from "../assets/images/Luis_Eduardo_dk.png";
import image8_dk from "../assets/images/Gabardo_dk.png";

export type IClientProps = {
  id: number;
  name: string;
  team: string;
  image: string;
  image_dk: string;
};

const clientsData: IClientProps[] = [
  {
    id: 1,
    name: "Giuliano",
    team: "Santos",
    image: image1,
    image_dk: image1_dk,
  },
  {
    id: 2,
    name: "Léo Gugiel",
    team: "Benfica (POR)",
    image: image2,
    image_dk: image2_dk,
  },
  {
    id: 3,
    name: "Roni Moura",
    team: "Atlético Goianiense",
    image: image3,
    image_dk: image3_dk,
  },
  {
    id: 4,
    name: "Sandrinho",
    team: "Trindade (GO)",
    image: image4,
    image_dk: image4_dk,
  },
  {
    id: 5,
    name: "Luis Eduardo",
    team: "Goiás (U-17)",
    image: image7,
    image_dk: image7_dk,
  },
  {
    id: 6,
    name: "Gabardo Jr.",
    team: "ABECAT (Treinardor)",
    image: image8,
    image_dk: image8_dk,
  },
];

export default clientsData;
