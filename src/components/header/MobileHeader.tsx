import Logo from './Logo'
import Burger from './Burger'
import styled from 'styled-components';

const MobileContainer = styled.section`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 1.78em;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: 600px) {
        height: 2.67em;
    }
    
    @media (min-width: 1000px) {
        display: none;
    }
`;

function MobileHeader() {
    return (
        <MobileContainer>
            <Logo />
            <Burger />
        </MobileContainer>
    )
}

export default MobileHeader