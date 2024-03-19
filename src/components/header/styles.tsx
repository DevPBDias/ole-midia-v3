import styled from 'styled-components';

type Props = {
    open: boolean,
};

export const HeaderBar = styled.header`
    width: 100%;
    display: flex;
    height: 4.44em;
    padding: 1.33em;
    justify-content: space-around;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: #FF6123;

    section {
        display: flex;
        width: 90%;
        height: 1.78em;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
    }
`;

export const OleLogo = styled.img`
    position: fixed;
    top: 1.2rem;
    left: 1.5rem;
    z-index: 98;
    width: 2.55em;
    height: 1.78em;
`;

export const StyledBurger = styled.div<Props>`
    width: 1.5rem;
    height: 1.5rem;
    position: fixed;
    top: 1.2rem;
    right: 1.5rem;
    z-index: 98;
    display: none;
    
    @media (min-width: 360px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    
    .burger {
        width: 1.5rem;
        height: 0.25rem;
        background-color: #250900;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
    
        &:nth-child(1) {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }
    
        &:nth-child(2) {
            transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }
    
        &:nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
  `;

export const NavBar = styled.ul<Props>`
    display: flex;
    flex-flow: row nowrap;
    padding-top: 4em;

    @media (max-width: 744px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-items: center;
        gap: 1.5em;
        z-index: 10;
        background-color: #FF6123;
        position: fixed;
        transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
        top: 0;
        right: 0;
        height: 26.1em;
        width: 100%;
        transition: transform 0.3s ease-in-out;
    }
`;

export const Link = styled.a`
    color: var(--Off-White, #EBE3DE);
    font-family: 'Poppins';
    font-size: 0.88889rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.88889rem;
    text-transform: uppercase;

    &:hover {
    color: var(#250900);
}
`;

export const ContainerIcons = styled.section`
    display: flex;
    flex: row;
    justify-items: center;
    align-items: center;
    gap: 0.5rem;
`;

export const Icons = styled.img`
    width: 1.78em;
    height: 1.78em;
    margin: auto;
`;