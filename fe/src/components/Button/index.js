import propTypes from "prop-types";
import { Spinner } from "../Loader/styles";

import { StyledButton } from "./styles";

export function Button({ type, disabled, isLoading, children }) {
    return (
        <StyledButton disabled={disabled || isLoading} type={type}>
            {isLoading && <Spinner $small />}
            {!isLoading && children}
        </StyledButton>
    );
}

Button.propTypes = {
    type: propTypes.string,
    disabled: propTypes.bool,
    isLoading: propTypes.bool,
    children: propTypes.node.isRequired,
};

Button.defaultProps = {
    type: "button",
    disabled: false,
    isLoading: false,
};
