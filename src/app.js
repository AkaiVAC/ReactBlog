import React from "react";
import { render } from "react-dom";

import Nav from "./Components/nav";

const App = () => {
    return (
        <>
            <Nav />
        </>
    );
};

render(<App />, document.querySelector("#app"));
