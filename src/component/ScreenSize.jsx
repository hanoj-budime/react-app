import React, { useState, useEffect } from "react";

export const ScreenSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  /**
   * useEffect -> useEffect(() => {}, []);
   * initialize only once, when this component render
   */
  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, []);
  //template html
  return (
    <div className="text-center font-weight-bold mb-2 mt-1">
      <h1>Window</h1>
      <h1>{size} PX</h1>
    </div>
  );
};
