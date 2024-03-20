import image1 from '../assets/images/assessoria.webp'
import image2 from '../assets/images/design.webp'
import image3 from '../assets/images/fotografia.webp'
import image4 from '../assets/images/edição.webp'
import image5 from '../assets/images/gestão.webp'
import image6 from '../assets/images/publicidade.webp'

type IServiceProps = {
    id: number,
    name: string,
    description: string,
    image: string,
}

const servicesData: IServiceProps[] = [
    {
        id: 1,
        name: 'Assessoria',
        description: 'Apoio diário e constante ao atleta, na parte esportiva, de imprensa e pessoal, garantindo que suas necessidades sejam atendidas.',
        image: image1,
    },
    {
        id: 2,
        name: 'Design',
        description: 'Criação de identidade visual própria para as redes sociais, desenvolvendo a imagem do atleta para fãs, torcedores e imprensa.',
        image: image2,
    },
    {
        id: 3,
        name: 'Fotografia',
        description: 'Serviço especializado e individualizado para registro de imagens durante partidas em seus clubes, além da criação de um banco de imagens.',
        image: image3,
    },
    {
        id: 4,
        name: 'EDIÇÃO DE VÍDEO',
        description: 'Outra parte da identidade visual, valorizando e expondo jogos, lances, conquistas e virtudes do atleta.',
        image: image4,
    },
    {
        id: 5,
        name: 'GESTÃO DE REDES',
        description: 'Conjunto de estratégias para alavancar a imagem do atleta dentro das redes sociais, fazendo a administração e monitoramento.',
        image: image5,
    },
    {
        id: 6,
        name: 'RP E PUBLICIDADE',
        description: 'Proximidade e relação individual com empresas e marcas, que possam gerar experiências únicas e/ou patrocínios.',
        image: image1,
    }
]

export default servicesData