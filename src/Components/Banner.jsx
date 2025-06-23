import React from "react";
import Threads from "./Threads";
import ModelViewer from "./ModelViewer";

const Banner = () => {
  return (
    <>
      <div className="bannerSection">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
        <div className="Banner">
          <div className="Banner-text">
            {/* <h1>a  Digital Craft Studio</h1> */}
            <h1> Designing Digital DNA</h1>
          </div>
          <div className="Banner-model">
          {/* <ModelViewer/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
