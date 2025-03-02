import React, {memo} from 'react';
import {Fragment} from "@/components";
import "./login-modal.css";
import img1 from "@/assets/images/image-1.jpg";
import imgFacebook from "@/assets/images/facebook.png";
import imgGoogle from "@/assets/images/google.png";

const LoginModalComponent: React.FC = () => {
  return (
    <Fragment>
      <div className="center-box">
        <div className="center">
          <div className="login-modal">
            {/* ----------------- Main ----------------- */}
            <div className={"p-6 md:p-20"}>
              {/* Title */}
              <div className={"mb-12 text-left"}>
                <h2 className={"font-mono mb-5 text-4xl font-bold"}>Log In</h2>
                <p className={"max-w-sm font-sans font-light text-gray-600"}>Log
                  in to your account to upload or download pictures, videos or
                  music.</p>
              </div>
              {/* Input email */}
              <input
                type="text"
                className="tfd-email"
                placeholder="Enter your email address"
              />
              {/* Forgot link & button */}
              <div
                className="two-columns"
              >
                <div className="font-thin text-cyan-700">Forgot password</div>

                <button
                  className="btn-next"
                >
                  <span>Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <line x1="13" y1="18" x2="19" y2="12"/>
                    <line x1="13" y1="6" x2="19" y2="12"/>
                  </svg>
                </button>
              </div>
              {/* Separator */}
              <div className="separator"></div>
              {/* Text `Login with` */}
              <p className="py-6 text-sm font-thin text-center text-gray-400">
                or log in with
              </p>
              {/* Login via social networks */}
              <div
                className="two-columns login-withs"
              >
                <button>
                  <img src={imgFacebook} alt="" className="w-9"/>
                  <span className="font-thin">Facebook</span>
                </button>
                <button>
                  <img src={imgGoogle} alt="" className="w-9"/>
                  <span className="font-thin">Google</span>
                </button>
              </div>
            </div>
            {/* ----------------- Righter ----------------- */}
            <img src={img1} className="right-img" alt="Login image"/>
            {/* ----------------- Close button ----------------- */}
            <div className="group btn-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black group-hover:text-gray-600"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

LoginModalComponent.displayName = "LoginModal";

export const LoginModal = memo(LoginModalComponent);
