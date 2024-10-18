import React, { useState } from "react";
import "./Cards.scss";

function Cards() {
    const [count, setCount] = useState(0);

    function clickHandler() {
        setCount(count + 1);
    }

    return (
        <>
            <button className="btn btn-success" onClick={clickHandler}>
                <span>{count}</span>
            </button>
        </>
    );
}

export default Cards;
