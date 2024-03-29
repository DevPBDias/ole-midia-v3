import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import styled from 'styled-components';
import { motion, useScroll, useSpring } from "framer-motion";

const HeaderBar = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4.44em;
    padding: 1.3em;
    background: #FF6123;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    @media (min-width: 600px) {
        padding: 1.1em 1.8em;
    }
    
    @media (min-width: 1000px) {
        padding: 1.3em 4em;
    }

    .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: white;
    transform-origin: 0%;
  }
`;

function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
      <HeaderBar>
            <DesktopHeader />
            <MobileHeader />
            <motion.div className="progress-bar" style={{ scaleX }} />
        </HeaderBar>
    )
}

export default Header