import React from "react";
import { useState } from "react";

export default function Exercise() {
  const [count, setCount] = useState(0);
  function countUp() {
    setCount(count + 1);
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>Press</button>
    </>
  );
}
