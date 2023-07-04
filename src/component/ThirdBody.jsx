import React from "react";
import { Link } from "react-router-dom";
import { health, insurence, investmnt } from "./Datas";

function ThirdBody() {
  return (
    <div>
      <div className="ThirdBody">
        <div className="thrd-sub1-div">
          <div className="insurence-div">
            <div className="bill-text-div">
              <h3 className="bill-h3">Insurence Bazar</h3>
              <Link to="./Card" className="nav-card-link">
                <h4 className="viewall-h4">Explore</h4>
              </Link>
            </div>
            <div className="insurence-row-div">
              {insurence.map((item) => (
                <Link to="./Card" className="nav-card-link">
                  <div className="insurence-box">
                    <img src={item.img} className="insurence-box-img" />
                    <h3 className="insurence-box-p">{item.text}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="insurence-div">
            <div className="bill-text-div">
              <h3 className="bill-h3">Investment Bazar</h3>
              <Link to="./Card" className="nav-card-link">
                <h4 className="viewall-h4">View All</h4>
              </Link>
            </div>
            <div className="insurence-row-div">
              {investmnt.map((item) => (
                <Link to="./Card" className="nav-card-link">
                  <div className="insurence-box">
                    <img src={item.img} className="insurence-box-img" />
                    <h3 className="insurence-box-p">{item.text}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="health-div">
          <div className="bill-text-div">
            <h3 className="bill-h3">Health Bazar</h3>
            <Link to="./Card" className="nav-card-link">
              <h4 className="viewall-h4">View All</h4>
            </Link>
          </div>
          <div className="health-row-div">
            {health.map((item) => (
              <Link to="./Card" className="nav-card-link">
                <div className="insurence-box">
                  <img src={item.img} className="insurence-box-img" />
                  <h3 className="insurence-box-p">{item.text}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdBody;
