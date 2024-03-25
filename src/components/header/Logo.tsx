import logo from '../../assets/logo/Logo_mobile.webp'
import logoDk from '../../assets/logo/Default_Logo.png'
import styled from 'styled-components';


export const OleLogoContainer = styled.picture`
    position: absolute;
    top: 1.3rem;
    left: 1.3rem;
    z-index: 98;
    width: 2.55em;
    height: 1.78em;

    img {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 600px) {
      width: 3.17em;
      height: 2.2em;
      top: 1rem;

      source {
        width: 100%;
        height: 100%;
      }
    }

    @media (min-width: 1000px) {
        position: unset;
    }
`;


function Logo() {
  return (
    <OleLogoContainer>
      <source srcSet={logoDk} media='(min-width=600px)' />
      <img src={logo} alt="" />
    </OleLogoContainer>
  )
}

export default Logo