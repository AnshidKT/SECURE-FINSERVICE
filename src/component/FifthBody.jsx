import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { prodts, webpartnr } from "./Datas";
function FifthBody() {
  const products = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
  };
  return (
    <div>
      <div className="fifth-body">
        <div className="forth-sub-div">
          <div className="bill-text-div">
            <h3 className="bill-h3">Prodects for you</h3>
            <Link to="./Card" className="nav-card-link">
              <h4 className="viewall-h4">View All </h4>
            </Link>
          </div>

          <Carousel className="lyfstyle-caro" responsive={products}>
            {prodts.map((items) => (
              <Link to="./Card" className="nav-card-link">
                <div className="lystyle-box">
                  <img src={items.img} className="lyfstyle-img" />
                  <h4 className="lyfstyle-h4">{items.text}</h4>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
        <div className="forth-sub-div">
          <div className="bill-text-div">
            <h3 className="bill-h3">Web partners</h3>
          </div>
          <div className="web-partne-row-div">
            {webpartnr.map((items) => (
              <Link to="./Card" className="nav-card-link">
                <div className="webprtnr-box">
                  <img src={items.img} className="webprtnr-img" />
                  <h4 className="lyfstyle-h4">{items.text}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthBody;
