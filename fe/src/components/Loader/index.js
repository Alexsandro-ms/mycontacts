import React from "react";
import ReactDOM from "react-dom";

import { Overlay, Spinner } from "./styles";

export default function Loader() {
    return ReactDOM.createPortal(
        <Overlay>
            <Spinner />
        </Overlay>,
        document.getElementById("loader-root")
    );
}
