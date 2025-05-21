import React from "react";
import "./button.scss";

export default function Button({
  text,
  onClick,
  backgroundColor,
  color,
  width,
  height,
  style = {},
}) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor, color, width, height, ...style }}
      className="button"
    >
      {text}
    </button>
  );
}
