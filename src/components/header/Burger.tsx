import { useState } from 'react';
import NavbarLink from './NavbarLink';
import styled from 'styled-components';

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

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className="burger" />
        <div className="burger" />
        <div className="burger" />
      </StyledBurger>
      <NavbarLink open={open} />
    </>
  );
}

export default Burger;
