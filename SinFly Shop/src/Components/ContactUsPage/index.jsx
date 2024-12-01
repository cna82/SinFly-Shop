// contact us page With Self validation on Email Address
// Imports
import { Helmet } from "react-helmet";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./index.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// React Component
const ContactUsPage = () => {
  // states , refs and variables
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const form = useRef();
  const {
    inputError,
    contactFirst,
    textarea,
    contactUsWrapper,
    contactContainer,
  } = classes;
  // JS functions
  const handleValidate = (e) => {
    const { value, name } = e.target;
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (name === "from_name") setNameValue(value);
    if (name === "message") setMessageValue(value);
    if (name === "from_email") {
      setInputValue(value);
      {
        !pattern.test(value) ? setHasError(false) : setHasError(true);
      }
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (hasError) {
      setInputValue("");
      setNameValue("");
      setMessageValue("");
      toast.success("💡 Successfully Sent !!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      emailjs
        .sendForm("service_pocvf36", "template_rw6fjhd", form.current, {
          publicKey: "26DK7EFT5so2Y1ja9",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      toast.error("Please Write Correct form !!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SinFly | Contact us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={contactUsWrapper}>
        <div className={` d-flex justify-content-end ${contactFirst}`}>
          <div className={contactContainer}>
            <div className=" m-auto mt-5 mb-5 w-75">
              Do you have any problem ? write your opinions and suggestions
              now...
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="d-flex justify-content-center align-items-center flex-column mt-5"
            >
              <div className="form-floating mb-3 w-75">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="from_name"
                  autoFocus
                  required
                  onChange={handleValidate}
                  value={nameValue}
                />
                <label htmlFor="floatingInput">Full name</label>
              </div>

              <div className="form-floating mb-3 w-75">
                <input
                  type="email"
                  className={`form-control ${
                    !hasError && inputValue.length > 0 ? `${inputError}` : ""
                  }`}
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="from_email"
                  onChange={handleValidate}
                  required
                  value={inputValue}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              {!hasError && inputValue.length > 0 && (
                <p className="text-danger">In correct email Address</p>
              )}
              <div className="form-floating w-75">
                <textarea
                  className={`form-control ${textarea}`}
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  name="message"
                  onChange={handleValidate}
                  required
                  value={messageValue}
                />
                <label htmlFor="floatingTextarea">
                  Write Your opinion about us...
                </label>
              </div>
              <input
                type="submit"
                value="Send Email "
                className="btn btn-success mt-3"
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactUsPage;
