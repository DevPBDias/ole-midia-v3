import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import arte1 from '../../assets/images/arte_giu1.webp'
import arte2 from '../../assets/images/arte_giu3.webp'
import arte3 from '../../assets/images/arte_giu2.webp'
import { ImgCarouselContainer } from "./styles"

function ImgCarousel() {
    const images = [arte1, arte2, arte3]
    const carousel = useRef<any>(null);
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <ImgCarouselContainer>
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
                <motion.div
                    className="inner"
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {
                        images.map((art) => (
                            <motion.div key={art} className="item">
                                <img src={art} alt="" />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </ImgCarouselContainer>
    )
}

export default ImgCarousel