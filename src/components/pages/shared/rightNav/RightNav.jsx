import React, { useContext } from "react";
import QZone from "../qZone/QZone";
import AmazingNewsPaper from "../amazingNewsPaper/AmazingNewsPaper";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const RightNav = () => {
  const { googleLogIn, gitHubLogIn } = useContext(AuthContext);
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
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <div className="mb-5">
        <div className="bg-zinc-100 p-2 mb-2 rounded-sm">
          <h2 className="text-2xl font-bold">Log in with</h2>
        </div>
        <div className="text-center my-4">
          <button
            onClick={handleGoogleLogIn}
            className="border p-2 border-indigo-100 rounded-sm w-full inline-flex mb-2"
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              className="w-6 h-6 mr-2"
            />
            Login with Google
          </button>
          <button
            onClick={handleGitHubLogIn}
            className="border p-2 border-indigo-100 rounded-sm w-full inline-flex"
          >
            <img
              src="https://github.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              width="28"
              height="28"
            />
            Login with GitHub
          </button>
        </div>
        <h2 className="text-2xl font-bold">Find us on</h2>
        <div className=" border border-slate-200 rounded-sm divide-y divide-solid mt-3">
          <div className="block p-2">
            <a
              href="https://www.facebook.com"
              className="inline-flex items-center"
            >
              <img
                src="https://www.facebook.com/images/fb_icon_325x325.png"
                className="mr-5"
                alt="Facebook"
                width="25"
                height="25"
              />{" "}
              Face Book
            </a>
          </div>
          <div className="block p-2">
            <a
              href="https://twitter.com/intent/tweet?url=https://www.example.com&text=Check%20out%20my%20awesome%20website!"
              className="inline-flex items-center"
            >
              <img
                src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
                alt="Twitter"
                width="30"
                height="30"
                className="mr-4"
              />{" "}
              Twitter
            </a>
          </div>
          <div className="block p-2">
            <a
              href="https://www.instagram.com/your_username/"
              className="inline-flex items-center"
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/instagram-233-896451.png"
                alt="Instagram"
                width="30"
                height="30"
                className="mr-4"
              />{" "}
              Instagram
            </a>
          </div>
        </div>
      </div>
      <QZone />
      <AmazingNewsPaper />
    </div>
  );
};

export default RightNav;
