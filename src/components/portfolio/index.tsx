import { useState } from "react";
import BtnCarousel from "./BtnCarousel";
import ImgCarousel from "./ImgCarousel";
import { PortfolioContainer } from "./styles";
import { allArts, portfolioData } from "../../data/portfolioData";

function Portfolio() {
  const [items, setItems] = useState<string[]>(allArts.arts);
  const [active, setActive] = useState<number>(0);

  const filterBtns = portfolioData.map((value) => value.btnName);

  const filterItems = (btnName: string) => {
    const data = portfolioData.filter((value) => value.btnName === btnName);
    setItems(data[0].arts);
    setActive(data[0].id);
  };

  return (
    <PortfolioContainer id="portfolio">
      <h3>Portfólio</h3>
      <BtnCarousel
        filterBtns={filterBtns}
        filterItems={filterItems}
        active={active}
        setActive={setActive}
        setItems={setItems}
      />
      <ImgCarousel data={items} />
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://drive.google.com/file/d/1M_GIf7TGoNhDwePLdRU4huUZJJ0lCF1M/view?usp=share_link"
      >
        Confira nosso portfólio completo
      </a>
    </PortfolioContainer>
  );
}

export default Portfolio;
