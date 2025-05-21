import React from "react";
import "./button.scss";

export default function IconedButton({
  text,
  onClick,
  backgroundColor,
  color,
  width,
  height,
  icon,
  iconWidth,
  iconHeight,
  textsize,
  textColor,
}) {
  const handleClick = () => {
    onClick();
  };
  return (
    <div>
      <button
        className="iconed-button"
        onClick={handleClick}
        style={{ backgroundColor, color, width, height }}
      >
        <img
          src={icon}
          alt="icon"
          style={{ width: iconWidth, height: iconHeight, marginRight: text && "8px" }}
        />
        {text && (
          <span style={{ color: textColor, fontSize: textsize, marginRight: "8px" }}>
            {text}
          </span>
        )}
      </button>
    </div>
  );
}
