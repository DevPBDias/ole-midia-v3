import styled from 'styled-components';

export const WhoContainer = styled.section`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    
    @media (min-width: 600px) {
        flex-flow: row nowrap;
        height: 26.2rem;
    }
    
    @media (min-width: 760px) {
        height: 22.2rem;
    }

    @media (min-width: 1000px) {
        height: 35.5rem;
    }
`;

export const ImgContainer = styled.picture`
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 600px) {
        width: 50%;
    }

    @media (min-width: 750px) {
        width: 55%;
    }
`;

export const TxtContainer = styled.div`
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;

    div {
        padding-inline: 10%;
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

    @media (min-width: 600px) {
        width: 50%;
        padding-inline: 3em;
        padding-block: 2.7em;

        div {
            width: 100%;
            padding-inline: 0;
            align-items: flex-start;

        h1 {
            width: 4.22rem;
            font-size: 2.66667rem;
            line-height: 3.11111rem;
            text-align: left;
        }

        p {
            width: 12.6rem;
            text-align: left;
        }
    }

    }

    @media (min-width: 750px) {
        width: 45%;

        div {
            p {
                width: 14.88rem;
            }
        }

    }

    @media (min-width: 1000px) {
        width: 45%;

        div {
            padding-inline: 10%;
            align-items: flex-start;

        h1 {
            width: 6.67rem;
            font-size: 3.55556rem;
            line-height: 4rem; 
        }

        p {
            width: 17.88rem;
            text-align: left;
            font-size: 1rem;
            line-height: 1.77778rem;

            span {
                font-size: 1rem;
                line-height: 1.77778rem;
            }
        }
    }

    }

    @media (min-width: 1250px) {
        div {
            p {
                width: 20.88rem;
            }
        }

    }
`;