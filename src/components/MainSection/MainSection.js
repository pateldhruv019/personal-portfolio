import React from "react";
import { Link } from "react-router-dom";
import Dhruv from "../../images/Dhruv.png";
import ReactLogo from "../../images/react.png";
import NodeLogo from "../../images/node.png";
import MysqlLogo from "../../images/mysql.png";
import { Progress, Stack } from "@chakra-ui/react";

const MainSection = () => {
  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/pateldhruv046", "_blank");
  };
  return (
    <>
      <div className="custom-row row">
        <style>
          {`@import
          url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');`}
        </style>

        {/* Left Section */}
        <div className="left-section col-md-6 bg-light">
          <div className="left-content">
            <div className="left-heading fw-bolder px-5 pt-5">
              Hi! I Am{"  "}
              <button className="btn occupation-button">
                Full Stack Developer
              </button>
              <br />
              Dhruvkumar Patel
            </div>
            <div className="left-description px-5 pt-3">
              Experienced <b>Full Stack Developer</b> proficient in ReactJS,
              Node.js, and MySQL. Strong in server-side logic and database
              management. Committed to delivering high-quality code and
              collaborating with cross-functional teams.
            </div>
            <div className="left-button px-5 pt-5">
              <button className="btn resume-button">Download CV</button>
              <Link
                className="btn ms-4 linkedin-button"
                onClick={openLinkedInProfile}
              >
                Open LinkedIn
              </Link>
            </div>
            <div className="project-number px-5 pt-5">+3</div>
            <div className="project-details px-5 pt-2">
              <Link to="/projects">Live Projects</Link>
            </div>
            <div className="contact-heading px-5 pt-4">Contact</div>
            <div className="contact-details px-5 pt-2">
              pateldhruv046@gmail.com
            </div>
            <div className="bg-dark mt-3 px-5 py-5 text-light fw-bold">
              <Stack spacing={5}>
                <div class="row">
                  <div class="col-md-2">JavaScript</div>
                  <div class="col-md-8">
                    <Progress colorScheme="red" height="25px" value={80} />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">ReactJs</div>
                  <div class="col-md-8">
                    <Progress colorScheme="blue" height="25px" value={75} />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">NodeJs</div>
                  <div class="col-md-8">
                    <Progress colorScheme="green" height="25px" value={50} />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">MySQL</div>
                  <div class="col-md-8">
                    <Progress colorScheme="yellow" height="25px" value={80} />
                  </div>
                </div>
              </Stack>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="right-section col-md-6 d-flex flex-column justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${Dhruv})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <img className="profile-img" src={Dhruv} alt="No"></img> */}
          <img className="react-logo" src={ReactLogo} alt="No"></img>
          <img className="node-logo" src={NodeLogo} alt="No"></img>
          <img className="mysql-logo" src={MysqlLogo} alt="No"></img>
        </div>
      </div>
    </>
  );
};

export default MainSection;
