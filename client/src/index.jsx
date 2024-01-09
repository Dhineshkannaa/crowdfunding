import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { useContract, ThirdwebProvider } from '@thirdweb-dev/react';
import './index.css';
import { Sepolia } from "@thirdweb-dev/chains";
import { StateContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Component() {
    const { contract, isLoading } = useContract("0x5AC0189Ea601F5301e8d3cca4701c541B3123Bec");
}

root.render(
    <ThirdwebProvider activeChain={ Sepolia } 
    clientId= "cb7420e8eb1d4ecfaf062b3a5ee05070">
        <Component />
        <Router>
        <StateContextProvider>
        <App />
        </StateContextProvider>
        </Router> 
    </ThirdwebProvider>
    );                          