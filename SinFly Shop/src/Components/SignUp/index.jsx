// React component 
const SignUp = ({
  onSubmit,
  onHandleSubmit,
  register,
  errors,
  isShown,
  showIcon,
  onHandleShowPass,
  onLoginOrSignUpState,
}) => {
  // Js functions 
  const handleLogin = () => {
    onLoginOrSignUpState("login");
  };
  return (
    <>
      <div className="col-md-6 col-lg-6 d-flex align-items-center justify-content-center fs-6 ">
        <div className="card-body p-4 p-lg-5 text-black">
          <form onSubmit={onHandleSubmit(onSubmit)}>
            <div className="d-flex align-items-center  pb-1">
              <i
                className="fa fa-cubes fa-2x me-3"
                style={{ color: "#ff6219" }}
              ></i>
              <span className="h1 fw-bold mb-0">SinFly</span>
            </div>

            <h5
              className="fw-normal mb-3 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Sign up now
            </h5>
            <div className="form-floating mb-3 w-100">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Phone Number"
                name="from_phone_number"
                autoFocus
                {...register("phoneNumber", {
                  required: `Please Fill This Field `,
                  pattern: /989[0-9]{9}/,
                })}
              />
              <label htmlFor="floatingInput" className="opacity-50">
                Phone Number
              </label>
              {errors.phoneNumber && (
                <p className="mt-2 text-danger">
                  {errors.phoneNumber.message}
                  {errors.phoneNumber.type === "pattern"
                    ? "Input Phone Number like : 989911010101"
                    : ""}
                </p>
              )}
            </div>
            <div className="form-floating mb-3 w-100">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Full Name"
                name="from_full_name"
                {...register("fullName", {
                  required: `Please Fill This Field `,
                  pattern: /[a-zA-Z]/,
                })}
              />
              <label htmlFor="floatingInput" className="opacity-50">
                Full Name
              </label>
              {errors.fullName && (
                <p className="mt-2 text-danger">
                  {errors.fullName.message}
                  {errors.fullName.type === "pattern"
                    ? "Please Write Correct Full Name"
                    : ""}
                </p>
              )}
            </div>
            <div className="form-floating mb-3 w-100">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Email address"
                name="from_email"
                {...register("emailAddr", {
                  required: `Please Fill The Email Address `,
                  pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                })}
              />
              <label htmlFor="floatingInput" className="opacity-50">
                Email Address{" "}
              </label>
              {errors.emailAddr && (
                <p className="mt-2 text-danger">
                  {errors.emailAddr.message}
                  {errors.emailAddr.type === "pattern"
                    ? "Please Write Correct Email Address"
                    : ""}
                </p>
              )}
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input
                  type={isShown === "show" ? "text" : "password"}
                  className="form-control"
                  name="from_password"
                  placeholder="password"
                  {...register("password", {
                    required: "Please Fill The Password",
                    pattern:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  })}
                />
                <label htmlFor="code1" className="opacity-50">
                  Password
                </label>
              </div>
              <span
                className={`input-group-text ${showIcon}`}
                onClick={onHandleShowPass}
              >
                <i
                  className={`fa ${
                    isShown === "hide" ? "fa-eye" : "fa-eye-slash"
                  }`}
                />
              </span>
            </div>
            {errors.password && (
              <p className="mt-2 text-danger">
                {errors.password.message}
                {errors.password.type === "pattern"
                  ? "Input Correct Password like : Sina123@"
                  : ""}
              </p>
            )}

            <div className="pt-1 mb-4">
              <input
                type="submit"
                value="Sign up"
                className="btn btn-success"
              />
            </div>
            <p style={{ color: "#393f81" }}>
              Already have an account?
              <button
                className="btn text-decoration-underline p-0 px-2 fw-bold   "
                style={{ color: "#393f81" }}
                onClick={handleLogin}
              >
                Lgoin here !
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
