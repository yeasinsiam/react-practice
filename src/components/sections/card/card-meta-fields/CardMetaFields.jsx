import React from "react";

const CardMetaFields = ({ title, name, value, setCardMetaData }) => {
  const [show, setShow] = React.useState(false);
  return (
    <tr>
      <td></td>
      <td className="tfoot-green-text" onClick={() => setShow(true)}>
        {title}
      </td>
      <td colSpan={2} style={{ visibility: !show ? "hidden" : "visible" }}>
        <input
          className="form-input"
          type="number"
          min="0"
          value={value}
          onChange={(e) => setCardMetaData(name, e.target.value)}
          style={{ textAlign: "right" }}
        />
      </td>
      <td style={{ visibility: !show ? "hidden" : "visible" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 64 64"
          className="cross-svg-icon"
          onClick={() => {
            setShow(false);
            setCardMetaData(name, 0);
          }}
        >
          <line
            x1="9.37"
            x2="54.63"
            y1="9.37"
            y2="54.63"
            fill="none"
            stroke="#010101"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <line
            x1="9.37"
            x2="54.63"
            y1="54.63"
            y2="9.37"
            fill="none"
            stroke="#010101"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
        </svg>
      </td>
    </tr>
  );
};

export default CardMetaFields;
