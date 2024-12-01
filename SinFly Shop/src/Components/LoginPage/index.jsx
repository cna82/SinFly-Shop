// Login Page using react-hook-form
import { Helmet } from "react-helmet";
import classes from "./index.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Login from "../Login";
import SignUp from "../SignUp";

const LoginPage = () => {
  // states , classes and useForm
  const [isShown, setIsShown] = useState("hide");
  const [loginOrSignUpState, setLoginOrSignUpState] = useState("login");
  const { showIcon } = classes;
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  // JS functions
  const handleShowPass = () => {
    isShown === "hide" ? setIsShown("show") : setIsShown("hide");
  };
  const onSubmit = (data) => {
    console.log(data);
    reset();
    Swal.fire({
      title: " Will be Posted to Back-end",
      html: `
     ${
       data.fullName !== undefined
         ? `<p>Full Name : ${data?.fullName}</p> <p>Phone Number : ${data?.phoneNumber}</p> `
         : ""
     }
      <p>Email Address : ${data?.emailAddr}</p>
      <p>Password : ${data?.password}</p>
      `,
      icon: "success",
    });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SinFly | Login or SignUp</title>
      </Helmet>

      <section style={{ backgroundColor: "#dadada" }}>
        <div className="container p-5 ">
          <div className="row d-flex justify-content-center align-items-end ">
            <div className="col col-xl-11 ">
              <div
                className="card"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0 0 15px 8px #84505b",
                }}
              >
                <div className="row gap-5">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid h-100"
                      loading="lazy"
                      style={{ borderRadius: " 1rem 0 0 1rem" }}
                    />
                  </div>
                  {loginOrSignUpState === "login" ? (
                    <Login
                      onSubmit={onSubmit}
                      onHandleSubmit={handleSubmit}
                      register={register}
                      errors={errors}
                      isShown={isShown}
                      showIcon={showIcon}
                      onHandleShowPass={handleShowPass}
                      onLoginOrSignUpState={setLoginOrSignUpState}
                    />
                  ) : (
                    <SignUp
                      onSubmit={onSubmit}
                      onHandleSubmit={handleSubmit}
                      register={register}
                      errors={errors}
                      isShown={isShown}
                      showIcon={showIcon}
                      onHandleShowPass={handleShowPass}
                      onLoginOrSignUpState={setLoginOrSignUpState}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginPage;
