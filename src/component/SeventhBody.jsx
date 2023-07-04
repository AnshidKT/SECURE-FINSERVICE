import React from "react";
import { Link } from "react-router-dom";
import { clculatr, offr } from "./Datas";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SeventhBody() {
  const offffr = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  };

  return (
    <div>
      <div className="SeventhBody">
        <Link to="./Card" className="nav-card-link">
          <div className="savdhan-div">
            <img
              src="	https://cms-assets.bajajfinserv.in/is/image/bajajfinance/savdhan-v1?scl=1&fmt=png-alpha"
              className="savdhan-tick-icon"
            />
            <h4 className="savdhan-tick-h4">Savdhan Rahein ! Safe Rahein !</h4>
          </div>
        </Link>
        <div className="calculatrs-div">
          <h3 className="clacultr-h3">Calculators</h3>
          <div className="calultr-row-div">
            {clculatr.map((item) => (
              <div className="clultr-box">
                <img src={item.img} className="clultr-box-img" />
                <h5 className="clultr-box-h5">{item.text}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="offrs-foru-div">
          <h3 className="offrs-h3">Offers for you</h3>
          <div className="offrs-row-div">
            {offr.map((item) => (
              <div>
                <img src={item.img} className="offfr-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeventhBody;
