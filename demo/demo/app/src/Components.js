import styled from 'styled-components';

export const Title = styled.div`
    h2 {
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 44px;
        /* or 122% */

        text-align: center;
        letter-spacing: -0.857143px;
    }
`;

export const Background = styled.div`
    background-image: linear-gradient(White, LightGray);
    height: 772px;   
`;

export const Center = styled.header`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
