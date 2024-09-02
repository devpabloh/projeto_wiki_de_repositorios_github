import React from "react";
import App from "./pages/app";
import ReactDom from "react-dom/client";
import GlobalStyles from "./styles";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <GlobalStyles/>
        <App/>
    </React.StrictMode>
)