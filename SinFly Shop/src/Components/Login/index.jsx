// Login section 
const Login = ({
  onSubmit,
  onHandleSubmit,
  register,
  errors,
  isShown,
  showIcon,
  onHandleShowPass,
  onLoginOrSignUpState,
}) => {
  const handleSignUp = () => {
    onLoginOrSignUpState("signUp");
  };
  return (
    <>
      <div className="col-md-6 col-lg-6 d-flex align-items-center ">
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
              Login to your account
            </h5>

            <div className="form-floating mb-3 w-100">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Email address"
                name="from_email"
                autoFocus
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
                  ? "Password Includes Minimum 8 chars , at least one letter, one number and one special character"
                  : ""}
              </p>
            )}

            <div className="pt-1 mb-4">
              <input type="submit" value="Login" className="btn btn-success" />
            </div>
            <p style={{ color: "#393f81" }}>
              Don't have an account?{" "}
              <button
                className="btn text-decoration-underline p-0 fw-bold "
                style={{ color: "#393f81" }}
                onClick={handleSignUp}
              >
                Register here
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
