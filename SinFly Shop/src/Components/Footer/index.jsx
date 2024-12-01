// Footer Section
// Imports
import classes from "./index.module.css";
// React Component
const Footer = () => {
  // variables
  const { myBg, myBorder } = classes;
  return (
    <>
      <footer className={` footer py-4 px-3 w-100 ${myBg}  `}>
        <div className={`container-fluid`}>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center px-2 flex-column">
              <h5>Where are we?</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207133.421542962!2d51.66368007659909!3d35.78864600962154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07db0705bbe9%3A0x8b7c5ce4afa9107d!2z2YXYrNiq2YXYuSDZgdmG24wg2KrZh9ix2KfZhg!5e0!3m2!1sfa!2s!4v1730562189159!5m2!1sfa!2s"
                width="50%"
                height="180"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`${myBorder} rounded  `}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4  ">
              <span>
                <i className="fa fa-phone"></i>
                &nbsp; Tel:+98 991-297-7935
              </span>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <h6 className="d-inline mx-2">Made by : SINA RAHIMI &copy;</h6>
            </div>
            <div className={`col-md-4 `}>
              <ul className="list-inline footer-links d-flex justify-content-center gap-3 ">
                <li className="list-inline-item">
                  <a
                    href="https://facebook.com/cna_.rh"
                    className="text-dark"
                    target="_blank"
                  >
                    <i className="fa fs-5 fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/cna82"
                    className="text-dark"
                    target="_blank"
                  >
                    <i className="fa fs-5 fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.x.com/cn82a"
                    className="text-dark"
                    target="_blank"
                  >
                    <i className="fa fs-5 fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/cna_.rh"
                    className="text-dark"
                    target="_blank"
                  >
                    <i className="fa fs-5 fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/cn82a"
                    target="_blank"
                    className="text-dark"
                  >
                    <i className="fa fs-5 fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
