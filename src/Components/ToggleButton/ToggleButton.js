import "./ToggleButton.css";
import { useState } from "react";

export default function ToggleButton() {
  const [text, setVisibility] = useState(
    "Leprosy will take control and bring you to your death"
  );
  function showHide() {
    text
      ? setVisibility("")
      : setVisibility("Leprosy will take control and bring you to your death");
  }
  return (
    <>
      <button onClick={showHide}> Delete/Rewrite</button>
      {text}
    </>
  );
}
