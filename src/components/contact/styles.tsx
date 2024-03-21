import styled from 'styled-components';

export const ContactContainer = styled.section`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    background-color: var(--Dark-Brown, #250900);
    padding-top: 2.2em;

    h3 {
        color: var(--Vibrant-Orange, #FF6123);
        font-size: 1.77778rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2rem;
    }
`;

export const FormContainer = styled.form`
    width: 17.3em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: .4em;
    margin-block: 2.22em;

    input {
        width: 100%;
        height: 1.77778rem;
        padding: 0.44444rem 0.88889rem;
        border-radius: 0.22222rem;
        background: var(--Off-White, #EBE3DE);
        color: var(--Dark-Brown, #250900);
        font-size: 0.55556rem;
        font-style: normal;
        font-weight: 400;
        line-height: 0.66667rem;

        &::placeholder {
            color: var(--Dark-Brown, #250900);
            font-size: 0.55556rem;
            font-style: normal;
            font-weight: 400;
            line-height: 0.66667rem;
        }
    }

    textarea {
        width: 100%;
        height: 8.88889rem;
        padding: 0.44444rem 0.88889rem;
        flex-shrink: 0;
        color: var(--Dark-Brown, #250900);
        font-size: 0.55556rem;
        font-style: normal;
        font-weight: 400;
        line-height: 0.66667rem;
    }

    button {
        width: 60%;
        height: 1.77778rem;
        border-radius: 0.44444rem;
        background: var(--Vibrant-Orange, #FF6123);
        flex-shrink: 0;
        border: none;
        color: var(--Dark-Brown, #250900);
        text-align: center;
        font-size: 0.77778rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.33333rem;
        text-transform: uppercase;
        margin-top: 1em;
    }

    span {
        width: 100%;
        color: var(--Dark-Brown, #FF6123);
        font-size: 0.55556rem;
        font-style: normal;
        font-weight: 400;
        line-height: 0.66667rem;
    }
`;

