import styled from "styled-components";

export const Container = styled.header`
    a {
        color: ${({ theme }) => theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
`;
