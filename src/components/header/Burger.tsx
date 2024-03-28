import { useState } from 'react';
import styled from 'styled-components';
import IconsNavbar from './IconsNavbar';

type Props = {
  open: boolean,
};

export const StyledBurger = styled.div<Props>`
    width: 1.5em;
    height: 1.5em;
    position: fixed;
    top: 1.3rem;
    right: 1.3rem;
    z-index: 98;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
        
    .burger {
        width: 1.5em;
        height: 0.25em;
        background-color: #250900;
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

const NavBar = styled.ul<Props>`
      display: flex;
      flex-flow: row nowrap;
      gap: 1.2rem;
  
      a {
        color: var(--Off-White, #EBE3DE);
        font-size: 0.88889rem;
        font-style: normal;
        font-weight: 700;
        line-height: 0.88889rem;
        text-transform: uppercase;
  
        &:hover {
        color: var(#250900);
        }
      }
    
  
      @media (min-width: 300px) and (max-width: 999px) {
          display: ${({ open }) => (open ? 'flex' : 'none')};;
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
      }
  `;

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className="burger" />
        <div className="burger" />
        <div className="burger" />
      </StyledBurger>
      <NavBar open={open} >
        <a onClick={() => setOpen(!open)} href="#home">Home</a>
        <a onClick={() => setOpen(!open)} href="#who">Quem somos</a>
        <a onClick={() => setOpen(!open)} href="#services">Serviços</a>
        <a onClick={() => setOpen(!open)} href="#clients">Clientes</a>
        <a onClick={() => setOpen(!open)} href="#portfolio">Portfólio</a>
        <a onClick={() => setOpen(!open)} href="#contact">Contato</a>
        <IconsNavbar />
      </NavBar>
    </>
  );
}

export default Burger;
