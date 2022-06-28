import React from "react";
import "./style.css";

export default function Aside() {
  return (
    <div >
      <div className="wrapper-aside">
        <div className="div-steps">
          <p className="steps">
            Step 1 of 3{" "}
            <span className="boll">
              • <span className="gray">• •</span>
            </span>
          </p>
        </div>
        <section className="section-aside">
          <h1>Dummy Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </div>
    </div>
  );
}
