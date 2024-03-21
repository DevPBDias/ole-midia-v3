import image1 from '../assets/images/giu.webp'
import image2 from '../assets/images/leo.webp'
import image3 from '../assets/images/roni.webp'
import image4 from '../assets/images/sandrinho.webp'
import image5 from '../assets/images/raquel.webp'
import image6 from '../assets/images/heman.webp'

export type IClientProps = {
    id: number,
    name: string,
    team: string,
    image: string,
}

const clientsData: IClientProps[] = [
    {
        id: 1,
        name: 'Giuliano',
        team: 'Santos',
        image: image1,
    },
    {
        id: 2,
        name: 'Léo Gugiel',
        team: 'Benfica (POR)',
        image: image2,
    },
    {
        id: 3,
        name: 'Roni Moura',
        team: 'Atlético-GO',
        image: image3,
    },
    {
        id: 4,
        name: 'Sandrinho',
        team: 'Vila Nova',
        image: image4,
    },
    {
        id: 5,
        name: 'Raquel Fernandes',
        team: 'Grêmio',
        image: image5,
    },
    {
        id: 6,
        name: 'Rafael Moura',
        team: 'Ex-Atleta',
        image: image6,
    }
]

export default clientsData;