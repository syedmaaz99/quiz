import React from "react";
import appLogo from "../assets/app-logo-footer.png";
const Footer = () => (
  <footer className="bg-blue-600 text-white p-4 mt-auto h-[300px]">
    <div className="container w-[70%] mx-auto mt-12 bg-blue-600 ">
      <div className="row">
        <div className="col">
          <img
            src={appLogo}
            alt=""
            // style={{ height: "75px", width: "234px", "!important": true }}
          />
        </div>
        <div className="flex w-full mx-auto justify-between mt-6">
          <div className="">
            {" "}
            <p>© 2024 Pixelsoft Ltd</p>
            <p>Terms and conditions</p>
            <p>Privacy policy</p>
          </div>
          <div>
            {" "}
            <p>Pixelsoft Ltd</p>
            <p>71-75 Shelton Street</p>
            <p>Covent Garden</p>
            <p>London</p> <p>WC2H 9JQ</p>
          </div>
          <div>
            {" "}
            <p>About Pixelsoft</p>
            <p>Contact us</p>
            <p>Forgot password?</p>
            <p>Work with us</p>{" "}
          </div>
          <div>
            {" "}
            <p>MRCP UK Examinations guidance</p>
            <p>MRCGP AKT examination guidance</p>
            <p>MSRA exam guidance</p>
            <p>UK Medical School Alliance</p> <p>SJT guidance</p>
            <p>PSA guidance</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
