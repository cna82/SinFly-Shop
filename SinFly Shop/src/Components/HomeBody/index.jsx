// Home Body Section
// Imports
import { Link } from "react-router-dom";
import classes from "./index.module.css";
const HomeBody = () => {
  const { textHome } = classes;
  return (
    <>
      <div className="container-fluid d-flex justify-content-between py-4">
        <div className=" d-flex flex-column justify-content-center px-5">
          <h5 className="  mx-5 fw-bold text-danger">
            BEST DESTINATIONS AROUND THE WORLD
          </h5>
          <img
            src="./Images/Body/travel text.png"
            alt=""
            width="380"
            className={textHome}
            loading="lazy"
          />
          <p
            className="fw-bold mt-4  px-5"
            style={{
              width: "80%",
              lineHeight: "1.8rem !important",
            }}
          >
            Don't waste your time ! You can buy your tickets online from SinFly
            right now ! as easy as drinking water !!
          </p>
          <div className="w-100  px-5">
            <Link
              to="/Destinations"
              className="btn btn-outline-success  px-3 mt-3 mx-2"
            >
              Buy Tour now <i className="fa fa-ticket" aria-hidden="true"></i>
            </Link>
            <Link to="/Login" className="btn btn-outline-primary  px-3 mt-3 ">
              Haven't registered yet?{" "}
              <i className="fa fa-sign-in" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="px-3">
          <img
            src="./Images/Body/woman intro.png"
            alt=""
            width="700rem"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default HomeBody;
