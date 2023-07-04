import React from "react";
import loginimg from "./imgss/Screenshot (23).png";
import cross from "./imgss/icons8-cross-30.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="Login">
        <img src={loginimg} className="login-img" />
        <div className="login-box">
          <div className="login-sub1-box">
            <div className="login-sub1-heading">
              <span className="login-sub1-span1">MY ACCOUNT</span>
              <span className="login-sub1-span2">
                Here’s what we have in store for you:
              </span>
            </div>
            <div className="login-sub1-text">
              <img
                src="	https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/blue-bulb?scl=1&fmt=png-alpha"
                className="login-blb"
              />
              <div className="login-sub1-h1-box">
                <span className="login-sub1-box-span1">
                  Pre-approved offers
                </span>
                <span className="login-sub1-box-span">
                  Get personalised offers on loans, cards, etc.
                </span>
              </div>
            </div>
            <div className="login-sub1-text">
              <img
                src="https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/red-bulb?scl=1&fmt=png-alpha"
                className="login-blb"
              />
              <div className="login-sub1-h1-box">
                <span className="login-sub1-box-span1">Downloads</span>
                <span className="login-sub1-box-span">
                  Download statements, NOCs and other related documents
                </span>
              </div>
            </div>
            <div className="login-sub1-text">
              <img
                src="	https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/yellow-bulb?scl=1&fmt=png-alpha"
                className="login-blb"
              />
              <div className="login-sub1-h1-box">
                <span className="login-sub1-box-span1">Payments</span>
                <span className="login-sub1-box-span">
                  Pay bills or part-prepay your loan without hassles
                </span>
              </div>
            </div>
          </div>

          <div className="login-sub2-box">
            <div className="register-div">
              <h1 className="register-h1">
                {" "}
                Register or Sign-in to My AccountRegister{" "}
              </h1>
              <Link to={"/"}>
                <img src={cross} className="login-cross" />
              </Link>
            </div>
            <div className="selct-text-p-div">
              <p className="login-select-p">
                Select an account type to proceed
              </p>
            </div>
            <div className="login-indivual-div">
              <div className="indivdal-div">
                <h5 className="indvdal-h5">individual</h5>
              </div>
              <h5 className="indvdal-h4"> Corporate/Business</h5>
              <h5 className="indvdal-h4">NIR</h5>
            </div>
            <div className="login-no-div">
              <input
                type="text"
                className="login-inpuut"
                placeholder="Mobile Number"
              />
              <h6 className="log-input-text">
                Enter your 10-digit mobile number
              </h6>
            </div>
            <input type="button" className="log-sumt-bt" value="GET OTP " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
