import { BtnContainer } from "./styles";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { allArts } from "../../data/portfolioData";

type IBtnProps = {
  filterBtns: any;
  filterItems: any;
  setItems: any;
  active: any;
  setActive: any;
};

function BtnCarousel({
  filterBtns,
  filterItems,
  setItems,
  active,
  setActive,
}: IBtnProps) {
  const carousel = useRef<any>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const handleActiveBtn = () => {
    setActive(0);
    setItems(allArts.arts);
  };

  return (
    <BtnContainer>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="item">
            <button
              className={active === 0 ? "active" : ""}
              onClick={handleActiveBtn}
              type="button"
            >
              Todos
            </button>
            {filterBtns?.map((client: { id: number; btnName: string }) => (
              <button
                type="button"
                key={client.id}
                className={active === client.id ? "active" : ""}
                onClick={() => filterItems(client.btnName)}
              >
                {client.btnName}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </BtnContainer>
  );
}

export default BtnCarousel;
