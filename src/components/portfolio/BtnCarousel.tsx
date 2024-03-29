import { BtnContainer } from './styles'
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { allArts } from '../../data/portofolioData';

type IBtnProps = {
    filterBtns: any,
    filterItems: any,
    setItems: any,
}

function BtnCarousel({ filterBtns, filterItems, setItems }: IBtnProps) {
    const carousel = useRef<any>(null);
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <BtnContainer>
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
                <motion.div
                    className="inner"
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div className='item'>
                        <button
                        onClick={() => setItems(allArts)}
                        type="button">Todos</button>
                        {
                            filterBtns?.map((client: string, index: number) => (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => filterItems(client)}
                                >
                                    {client}
                                </button>
                            ))
                        }
                    </motion.div>
                </motion.div>
            </motion.div>
        </BtnContainer>

    )
}

export default BtnCarousel