import React from "react";

export default function ChangeText({ onInputChange, showEditor }) {
    return (
        <div className="editCon">
            <textarea
                onChange={onInputChange}
                className="changePara"
            ></textarea>
            <button onClick={showEditor}>Push to state array</button>
        </div>
    );
}
