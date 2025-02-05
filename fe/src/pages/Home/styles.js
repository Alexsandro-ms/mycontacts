import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
    width: 100%;

    input {
        width: 100%;
        background: #fff;
        border: none;
        border-radius: 25px;
        height: 50px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
        outline: none;
        padding: 0 16px;

        &::placeholder {
            color: #bcbcbc;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: ${({ hasError }) =>
        hasError ? "flex-end" : "space-between"};
    margin-top: 32px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
    padding-bottom: 16px;

    strong {
        font-size: 24px;
    }

    a {
        color: ${({ theme }) => theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.2s ease-in;

        &:hover {
            background: ${({ theme }) => theme.colors.primary.main};
            color: #fff;
        }
    }
`;

export const ListHeader = styled.header`
    margin-top: 24px;

    margin-bottom: 8px;
    button {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.primary.main};
    }
    span {
        font-weight: bold;
        margin-right: 8px;
    }
`;

export const Card = styled.div`
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
        margin-top: 16px;
    }

    .info {
        .contact-name {
            display: flex;
            align-items: center;

            small {
                background: ${({ theme }) => theme.colors.primary.lighter};
                color: ${({ theme }) => theme.colors.primary.main};
                font-weight: bold;
                text-transform: uppercase;
                padding: 4px;
                border-radius: 4px;
                margin-left: 8px;
            }
        }

        span {
            display: block;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.gray[200]};
        }
    }

    .actions {
        display: flex;
        align-items: center;
        button {
            background: transparent;
            border: none;
        }
    }
`;

export const ErrorContainer = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
        color: ${({ theme }) => theme.colors.danger.main};
        font-size: 24px;
        text-align: center;
        margin-bottom: 16px;
    }
`;
