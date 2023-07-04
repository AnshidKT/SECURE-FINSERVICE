import React from "react";
import "./body.css";
import {
  frstEMI,
  frstbaja,
  frstcredit,
  frstloans,
  frstmobilebox,
} from "./Datas";
import { Link } from "react-router-dom";

function FirstCard() {
  return (
    <div>
      <div className="frst-body">
        <div className="frst-sub1-body">
          <div className="frst-bdy-carddiv">
            <div className="frstbody-loan-div">
              <h3 className="frstbody-loan-div-h3">Loans</h3>
              <div className="frstbody-loan-row-div">
                {frstloans.map((item) => (
                  <Link to="./Card" className="nav-card-link">
                    {" "}
                    <div className="frstbody-loan-persnaldiv">
                      <img src={item.img} className="frtsbody-prsnal-icon" />
                      <h6 className="frtsbody-prsnal-h6-1">{item.text}</h6>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="frstbody-emi-div">
              <h3 className="frstbody-loan-div-h3">EMI Network card</h3>
              <div className="frstbody-loan-row-div">
                {frstEMI.map((item) => (
                  <Link to="./Card" className="nav-card-link">
                    {" "}
                    <div className="frstbody-loan-persnaldiv">
                      <img src={item.img} className="frtsbody-prsnal-icon" />
                      <h6 className="frtsbody-prsnal-h6">{item.text}</h6>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="frstbody-credit-div">
              <h3 className="frstbody-loan-div-h3">Co-brand Credit card</h3>
              <div className="frstbody-loan-row-div">
                {frstcredit.map((item) => (
                  <Link to="./Card" className="nav-card-link">
                    {" "}
                    <div className="frstbody-loan-persnaldiv">
                      <img src={item.img} className="frtsbody-prsnal-icon" />
                      <h6 className="frtsbody-prsnal-h6">{item.text}</h6>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="frst-bdy-bill-div">
            <div className="bill-text-div">
              <h3 className="bill-h3">Bills & Recharge</h3>
              <Link to="./Card" className="nav-card-link">
                <h4 className="viewall-h4">View All</h4>
              </Link>
            </div>
            <div className="frst-bdy-bill-mobile-div">
              {frstmobilebox.map((item) => (
                <Link to="./Card" className="nav-card-link">
                  <div className="mobile-box-div">
                    <img src={item.img} className="mobile-icon" />
                    <h5 className="mobile-h4">{item.text}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="frst-sub2-body">
          <div className="superstores-div">
            <h3 className="bill-h3">Superstores</h3>
            {frstbaja.map((item) => (
              <div className="superstores-sub-div">
                <img src={item.img} className="frst-bajaj-icon" />
                <Link className="nav-card-link" to="./card">
                  {" "}
                  <h5 className="frst-bajaj-h4">{item.text}</h5>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;
