import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    padding: 0 16px;
    height: 52px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    border-radius: 4px;
    color: #fff;
    transition: background 0.2s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary.light};
    }
    &:active {
        background-color: ${({ theme }) => theme.colors.primary.dark};
    }
    &:disabled {
        background-color: #ccc;
        cursor: default;
    }

    ${({ theme, danger }) =>
        danger &&
        css`
            background-color: ${theme.colors.danger.main};
            &:hover {
                background-color: ${theme.colors.danger.light};
            }
            &:active {
                background-color: ${theme.colors.danger.dark};
            }
        `}
`;
