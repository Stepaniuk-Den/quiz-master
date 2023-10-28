import styled from 'styled-components';

export const StyledMediumBtn = styled.button`
padding: 16px 32px;
border-radius: 30px;
border: 1px solid var(--border-color-60);
color: var(--text-color-100);
background-color: transparent;
font-size: 16px;
font-family: GilroyBold, sans-serif;
letter-spacing: -0.16px;

&.accent {
    border: none;
    background-color: var(--blue-background);
}
`;