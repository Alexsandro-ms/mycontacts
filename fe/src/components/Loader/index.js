import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Overlay, Spinner } from "./styles";

export default function Loader({ isLoading }) {
    if (!isLoading) return null;

    return ReactDOM.createPortal(
        <Overlay>
            <Spinner />
        </Overlay>,
        document.getElementById("loader-root")
    );
}

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};
