import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ImgCarouselContainer } from "./styles";

function ImgCarousel({ data }: any) {
  const carousel = useRef<any>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <ImgCarouselContainer>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {data?.map((art: any, index: number) => (
            <motion.div whileTap={{ scale: 0.9 }} key={index} className="item">
              <img src={art} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </ImgCarouselContainer>
  );
}

export default ImgCarousel;
