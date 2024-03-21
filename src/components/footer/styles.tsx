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