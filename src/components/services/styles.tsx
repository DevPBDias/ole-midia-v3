import styled from 'styled-components';

export const ServicesContainer = styled.section`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    background-color: var(--Dark-Brown, #250900);
    padding-top: 2.2em;

    h5 {
        color: var(--Vibrant-Orange, #FF6123);
        font-size: 1.77778rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2rem;
    }

    section {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        justify-items: center;
        padding-block: 2.2em;
        padding-inline: 6.5%;
        gap: 1em;
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    height: 11.11em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    border-radius: 0.88889em;
    background-color: var(--Off-White, #EBE3DE);
`;

export const ImgContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    border-radius: 0.89em;

    img {
        width: 100%;
        height: 100%;
        border-radius: 0.89em 0 0 0.89em;
    }
`;

export const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: .5em 1em;
`;

export const TextContent = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    justify-items: center;
    gap: .5em;

    h3 {
        color: var(--Dark-Brown, #250900);
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.33333rem; 
        text-transform: uppercase;
    }

    p {
        color: var(--Dark-Brown, #250900);
        font-size: 0.55556rem;
        font-style: normal;
        font-weight: 400;
        line-height: 0.88889rem;
    }
`;