import { Link } from "react-router-dom"
import React from "react";

function servers() {
  const handleClick = () => {
    window.open("https://portal.azure.com/");
  };

  return (
    <div>
      <a href="https://twitter.com/saigowthamr/" target="_blank">Twitter</a>
    </div>
  );
}
export default servers