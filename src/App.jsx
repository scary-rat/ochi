import { useState } from "react";
import "./assets/styles/index.css";
import "./assets/styles/scss/style.scss";
import Cards from "./components/Cards";

function App() {
    return (
        <>
            <div className="container max-w-full">
                <h2 className="heading">Ninja Man</h2>
                <Cards></Cards>
            </div>
        </>
    );
}

export default App;
