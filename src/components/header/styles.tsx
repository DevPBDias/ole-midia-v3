import styled from 'styled-components';

type Props = {
    open: boolean,
};

export const HeaderBar = styled.header`
    width: 100%;
    display: flex;
    height: 4.44em;
    padding: 1.3em;
    justify-content: center;
    align-items: center;
    background: #FF6123;

    section {
        display: flex;
        width: 100%;
        height: 1.78em;
        justify-items: center;
        justify-content: space-between;
        align-items: center;
        position: relative;

        .div_links_desktop {
            display: none;
        }

        .div_icons_desktop {
            display: none;
        }

    }

    @media (min-width: 600px) {
        padding: 1.1em 1.8em;

        section {
            height: 2.67em;
        }
    }

    @media (min-width: 1000px) {
        padding: 1.3em 4em;

        section {
            .div_links_desktop {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1.5em;
            }

            .div_icons_desktop {
                display: flex;
            }
        }
    }
`;

export const OleLogo = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 98;
    width: 2.55em;
    height: 1.78em;

    @media (min-width: 600px) {
        width: 3.17em;
        height: 2.2em;
    }

    @media (min-width: 1000px) {
        position: unset;
    }
`;

export const StyledBurger = styled.div<Props>`
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    top: 10;
    right: 0;
    z-index: 98;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
        
    .burger {
        width: 1.5em;
        height: 0.25em;
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

    @media (min-width: 600px) {
        width: 2.66667em;
        height: 2em;

        .burger {
            width: 2em;
            height: 0.30em;
        }
    }

    @media (min-width: 1000px) {
        display: none;
    }
  `;

export const NavBar = styled.ul<Props>`
        display: none;

        .div_links_mobile, .div_icons_mobile {
            display: none;
        }

    @media (min-width: 300px) and (max-width: 999px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-items: center;
        padding-top: 4em;
        gap: 1.5em;
        z-index: 10;
        background-color: #FF6123;
        position: fixed;
        transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
        top: 0;
        right: 0;
        height: 26.1em;
        width: 100%;
        transition: transform 0.3s ease-in-out;

        .div_links_mobile {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            gap: 1.5em;
        }

        .div_icons_mobile {
            display: flex;
        }
    }
`;

export const Link = styled.a`
    color: var(--Off-White, #EBE3DE);
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
    gap: 0.5em;
`;

export const Icons = styled.img`
    width: 1.78em;
    height: 1.78em;
    margin: auto;
`;