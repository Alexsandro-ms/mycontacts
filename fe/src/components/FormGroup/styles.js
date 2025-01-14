import styled from "styled-components";

export const Container = styled.div`
    & + & {
        margin-top: 16px;
    }
    small {
        display: block;
        color: ${({ theme }) => theme.colors.danger.main};
        font-size: 12px;
        margin-top: 8px;
    }
`;
