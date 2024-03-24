import styled from 'styled-components';

export const ClientsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    background-color: var(--Dark-Brown, #FF6123);
    padding-top: 2.2em;

    h5 {
        color: var(--Vibrant-Orange, #250900);
        font-size: 1.77778rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2rem;
    }

    section {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        justify-items: center;
        padding-block: 2.2em;
        padding-inline: 6.5%;
        gap: 1em;
    }
`;


export const CardContainer = styled.div`
    width: 8.22rem;
    height: 11.56rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    border-radius: 0.88889em;
    position: relative;
`;

export const ImgContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    border-radius: 0.89em;

    img {
        width: 100%;
        height: 100%;
        border-radius: 0.89em;
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    height: 2.28rem;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: .4em;
    background-color: var(--Vibrant-Orange, #250900);
    border-radius: 0 0 0.89em 0.89em;
`;

export const TextContent = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    h3 {
        color: var(--Vibrant-Orange, #FF6123);
        font-size: 0.66667rem;
        font-style: normal;
        font-weight: 700;
        line-height: 0.88889rem;
        text-transform: uppercase;
    }

    p {
        color: var(--Off-White, #EBE3DE);
        font-size: 0.44444rem;
        font-style: normal;
        font-weight: 400;
    }
`;