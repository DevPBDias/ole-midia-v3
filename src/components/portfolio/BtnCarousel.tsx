import { BtnContainer } from './styles'
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import clientsData from '../../data/clientsData'

function BtnCarousel() {
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
                        <button type="button">Todos</button>
                        {
                            clientsData.map((client) => (
                                <button
                                    type="button"
                                    key={client.id}
                                >
                                    {client.name}
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