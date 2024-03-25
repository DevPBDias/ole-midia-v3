import BtnCarousel from "./BtnCarousel"
import ImgCarousel from "./ImgCarousel"
import { PortfolioContainer } from "./styles"

function Portfolio() {
    return (
        <PortfolioContainer id='portfolio'>
            <h3>Portfólio</h3>
            <BtnCarousel />
            <ImgCarousel />
            <a href="https://drive.google.com/file/d/1M_GIf7TGoNhDwePLdRU4huUZJJ0lCF1M/view?usp=share_link">
                Confira nosso portfólio completo
            </a>
        </PortfolioContainer>
    )
}

export default Portfolio