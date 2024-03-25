import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import styled from 'styled-components';

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
        position: unset;
    }
`;

function Header() {
    return (
        <HeaderBar>
            <DesktopHeader />
            <MobileHeader />
        </HeaderBar>
    )
}

export default Header