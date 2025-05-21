import "./modal.scss";
import PropTypes from "prop-types";

export default function Modals({
  header = <div> header</div>,
  body = <div> body</div>,
  footer = <div> footer</div>,
  width = "200px",
  height = "200px",
}) {
  return (
    <div className="modal">
      <div className="modal-container" style={{ width: width, height: height }}>
        <div className="modal-header">{header}</div>
        <div className="modal-body">{body}</div>
        <div className="modal-footer">{footer}</div>
      </div>
    </div>
  );
}

Modals.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
};
