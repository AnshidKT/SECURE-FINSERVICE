import React from "react";
import { frstcard } from "../Datas";
import { Link } from "react-router-dom";
import Footer1 from "../Footer1";
import Footer2 from "../Footer2";
import Footer3 from "../Footer3";

function Card() {
  return (
    <div>
      <div className="frstCard">
        <div className="frstCard-new-loan-div">
          <div className="frstCard-sub-new-loan-div">
            <h3 className="frstCard-new-loan-h3">New Loan </h3>
            <h3 className="frstCard-new-loan-h4">Balance Transfer</h3>
          </div>
        </div>

        <div className="frstCard-home-loan-div">
          <div className="frstCard-sub1-home-loan">
            <img
              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/home-loan-30?scl=1&fmt=png-alpha"
              className="card-home-img"
            />
            <div className="frstcard-home-text">
              <h1 className="frstcard-home-h1">Home Loan</h1>
              <p className="frstcard-home-p">
                Interest rates starting from 8.50%* p.a. | Loan of Rs. 15 Crore*
                | Tenure of up to 40 years*.
              </p>
            </div>
          </div>

          <div className="frstCard-sub2-home-loan">
            <div action="" className="card-home-form">
              <h5 className="card-home-rs">Rs.15,00,00,000</h5>
              <h5 className="card-home-form-p">
                Enter a loan amount between Rs. 4 lakh to Rs. 15 crore*.
              </h5>
              <h5 className="card-home-form-p">
                *This amount is indicative. The final loan amount will vary
                based on your eligibility and submitted documents.
              </h5>
            </div>
            <button className="card-home-btt">APPLY NOW</button>
            <div className="two-link-add">
              <h5 className="card-home-linkkkk">
                By proceeding, you agree to our{" "}
              </h5>{" "}
              <Link to="/" className="nav-card-link">
                {" "}
                <p className="card-home-p-linkkkk">Terms and conditions</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="frstCard-seoson-div">
          <h2 className="frstCard-seoson-h2">
            6 reasons to choose our home loan
          </h2>
          <div className="frstcard-seoson-box">
            {frstcard.map((item) => (
              <div className="card-box1">
                <img src={item.img} className="card-box1-img" />
                <h4 className="card-box1-h4">{item.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="scndcard">
        <div className="scndcard-sub-div">
          <div className="scndcard-sub-box-div">
            <img
              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/Group-7?scl=1&fmt=png-alpha"
              className="scndcard-sub-box-bulb"
            />
            <div className="scndcard-sub-box-h4">
              <h3 className="scndcard-sub-h3">Did You Know?</h3>
              <h5 className="scndcard-sub-h5">
                You can avail of tax benefits on your home loan that can help
                you save on taxes.
              </h5>
            </div>
          </div>
          <div className="scndcard-sub-box-div">
            <img
              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/Group-7?scl=1&fmt=png-alpha"
              className="scndcard-sub-box-bulb"
            />
            <div className="scndcard-sub-box-h4">
              <h3 className="scndcard-sub-h3">Did You Know?</h3>
              <h5 className="scndcard-sub-h5">
                You can transfer your home loan to us and get additional benefit
                of top-up loan.
              </h5>
            </div>
          </div>
          <div className="scndcard-sub-box-div">
            <img
              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/Group-7?scl=1&fmt=png-alpha"
              className="scndcard-sub-box-bulb"
            />
            <div className="scndcard-sub-box-h4">
              <h3 className="scndcard-sub-h3">Did You Know?</h3>
              <h5 className="scndcard-sub-h5">
                You can calculate your EMIs by using our EMI calculator and plan
                better.
              </h5>
            </div>
          </div>
          <div className="scndcard-sub-box-div">
            <img
              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/Group-7?scl=1&fmt=png-alpha"
              className="scndcard-sub-box-bulb"
            />

            <div className="scndcard-sub-box-h4">
              <h3 className="scndcard-sub-h3">Did You Know?</h3>
              <h5 className="scndcard-sub-h5">
                A higher CIBIL Score will help you get better home loan interest
                rate.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
      <Footer3 />
    </div>
  );
}

export default Card;
