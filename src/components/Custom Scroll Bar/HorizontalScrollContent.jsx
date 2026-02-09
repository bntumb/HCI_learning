import React, { useContext } from "react";
import "./styles/ScrollBarArea.css";
import ScrollBar from "./ScrollBar";
import ContainerContext from "./store/container-context";

function ScrollBarArea() {
  const { contentWidth } = useContext(ContainerContext);

  return (
    <div className="container">
      <h1>{contentWidth}</h1>
      <div className="contentContainer"   style={{ width: `${200-contentWidth}%` }}>Content</div>
      <ScrollBar />
    </div>
  );
}

export default ScrollBarArea;
