import image1 from "../assets/images/services/assessoria.webp";
import image2 from "../assets/images/services/design.webp";
import image3 from "../assets/images/services/fotografia.webp";
import image4 from "../assets/images/services/video.webp";
import image5 from "../assets/images/services/gestao.webp";
import image6 from "../assets/images/services/publico.webp";
import image1_dk from "../assets/images/services/assessoria_dk.webp";
import image2_dk from "../assets/images/services/design_dk.webp";
import image3_dk from "../assets/images/services/foto_dk.webp";
import image4_dk from "../assets/images/services/video_dk.webp";
import image5_dk from "../assets/images/services/gestao_dk.webp";
import image6_dk from "../assets/images/services/publi_dk.webp";

export type IServiceProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  image_dk: string;
};

const servicesData: IServiceProps[] = [
  {
    id: 1,
    name: "Assessoria",
    description:
      "Apoio diário e constante ao atleta, na parte esportiva, de imprensa e pessoal, garantindo que suas necessidades sejam atendidas.",
    image: image1,
    image_dk: image1_dk,
  },
  {
    id: 2,
    name: "Design",
    description:
      "Criação de identidade visual própria para as redes sociais, desenvolvendo a imagem do atleta para fãs, torcedores e imprensa.",
    image: image2,
    image_dk: image2_dk,
  },
  {
    id: 3,
    name: "Fotografia",
    description:
      "Serviço especializado e individualizado para registro de imagens durante partidas em seus clubes, além da criação de um banco de imagens.",
    image: image3,
    image_dk: image3_dk,
  },
  {
    id: 4,
    name: "EDIÇÃO DE VÍDEO",
    description:
      "Outra parte da identidade visual, valorizando e expondo jogos, lances, conquistas e virtudes do atleta.",
    image: image4,
    image_dk: image4_dk,
  },
  {
    id: 5,
    name: "GESTÃO DE REDES",
    description:
      "Conjunto de estratégias para alavancar a imagem do atleta dentro das redes sociais, fazendo a administração e monitoramento.",
    image: image5,
    image_dk: image5_dk,
  },
  {
    id: 6,
    name: "RP E PUBLICIDADE",
    description:
      "Proximidade e relação individual com empresas e marcas, que possam gerar experiências únicas e/ou patrocínios.",
    image: image6,
    image_dk: image6_dk,
  },
];

export default servicesData;
