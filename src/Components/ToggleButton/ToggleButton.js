import "./ToggleButton.css";
import { useState } from "react";

export default function ToggleButton() {
  const [text, setVisibility] = useState("visible");
  let visibility = { visibility: text };
  function showHide() {
    if (text === "visible") {
      setVisibility("hidden");
    } else {
      setVisibility("visible");
    }
    console.log(visibility);
  }
  return (
    <>
      <p style={visibility}>
        Leprosy will take control and bring you to your death
      </p>
      <button onClick={showHide}>
        {" "}
        {text === "visible" ? "Hide" : "Show"}
      </button>
    </>
  );
}
