// About us page
// Imports
import { Helmet } from "react-helmet";
import "./aboutGlobal.css";
import { Link } from "react-router-dom";
// Reat Component
const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SinFly | About US</title>
      </Helmet>
      <div className="w-100" style={{ backgroundColor: "#e9e9e9" }}>
        <div className="responsive-container-block bigContainer">
          <div className="responsive-container-block Container bottomContainer">
            <div className="ultimateImg ">
              <img className="mainImg" src="./Images/AboutUs/8.png" />
              <div className="purpleBox">
                <p className="purpleText">+10K Online Reserve Per Day !</p>
                <p className="purpleText">
                  +3.5 Years Experience Of Marketing !{" "}
                </p>
                <p className="purpleText">+500K Followers In Social Medias !</p>
              </div>
            </div>
            <div className="allText bottomText">
              <p className="text-blk headingText">How it started</p>
              <p className="text-blk subHeadingText">
                The most reliable site for Buying aviation office tickets
              </p>
              <p className="text-blk description">
                An aviation office typically serves as the operational and
                administrative hub for aviation-related businesses. Here's a
                summary of its key features and functions: Administrative Area:
                Includes offices for management and staff, meeting rooms, and
                workstations equipped with computers and communication tools.
              </p>
              <span class="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-3 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300 mb-3">
                Do You Have Any Problem ?
              </span>
              <Link to="/ContactUs" className="explore text-decoration-none">
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
