import { styled } from "styled-components";

export const Button = styled.button`
    width: 100%;
    height: 52px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    border-radius: 4px;
    color: #fff;
    transition: background 0.2s ease-in;

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
`;
