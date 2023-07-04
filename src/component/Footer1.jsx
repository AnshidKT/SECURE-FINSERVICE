import React from 'react'
import { Link } from 'react-router-dom'

function Footer1() {
  return (
    <div>
      <div className="Footer1">
        <h3 className="footer1-h3">Application Forms</h3>
        <div className="sub-footer1">
          <div className="sub-row-footer1">
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Personal loan</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Bajaj finserv</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Fixed deposit</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">New car fiance</h5>
            </Link>
          </div>
          <div className="sub-row-footer1">
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Business loan</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Insta EMI card</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Loan against property</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Used car finance</h5>
            </Link>
          </div>
          <div className="sub-row-footer1">
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Home loan</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Wallet care</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Loan for charectred accounts</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Loan against a care</h5>
            </Link>
          </div>
          <div className="sub-row-footer1">
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Gold loan</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Health isurence</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Open demate account</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Car loan balance transfer top up</h5>
            </Link>
          </div>
          <div className="sub-row-footer1">
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Bajaj finance</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Loan for doctors</h5>
            </Link>
            <Link to="/Card" className="link-footer1">
              <h5 className="link-footer1">Two wheeler-loan</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer1