import * as React from "react";


function handleClick(e) {
    // Some function which does fake API call
    console.log("Button has been clicked");
}

function TestButton() {
    return (
        <button className="button" onClick={handleClick}>
            Submit
      </button>
    );
}

export default TestButton;