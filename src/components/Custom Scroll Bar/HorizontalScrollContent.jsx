import React, { useContext } from "react";
import "./styles/ScrollBarArea.css";
import ScrollBar from "./ScrollBar";
import ContainerContext from "./store/container-context";

function ScrollBarArea() {
  const { contentWidth } = useContext(ContainerContext);
  const { contentPosition } = useContext(ContainerContext);
  const calculatedWidth = contentWidth>0?200-contentWidth:100
  const  defaultWidth = "100px"

  return (
    <div className="container">
      <div className="contentContainer" style={{width: `${calculatedWidth}%`, left:`${-contentPosition}px`}}>      
        <h1  style={{width: `calc(${defaultWidth} + ${calculatedWidth}px)`}}> {calculatedWidth}%</h1>
        <h1  style={{width: `calc(${defaultWidth} + ${calculatedWidth}px)`}}> {calculatedWidth}%</h1>
        <h1  style={{width: `calc(${defaultWidth} + ${calculatedWidth}px)`}}> {calculatedWidth}%</h1>
</div>
      <ScrollBar />
    </div>
  );
}

export default ScrollBarArea;
