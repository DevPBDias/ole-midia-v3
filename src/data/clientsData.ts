import image1 from '../assets/images/giu.webp'
import image2 from '../assets/images/leo.webp'
import image3 from '../assets/images/roni.webp'
import image4 from '../assets/images/sandrinho.webp'
import image5 from '../assets/images/raquel.webp'
import image6 from '../assets/images/heman.webp'
import image1_dk from '../assets/images/giu_dk.webp'
import image2_dk from '../assets/images/leo.webp'
import image3_dk from '../assets/images/roni_dk.webp'
import image4_dk from '../assets/images/sandrinho_dk.webp'
import image5_dk from '../assets/images/raquel_dk.webp'
import image6_dk from '../assets/images/heman_dk.webp'

export type IClientProps = {
    id: number,
    name: string,
    team: string,
    image: string,
    image_dk: string,
}

const clientsData: IClientProps[] = [
    {
        id: 1,
        name: 'Giuliano',
        team: 'Santos',
        image: image1,
        image_dk: image1_dk,
    },
    {
        id: 2,
        name: 'Léo Gugiel',
        team: 'Benfica (POR)',
        image: image2,
        image_dk: image2_dk,
    },
    {
        id: 3,
        name: 'Roni Moura',
        team: 'Atlético Goianiense',
        image: image3,
        image_dk: image3_dk,
    },
    {
        id: 4,
        name: 'Sandrinho',
        team: 'Vila Nova',
        image: image4,
        image_dk: image4_dk,
    },
    {
        id: 5,
        name: 'Raquel Fernandes',
        team: 'Grêmio',
        image: image5,
        image_dk: image5_dk,
    },
    {
        id: 6,
        name: 'Rafael Moura',
        team: 'Ex-Atleta',
        image: image6,
        image_dk: image6_dk,
    }
]

export default clientsData;