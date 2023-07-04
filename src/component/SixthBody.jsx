import React from "react";
import { onlinepartner, prtntnroffr } from "./Datas";
import { Link } from "react-router-dom";

function SixthBody() {
  return (
    <div>
      <div className="SixthBody">
        <div className="partnr-offer-div">
          <div className="partnr-offer-text-div">
            <h3 className="bill-h3">Web partners offers</h3>
            <h5 className="partnr-offer-text-h4">
              Get attractive discounts in a few clicks
            </h5>
          </div>
          <div className="partnr-offer-row-div">
            {prtntnroffr.map((item) => (
              <Link to="./Card">
                <img src={item.img} className="partnr-offer-img" />
              </Link>
            ))}
          </div>
        </div>
        <div className="online-partnr-div">
          <div className="bill-text-div">
            <h3 className="bill-h3">Online Partners</h3>
            <Link to="./Card" className="nav-card-link">
              <h4 className="viewall-h4">View All </h4>
            </Link>
          </div>

          <div className="onlin-partne-row-div">
            {onlinepartner.map((items) => (
              <Link to="./Card" className="nav-card-link">
                <div className="onlin-prtnr-box">
                  <img src={items.img} className="onlin-prtnr-img" />
                  <h4 className="onlin-prtnr-h4">{items.text}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixthBody;
