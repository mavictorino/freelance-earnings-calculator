import React from "react";
import earnings from "../assets/earnings.jpg";
import "../App.css";

function About() {
  return (
    <div className="about">
      <div
        className="about-top"
        style={{ backgroundImage: `url(${earnings})` }}
      ></div>
      <div className="about-bottom">
        <h1>About This Project</h1>
        <p>
          This app was built to help freelancers track their earnings, manage
          work hours, and gain insights into their income—all in one simple and
          efficient tool.
        </p>
        <br></br>
        <p>
          Whether you're a part-time gig worker or a full-time freelancer,
          staying on top of your earnings is crucial. This calculator allows you
          to log your hourly rate, track daily work hours, and automatically
          calculate your total earnings over time.
        </p>
        <br></br>
        <p>
          The app is powered by React, with Ant Design components. Your earnings data is stored
          securely using Firebase, ensuring access from anywhere.
        </p>
        <br></br>
        <p>
          Future updates will include features like visual analytics, advanced
          filtering, and even tax estimations to help you better manage your
          freelance finances.
        </p>
        <br></br>
        <p>
          Take control of your freelance income—track, calculate, and optimize
          your earnings with ease!
        </p>
      </div>
    </div>
  );
}

export default About;
