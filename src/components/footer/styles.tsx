import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    padding: 3.55556em 3.16667em 3em 3.16667em;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    background: #FF6224;
    gap: 5.56em;


    @media (min-width: 600px) {
        height: 17.7rem;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 3.11111rem 5.83333rem 4rem 6.66667rem;
    }

    @media (min-width: 1200px) {
        gap: 30em;
        padding: 8.77778rem 10.11111rem 7.22222rem 10.11111rem;
    }
`;

export const MidiaContainer = styled.section`
    width: 100%;
    height: 10.22em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    justify-items: center;
    gap: 1.78em;

    p {
        color: #D9D9D9;
        font-size: 0.66667rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.33333rem; 
    }

    @media (min-width: 1200px) {
        p {
            font-size: 0.88889rem;
        }
    }


`;

export const LogoContainer = styled.div`
    width: 3.11em;
    height: 2.22em;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;

    img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 1200px) {
        width: 4.33333rem;
        height: 3.11111rem;
    }
`;

export const LinksContainer = styled.section`
    width: 100%;
    height: 8.78em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    justify-items: center;
    gap:.3em;

    h3 {
        color: #260A00;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.33333rem;
    }

    a {
        color: #D9D9D9;
        font-size: 0.66667rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.33333rem; 
    }

    @media (min-width: 1200px) {
        h3 {
            font-size: 1.33333rem;
            font-weight: 800;
            line-height: 2rem;
        }

        a {
            font-size: 0.88889rem;
        }
    }
`;