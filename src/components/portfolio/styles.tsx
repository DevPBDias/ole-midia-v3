import styled from 'styled-components';

export const PortfolioContainer = styled.section`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    background: var(--Off-White, #EBE3DE);

    h3 {
        color: var(--Vibrant-Orange, #250900);
        font-size: 1.77778rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2rem;
        margin-block: 2.2rem;
    }
    
    a {
        width: 14rem;
        height: 1.77778rem;
        padding: 0.35556rem 0.71111rem;
        border-radius: 0.35556rem;
        background: var(--Vibrant-Orange, #FF6123);
        color: var(--Dark-Brown, #250900);
        text-align: center;
        font-size: 0.62222rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.06667rem;
        text-transform: uppercase;
        margin-block: 2.5rem;
    }
`;

export const BtnContainer = styled.section`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    margin-left: 2.5em;

    .carousel {
        cursor: grab;
        overflow: hidden;
    }

    .inner {
        display: flex;
    }
    
    .item {
        display: flex;
        gap: 0.4em;

        button {
            width: max-content;
            border-radius: 1.56em;
            border: 1.561px solid var(--Dark-Brown, #250900);
            height: 1.78rem;
            padding: 0.34683rem 0.69372rem;
            color: var(--Dark-Brown, #250900);
            text-align: center;
            font-size: 0.607rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1.04056rem;
            text-transform: uppercase;
        }
    }
`;

export const ImgCarouselContainer = styled.section`
    width: 100%;
    height: 19.56em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.5em;

    .carousel {
        cursor: grab;
        overflow: hidden;
    }

    .inner {
        display: flex;
    }
    
    .item {
        min-width: 10.98rem;
        min-height: 19.56rem;
        padding: .61rem;

        img {
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
    }
`;