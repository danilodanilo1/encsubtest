import React, { useState } from "react";
import "./style.css";
import eyeOpened from "../../assets/eyeOpened.png";
import eyeClosed from "../../assets/eyeClosed.png";

export default function Input({ placeholder, value, onChange, type, minLength }) {
  const [isEyeOpened, setIsEyeOpened] = useState(true);
  const Eye = () => {
    return (
      <img
        className="img"
        src={isEyeOpened ? eyeOpened : eyeClosed}
        onClick={() => setIsEyeOpened(!isEyeOpened)}
      />
    );
  };
  return (
    <div className="wrapper-input">
      <input
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={ type === "password" && isEyeOpened ? "password" : "text"}
        minLength={minLength || ""}
      />

      {type === "password" && (
        <div className="wrapper-image">
          <Eye />
        </div>
      )}
    </div>
  );
}
