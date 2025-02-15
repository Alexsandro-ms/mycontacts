import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(246, 245, 252, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Spinner = styled.div`
    width: ${({ $small }) => ($small ? "1em" : "50px")};
    height: ${({ $small }) => ($small ? "1em" : "50px")};
    border: ${({ $small }) => ($small ? "3px" : "5px")} solid
        ${({ theme }) => theme.colors.gray[200]};
    border-top: ${({ $small }) => ($small ? "3px" : "5px")} solid
        ${({ theme }) => theme.colors.primary.main};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;
