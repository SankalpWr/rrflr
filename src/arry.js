import React from "react";
import "./styles.css";

const arry = () => {
  const arr = [1, 2, 3, 4, 5];
  return <div className="App">{arr.filter((val) => val !== 2)}</div>;
};

export default arry;
