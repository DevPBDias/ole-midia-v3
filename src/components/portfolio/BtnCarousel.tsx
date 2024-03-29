import { BtnContainer } from './styles'
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { allArts } from '../../data/portfolioData';

type IBtnProps = {
    filterBtns: any,
    filterItems: any,
    setItems: any,
    active: any,
    setActive: any,
}

function BtnCarousel({ filterBtns, filterItems, setItems, active, setActive }: IBtnProps) {
    const carousel = useRef<any>(null);
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    const handleActiveBtn = () => {
        setActive(allArts.id)
        setItems(allArts.arts)
    }

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
                            className={ active === 1 ? 'active' : '' }
                            onClick={handleActiveBtn}
                            type="button">Todos</button>
                        {
                            filterBtns?.map((client: any, index: number) => (
                                <button
                                    type="button"
                                    key={index}
                                    className={ active === (index + 2) ? 'active' : '' }
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