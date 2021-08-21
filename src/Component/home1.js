import React from "react";
import "../App.css";
import "animate.css";
import image1 from "../images/image1.png";

const Home1 = () => {
  return (
    <div className="welcome container">
      <div className="row pb-4">
        <div className="col-lg-6 col-12">
          <div className="text-center para pt-4">
            <h4 className="py-4 fw-bold text-justify">
              Welcome to Lets Grow More Internship
            </h4>
            <p className="text-muted text-justify">
              LetsGrowMore is a ground-based organisation that aims at building
              the future through nourishing the present. We at LetsGrowMore
              believe in making our youth especially the students self-aware and
              exploring the untouched world of technology and tremendous
              growth-making fields and our belief finally took us where we are
              standing today. Today we are an officially MSME registered
              start-up with nearly 100+ people working under the same
              establishment.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="text-center">
            <img
              src={image1}
              className="img-fluid animate__animated animate__pulse animate__delay-1s animate__infinite	infinite"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
