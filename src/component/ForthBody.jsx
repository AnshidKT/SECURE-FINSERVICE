import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { lyfestyle, wheels } from "./Datas";

function ForthBody() {
  const lyfstyle = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
  };
  return (
    <div>
      <div className="ForthBody">
        <div className="forth-sub-div">
          <div className="bill-text-div">
            <h3 className="bill-h3">Lifestyle Products on EMI</h3>
            <Link to="./Card" className="nav-card-link">
              <h4 className="viewall-h4">Explore </h4>
            </Link>
          </div>

          <Carousel className="lyfstyle-caro" responsive={lyfstyle}>
            {lyfestyle.map((items) => (
              <Link to="./Card" className="nav-card-link">
                <div className="lyfstyle-box">
                  <img src={items.img} className="scnd-elctro-img" />
                  <p className="scnd-elctro-p">{items.text}</p>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>

        <div className="forth-sub-div">
          <div className="bill-text-div">
            <h3 className="bill-h3">Two Wheeler Loan</h3>
            <Link to="./Card" className="nav-card-link">
              <h4 className="viewall-h4">Explore </h4>
            </Link>
          </div>
          <div className="wheels-row-div">
            {wheels.map((items) => (
              <Link to="./Card" className="nav-card-link">
                <div className="wheels-box">
                  <img src={items.img} className="scnd-elctro-img" />
                  <p className="scnd-elctro-p">{items.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="frthbody-add-div">
          <img
            src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/herobanner-v3?scl=1&fmt=png-alpha"
            className="frthbody-add-img"
          />
          <img
            src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/locater-banner?scl=1&fmt=png-alpha"
            className="frthbody-add-img"
          />
        </div>
      </div>
    </div>
  );
}

export default ForthBody;
