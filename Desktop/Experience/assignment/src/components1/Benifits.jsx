import React from "react";
import benefit1 from "../assets/benefit1.png";
import benefit2 from "../assets/benefit2.png";
import benefit3 from "../assets/benefit3.png";

const Benefits = () => {
  return (
    <section className="benefit">
      <div className="container">
        <h1 className="abtus text-white">Key Benefits</h1>
        <div className="mt-5 row justify-content-between">
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
            <img
              src={benefit1}
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4 font-semibold text-2xl">
              24X7 English Tutor
            </h3>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
            <img
              src={benefit2}
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4 text-2xl font-semibold">
              Ask Questions Any Time
            </h3>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <img
              src={benefit3}
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4 font-semibold text-2xl">
              Progress Tracking
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
