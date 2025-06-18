import React from "react";
import { assets } from "../assets/assets";

const Clients = () => {
  return (
    <div className="clients-Section">
      <div className="clients-Heading">
        <h1>Trustees</h1>
      </div>
      <div className="clients">
        {/* {[assets.client1, assets.client2, assets.client3, assets.client4, assets.client5, assets.client6, assets.client7, assets.client8, assets.client9].map(
          (client, i) => (
            <div key={i} className="clientItem">
              <img src={client} alt={`client-${i + 1}`} />
            </div>
          )
        )} */}
        <div class="client-item">
          <div class="client-logo1 client-logo">
            <img src={assets.client1} alt="client1" />
          </div>
          <div class="client-logo2 client-logo">
            <img src={assets.client2} alt="client2" />
          </div>
          <div class="client-logo3 client-logo">
            <img src={assets.client3} alt="client3" />
          </div>
          <div class="client-logo4 client-logo">
            <img src={assets.client4} alt="client4" />
          </div>
          <div class="client-logo5 client-logo">
            <img src={assets.client5} alt="client5" />
          </div>
          <div class="client-logo6 client-logo">
            <img src={assets.client6} alt="client6" />
          </div>
          <div class="client-logo7 client-logo">
            <img src={assets.client7} alt="client7" />
          </div>
          <div class="client-logo8 client-logo">
            <img src={assets.client8} alt="client8" />
          </div>
          <div class="client-logo9 client-logo">
            <img src={assets.client9} alt="client9" />
          </div>
          <div class="client-logo10 client-logo">
            <img src={assets.client1} alt="client10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
