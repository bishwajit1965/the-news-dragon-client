import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser, verifyEmailAddress } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // Redirect to desired route
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    // Create user
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential.user);
        setSuccess("User sign up is successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });

    // Verify registered user email address
    verifyEmailAddress()
      .then((result) => {
        const user = result.user;
        console.log("Hello", user);
        setSuccess("Verify your email address.");
        alert("Hello user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });

    // Remove success /error message
    setError("");
    setSuccess("");
    form.reset();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Register</h2>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="photoUrl"
          >
            Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photoUrl"
            type="url"
            name="photoUrl"
            placeholder="Enter a URL for your profile photo"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-2">
          <label className="inline-flex items-center">
            <input
              checked={isChecked}
              onChange={handleCheckboxChange}
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2 text-gray-700">
              I accept{" "}
              <Link to="/terms-conditions">
                {" "}
                <span className="text-indigo-600">
                  the terms and conditions
                </span>{" "}
              </Link>
            </span>
          </label>
        </div>
        <p></p>
        <div className="mb-2">
          <span className="text-gray-700 mr-2">Already a member?</span>
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Log in
          </Link>
        </div>
        <div className="">
          {success && (
            <p>
              <i className="text-green-500">{success}</i>
            </p>
          )}
          {error && (
            <p>
              <i className="text-red-500">{error}</i>
            </p>
          )}
        </div>
        <div className="mb-2 w-full">
          <button
            type="submit"
            disabled={!isChecked}
            className={`bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded w-full ${
              !isChecked ? "opacity-50" : ""
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
