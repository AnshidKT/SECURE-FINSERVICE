import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import cart from "./imgss/icons8-cart-50.png";
import card from "./imgss/icons8-magnetic-card-50.png";
import accnt from "./imgss/icons8-account-50 (1).png";
import englsh from "./imgss/icons8-english-to-arabic-24.png";
import menus from "./imgss/icons8-circled-menu-30.png";
import alert from "./imgss/icons8-doorbell-24.png";
import arrow from "./imgss/icons8-expand-arrow-50.png";

function NavBar() {
  return (
    <div>
      <div className="main-navbar">
        <div className="boot-main-nav">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4" className="bootstrp-nav-drpdown">
              <div className="menu-h5-div">
                <h5> MENU</h5>
              </div>
              <div className="menu-accnt-div">
                <img
                  src="https://e7.pngegg.com/pngimages/1022/99/png-clipart-computer-icons-login-user-user-login-black-area.png"
                  className="accnt-img"
                />
                <div className="accnt-sub-div">
                  <h6 className="accnt-h6">My Account</h6>
                  <p className="accnt-p">
                    Make loan payments,drodown funds,explore personalized offers
                    earn rewards and more
                  </p>
                </div>
              </div>
              <div className="menu-cmpnys-div">
                <img
                  src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/our-companies-v4?scl=1&fmt=png-alpha"
                  className="cmpny-icon"
                />
                <div className="cmpnys-sub-div">
                  <h6 className="cmpnys-h6">Our companies</h6>
                  <h5 className="cmpnys-p">learn more about our companies</h5>
                </div>
              </div>
              <div className="menu-cmpnys-div">
                <img
                  src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/help-and-support-v1-4?scl=1&fmt=png-alpha"
                  className="cmpny-icon"
                />
                <div className="cmpnys-sub-div">
                  <h6 className="cmpnys-h6">Help and support</h6>
                  <h5 className="cmpnys-p">
                    Rice a query find answer to you questions
                  </h5>
                </div>
              </div>
              <div className="menu-cmpnys-div">
                <img
                  src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/pay-your-emi-v4?scl=1&fmt=png-alpha"
                  className="cmpny-icon"
                />
                <div className="cmpnys-sub-div">
                  <h6 className="cmpnys-h6">Pay your dues</h6>
                  <h5 className="cmpnys-p">check your over view amount</h5>
                </div>
              </div>
              <div className="menu-cmpnys-div">
                <img
                  src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/locate-us-grey?scl=1&fmt=png-alpha"
                  className="cmpny-icon"
                />
                <div className="cmpnys-sub-div">
                  <h6 className="cmpnys-h6">My rewards</h6>
                  <h5 className="cmpnys-p">
                    the all the rewards that you have{" "}
                  </h5>
                </div>
              </div>
              <div className="menu-cmpnys-div">
                <img
                  src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/check-pre-approved-offers-v4?scl=1&fmt=png-alpha"
                  className="cmpny-icon"
                />
                <div className="cmpnys-sub-div">
                  <h6 className="cmpnys-h6">Locate US</h6>
                  <h5 className="cmpnys-p">Find the bajaj finserve bracnch</h5>
                </div>
              </div>
            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark" id="bootstrp-nav">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <Link to="./">
                <img
                  src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/bfl-logo-desktop-v6?scl=1&fmt=png-alpha"
                  className="bajaj-icon"
                />
              </Link>
              <div className="line"></div>
              <div className="nav-search-div">
                <input
                  type="text"
                  className="nav-search-input"
                  placeholder="Search bajajfinserv.in "
                />
                <div className="line2"></div>
                <img
                  src="https://img.icons8.com/?size=512&id=132&format=png"
                  className="search-icon"
                />
              </div>
              <div className="line"></div>
              <Link to="./Card" className="nav-card-link">
                <div className="emi-div">
                  <img src={card} className="nav-card-icons" />
                  <h5 className="nav-icons-h5">EMI Card</h5>
                </div>
              </Link>
              <Link to="./Card" className="nav-card-link">
                <div className="alert-div">
                  <img src={alert} className="nav-card-icons" />
                  <h5 className="nav-icons-h5">Alert Message</h5>
                </div>
              </Link>
              <Link to="./Card" className="nav-card-link">
                <div className="cart-div">
                  <img src={cart} className="nav-card-icons" />
                  <h5 className="nav-icons-h5">Cart</h5>
                </div>
              </Link>

              <div className="login-div">
                <img src={accnt} className="nav-card-icons" />

                <div className="login-text-arrow">
                  <h5 className="nav-icons-h5">My Account</h5>{" "}
                  <img src={arrow} className="dropdown-icon" />
                </div>
                <div className="dropdown-login">
                  <div className="login-hover-bt">
                    <div className="login-bt-div">
                      <Link to="./Login" className="login-bt">
                        <h2 className="sign-bt"> SIGN-IN</h2>
                      </Link>
                    </div>
                    <h3 className="sigh-bt-h3">View loan deatails</h3>
                    <h3 className="sigh-bt-h3">Raise a request</h3>
                    <h3 className="sigh-bt-h3">Update contact details</h3>
                    <h3 className="sigh-bt-h3">View payment report </h3>
                  </div>{" "}
                </div>
              </div>

              <Link to="./Card" className="nav-card-link">
                <div className="english-div">
                  <img src={englsh} className="nav-card-icons" />
                  <h5 className="nav-icons-h5">English</h5>
                </div>
              </Link>
              <Link to="./Card" className="nav-card-link">
                <div className="partners-div">
                  <img src={menus} className="nav-card-icons" />
                  <h5 className="nav-icons-h5">Partners</h5>
                </div>
              </Link>
            </div>
          </nav>
        </div>
        <div className="secnd-nav">
          <div className="nav-hover-div">
            <div className="dropdown1">
              <h6 className="drop-p">Loans</h6>
              {/* <div className="line"></div> */}
              <img src={arrow} className="dropdown-icon" />
              <div className="dropdown-content-1">
                <Link to="./Card">
                  <button className="nav-hover-bt">All loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Personal loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Insta personal loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Business loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Gold loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Loans for doctors</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">
                    Medical equipment finance
                  </button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Loan for CAs</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Home loans</button>{" "}
                </Link>
              </div>
            </div>

            <div className="dropdown2">
              <p className="drop-p">All on EMI</p>
              <img src={arrow} className="dropdown-icon1" />
              <div className="dropdown-content-2">
                <Link to="./Card">
                  <button className="nav-hover-bt">Electronies</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Two-wheelers</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Lifestyle </button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">travel</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">
                    Offers and promotions{" "}
                  </button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Shop on ecommerce</button>{" "}
                </Link>
              </div>
            </div>
            <div className="dropdown3">
              <p className="drop-p">Bajaj mall</p>
              <img src={arrow} className="dropdown-icon1" />
              <div className="dropdown-content-3">
                <Link to="./Card">
                  <button className="nav-hover-bt">Air conditiones </button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Smart phones</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Air cooler</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Business loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Gold loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Loans for doctors</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">
                    Medical equipment finance
                  </button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Loan for CAs</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Home loans</button>{" "}
                </Link>
              </div>
            </div>

            <div className="dropdown4">
              <p className="drop-p">Cards</p>
              <img src={arrow} className="dropdown-icon1" />
              <div className="dropdown-content-4">
                <Link to="./Card">
                  <button className="nav-hover-bt">All cards</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Insta EMI</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">
                    Health EMI network card
                  </button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Bajaj finserv</button>{" "}
                </Link>
              </div>
            </div>

            <div className="dropdown5">
              <p className="drop-p">Inverstments</p>
              <img src={arrow} className="dropdown-icon1" />
              <div className="dropdown-content-5">
                <Link to="./Card">
                  <button className="nav-hover-bt">Gold loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Loans for doctors</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">
                    Medical equipment finance
                  </button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Loan for CAs</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Home loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Used car finance</button>{" "}
                </Link>
              </div>
            </div>

            <div className="dropdown6">
              <p className="drop-p">Insurence </p>
              <img src={arrow} className="dropdown-icon1" />
              <div className="dropdown-content-6">
                <Link to="./Card">
                  <button className="nav-hover-bt">Insurence mall</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Health insurence</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Car insurence</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Bike insurence</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Home insurence</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">humen insurence</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">
                    Medical equipment finance
                  </button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Loan for CAs</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Home loans</button>{" "}
                </Link>
              </div>
            </div>

            <div className="dropdown7">
              <p className="drop-p">Payments</p>
              <img src={arrow} className="dropdown-icon1" />
              <div className="dropdown-content-7">
                <Link to="./Card">
                  <button className="nav-hover-bt">Pay your EMI</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Download vallet</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Set the UPI</button>{" "}
                </Link>
              </div>
            </div>

            <div className="dropdown8">
              <p className="drop-p">Offers</p>
              <img src={arrow} className="dropdown-icon1" />
              <div className="dropdown-content-8">
                <Link to="./Card">
                  <button className="nav-hover-bt">All offers</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Bajaj loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Free concept</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Card offer</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Gold loans</button>{" "}
                </Link>
              </div>
            </div>

            <div className="dropdown9">
              <p className="drop-p">Locate US</p>
              <img src={arrow} className="dropdown-icon1" />
              <div className="dropdown-content-9">
                <Link to="./Card">
                  <button className="nav-hover-bt">Branche</button>
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">EMI collections</button>
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Insta personal loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Loan for CAs</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Home loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Used car finance</button>{" "}
                </Link>
              </div>
            </div>

            <div className="dropdown10">
              <p className="drop-p">Services</p>
              <img src={arrow} className="dropdown-icon1" />
              <div className="dropdown-content-10">
                <Link to="./Card">
                  <button className="nav-hover-bt">All Services</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Personal loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Insta personal loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Business loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Gold loans</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Loans for doctors</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">
                    Medical equipment finance
                  </button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Loan for CAs</button>{" "}
                </Link>
                <Link to="./Card">
                  <button className="nav-hover-bt">Home loans</button>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-feedback-div">
            <div className="feedback-subdiv">
              <img
                src="https://www.pngkey.com/png/full/83-839792_icon-feedback-feedback-icon-white-png.png"
                className="feedbck-icon"
              />
              <Link to="./Card" className="fdback-h5">
                <h5 className="fdback-h5">FeedBack</h5>
              </Link>
            </div>
            <div className="downld-app-div">
              <img
                src="https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-phone-cell-icon-png-image_889619.jpg"
                className="app-icon"
              />
              <Link to="./Card" className="fdback-h5">
                <h5 className="fdback-h5">Download the app</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default NavBar;
