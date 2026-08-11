import { useState } from "react";
import BtnCarousel from "./BtnCarousel";
import ImgCarousel from "./ImgCarousel";
import { PortfolioContainer } from "./styles";
import { allArts, portfolioData } from "../../data/portfolioData";

function Portfolio() {
  const [items, setItems] = useState<string[]>(allArts.arts);
  const [active, setActive] = useState<number>(0);

  const portfolioOrdered = [...portfolioData].sort((a, b) =>
    a.btnName.localeCompare(b.btnName),
  );

  const filterBtns = portfolioOrdered.map((value) => ({
    id: value.id,
    btnName: value.btnName,
  }));

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
        href="https://docs.google.com/presentation/d/1s6ve6CBnZzZUkdtc3KH-THXCONsCjomYmj6MCD4ifew/edit?slide=id.g1e7db01010e_0_0#slide=id.g1e7db01010e_0_0"
      >
        Confira nosso portfólio completo
      </a>
    </PortfolioContainer>
  );
}

export default Portfolio;
