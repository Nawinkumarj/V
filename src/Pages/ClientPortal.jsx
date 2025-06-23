import React from "react";
import { assets } from "../assets/assets";

const ClientPortal = () => {
  return (
    <div className="clientPortal">
      <div className="client-heading">
        <h1>Our Trustees</h1>
      </div>
      <div className="client-section">
        <div className="client-item">
            <div className="client-img">
            <img src={assets.client1} alt="" />
            </div>
            <div className="client-info">
                <h1>Avinya Construction</h1>
                <p>Website</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
