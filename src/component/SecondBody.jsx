import React from "react";
import { corousle, frstbaja, scndadd, scndelectronic } from "./Datas";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

function SecondBody() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  };
  const electro = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
  };

  return (
    <div>
      <div className="scnd-body">
        <div className="scnd-sub1-body">
          <Carousel className="scnd-adds-caro" responsive={responsive}>
            {scndadd.map((items) => (
              <Link to="./Card" className="nav-card-link">
                <img src={items.img} className="scnd-add-img" />
              </Link>
            ))}
          </Carousel>
          <div className="scnd-electronics">
            <div className="bill-text-div">
              <h3 className="bill-h3">Electronics on EMI</h3>
              <Link to="./Card" className="nav-card-link">
                <h4 className="viewall-h4">Explore</h4>
              </Link>
            </div>
            <Carousel className="scnd-elctro-caro" responsive={electro}>
              {scndelectronic.map((items) => (
                <Link to="./Card" className="nav-card-link">
                  <div className="scnd-elctro-box">
                    <img src={items.img} className="scnd-elctro-img" />
                    <p className="scnd-elctro-p">{items.text}</p>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="scnd-sub2-body">
          <div className="knowmore-div">
            <img
              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/savdhan-rahein?scl=1&fmt=png-alpha"
              className="tick-icon"
            />
            <h3 className="knowmore-div-h3">Savdhaan Rahein. Safe Rahein</h3>
            <p className="knowmore-div-p">
              Beware of fraud calls/ SMSes/ emails/ fake online and print ads.
              Bajaj Finance never asks for advance payments for providing loans.
              <br />
              <a href="">
                <Link className="knowmore-link" to="./Card">
                  {" "}
                  Know more
                </Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondBody;
