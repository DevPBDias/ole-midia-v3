import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ImgCarouselContainer } from "./styles";

function ImgCarousel({ data }: any) {
  const carousel = useRef<any>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    // Calculate initial width
    handleResize();

    // Recalculate on window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  return (
    <ImgCarouselContainer>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          key={data?.join(",")}
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
