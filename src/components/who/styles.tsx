import styled from 'styled-components';

export const WhoContainer = styled.section`
    width: 100%;
    height: 32em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`;

export const ImgContainer = styled.div`
    width: 100%;
    height: 14.67em;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const TxtContainer = styled.div`
    width: 100%;
    padding-block: 2.7em;

    div {
        width: 70%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        margin: auto;
        text-align: center;
        gap: 1em;

        h1 {
            color: var(--Vibrant-Orange, #FF6123);
            font-size: 1.77778rem;
            font-style: normal;
            font-weight: 700;
            line-height: 2rem; 
        }

        p {
            color: var(--Dark-Brown, #250900);
            text-align: center;
            font-size: 0.66667rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.33333rem;

            span {
                color: var(--Dark-Brown, #250900);
                font-size: 0.66667rem;
                font-style: normal;
                font-weight: 700;
                line-height: 1.33333rem;
            }
        }
    }
`;