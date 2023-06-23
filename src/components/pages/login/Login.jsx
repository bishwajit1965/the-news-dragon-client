import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import {
  hideErrorElements,
  hideSuccessElements,
} from "../../../helpers/Helpers";

const Login = () => {
  const {
    user,
    userLogIn,
    changePassword,
    updateUserProfileName,
    googleLogIn,
    gitHubLogIn,
  } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef();
  const nameRef = useRef();

  // Redirect to desired route
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // User login
    userLogIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess("Login is successful!!!");
        navigate(from, { replace: true });
        hideSuccessElements();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        hideErrorElements();
      });

    // Update user name in profile

    // Remove success /error message
    setError("");
    setSuccess("");
    form.reset();
  };

  const handleResetPassword = () => {
    const emailData = emailRef.current.value;
    if (!emailData) {
      setError("Email field is empty!!!");
      hideErrorElements();
    } else {
      changePassword(emailData)
        .then(() => {
          setSuccess("Password reset email has been sent.");
          hideSuccessElements();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setError(errorMessage);
          hideErrorElements();
        });
    }
  };
  const handleUpdateProfileName = () => {
    const profileName = nameRef.current.value;
    console.log(profileName);
    updateUserProfileName({ displayName: profileName })
      .then((result) => {
        setSuccess("Profile name updated!!!");
        const user = result.user;
        console.log(result.user);
      })
      .catch((error) => {
        setError("An error occured");
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "Google log in successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {});
  };

  const handleGitHubLogIn = () => {
    gitHubLogIn()
      .then((result) => {
        const user = result.user;
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "GitHub log in successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center justify-center h-screen">
        <form
          onSubmit={handleLogin}
          className="bg-white p-10 rounded-lg shadow-lg w-96"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Login</h2>
          <div className="mb-2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              ref={nameRef}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <Link onClick={handleResetPassword} className="text-gray-700">
              Forgot your password?{" "}
              <span className="text-blue-600">Reset password</span>
            </Link>
          </div>
          <div className="mb-2">
            <Link
              to="/register"
              className="inline-block align-baseline text-sm text-gray-700"
            >
              Not a member yet? <span className="text-blue-600">Register</span>
            </Link>
          </div>
          <div className="">
            {success && (
              <p>
                <i className="text-green-500" id="success-message">
                  {success}
                </i>
              </p>
            )}
            {error && (
              <p>
                <i className="text-red-500" id="error-message">
                  {error}
                </i>
              </p>
            )}
          </div>

          <div className="md:flex md:items-center md:justify-between gap-4 mt-2 w-full grid">
            <button
              className="bg-blue-500 btn-md hover:bg-blue-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <button
              onClick={handleUpdateProfileName}
              className="bg-blue-500 btn-md hover:bg-blue-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Profile
            </button>
          </div>

          <div className="md:flex items-center justify-between text-center my-4 gap-4">
            <button
              onClick={handleGoogleLogIn}
              className="border btn-md border-indigo-100 rounded-sm w-full inline-flex p-1"
            >
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                className="w-6 h-6 flex items-center p-1"
              />
              Login
            </button>
            <button
              onClick={handleGitHubLogIn}
              className="border btn-md border-indigo-100 rounded-sm w-full inline-flex p-1"
            >
              <img
                src="https://github.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                width="26"
                height="26"
                className="flex items-center p-1"
              />
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
