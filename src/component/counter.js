import React, { useState, useEffect } from "react";
import { ScreenSize } from './ScreenSize'


export const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`call useEffect ...`);
    document.title = `New Message(${count})`
  });
  console.log(`render component...`);
  return (
    <div
      className="mx-auto mt-5 card p-3 border-warning shadow-lg"
      style={{ width: "22rem" }}
    >
      <ScreenSize></ScreenSize>
      <div className="text-center mb-3">
        <h1>Counter</h1>
        <h1>{count}</h1>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button onClick={() => setCount(count + 1)} className="btn btn-success">
          Increase
        </button>
        <button onClick={() => setCount(0)} className="btn btn-warning">
          Reset
        </button>
        <button onClick={() => setCount(count - 1)} className="btn btn-danger">
          Decrease
        </button>
      </div>
    </div>
  );
};
