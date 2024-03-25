import styled from 'styled-components';

export const HomeContainer = styled.section`
    width: 100%;
    height: 28.89em;
    flex-shrink: 0;
    position: relative;

    .container_img {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .container_txt {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            width: 65%;
            color: var(--Off-White, #EBE3DE);
            text-align: center;
            font-size: 1.77778rem;
            font-style: normal;
            font-weight: 700;
            line-height: 2rem;
        }
    }

    .container_icons {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 3;
        bottom: 8%;
        display: flex;
        align-items: flex-end;
        justify-content: center;

        img {
            width: 1.77778rem;
            height: 1.77778rem;
        }
    }

    .wpp_icon {
        position: fixed;
        z-index: 3;
        right: 10vw;
        top: 60vh;
        width: 2.66667rem;
        height: 2.66667rem;
        flex-shrink: 0;
    }

    @media (min-width: 600px) {
        height: 41.33em;

        .container_txt {
            p {
                width: 70%;
                font-size: 3.55rem;
                line-height: 4rem; 
            }
        }

        .container_icons {
            img {
                width: 2.66667rem;
                height: 2.66667rem;
            }
        }

        .wpp_icon {
            top: 85vh;
        }
    }

    @media (min-width: 1000px) {
        height: 41.33em;

        .container_txt {
            p {
                font-size: 5.33333rem;
                line-height: 6.66667rem;
            }
        }
    }
`;

