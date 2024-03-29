import { useState } from "react"
import BtnCarousel from "./BtnCarousel"
import ImgCarousel from "./ImgCarousel"
import { PortfolioContainer } from "./styles"
import { allArts, portofolioData } from "../../data/portofolioData"

function Portfolio() {
    const [items, setItems] = useState<any>(allArts)

    const filterBtns = portofolioData.map((value) => value.btnName)
    
    const filterItems = (btnName: string) => {
        const data = portofolioData.filter((value) => value.btnName === btnName)
        setItems(data[0].arts)
    }

    return (
        <PortfolioContainer id='portfolio'>
            <h3>Portfólio</h3>
            <BtnCarousel
            filterBtns={filterBtns}
            filterItems={filterItems}
            setItems={setItems}
            />
            <ImgCarousel data={items}/>
            <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1M_GIf7TGoNhDwePLdRU4huUZJJ0lCF1M/view?usp=share_link">
                Confira nosso portfólio completo
            </a>
        </PortfolioContainer>
    )
}

export default Portfolio