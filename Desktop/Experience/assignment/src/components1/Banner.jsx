import React from "react";
import banner1 from "../assets/banner1.png"; // Import the image
import googlePlay from "../assets/googleplay.png"; // Import the image
import qr from "../assets/qr.png"; // Import the image
import banner_img from "../assets/banner.jpg"; // Import the image

const Banner = () => {
  return (
    <div className="container mt-5 mb-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12 mt-2 mb-2">
          <div className="container1">
            <img
              src={banner1}
              alt="banner_img_left"
              className="img-fluid container__image"
              width="55px"
            />
            <div className="container__text">
              <h4 className="mb-0 text-xl font-bold">Simply English AI</h4>
              <p>Your Gateway to Success!</p>
            </div>
          </div>
          <h4 className="unl mt-4 text-xl">
            Unlock 1 Billion Dreams <br />
            With Our AI Driven English Learning APP
          </h4>
          <ul className="mt-4 mb-4 pl-4 headul">
            <li>Elevate Your Language Skills for Interviews and Exams</li>
            <li>Powered by Advanced AI Technology</li>
            <li>Future of Education, Right at Your Fingertips</li>
          </ul>
          <div className="flex flex-row align-items-center justify-items-center">
            <a href="#">
              <img src={googlePlay} alt="qr-img" className="img-fluid" />
            </a>
            <img src={qr} alt="qr-img" width="100px" className="img-fluid" />
          </div>
            
          <div className="social mt-4 flex flex-row gap-1">
            <a href="">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 mt-2 mb-2">
          <img src={banner_img} alt="banner-img" className="img-fluid w-100" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
