import "./box.scss";

export default function Box({
  width,
  height,
  color,
  header,
  content,
  footer,
  style = {},
}) {
  const boxStyle = {
    width,
    height,
    backgroundColor: color,
    ...style,
  };

  return (
    <div className={`box`} style={boxStyle}>
      {header && <div className="box-header">{header}</div>}
      <div className="box-content">{content}</div>
      {footer && <div className="box-footer">{footer}</div>}
    </div>
  );
}
