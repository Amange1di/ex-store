// src/pages/signUp/Login.jsx

import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import SideImage from "../../assets/sign-up-fon.png";
import { loginUser } from "../../redux/slices/userSlice";
import { useEffect } from "react";

export default function LoginExample() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess, error } = useSelector((state) => state.user);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);
    let data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    dispatch(loginUser(data)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/profile");
      }
    });
  };

  return (
    <div className="container m-auto flex">
      <img style={{ width: "650px" }} src={SideImage} alt="Side Image" />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 text-4xl font-medium leading-9 tracking-tight text-black-900">
            Log in to Exclusive
          </h2>

          <p className="mt-6 text-base font-normal leading-9 tracking-tight text-black-900">
            Enter your details below
          </p>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div
                className="mt-2"
                style={{ width: "370px", borderBottom: "1.5px solid #999999" }}
              >
                <input
                  style={{ width: "100%", outline: "none" }}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email or Phone Number"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                ></label>
              </div>
              <div
                className="mt-2"
                style={{ width: "370px", borderBottom: "1.5px solid #999999" }}
              >
                <input
                  style={{ width: "100%", outline: "none" }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                />
                
              </div>
            </div>
           <div className="flex items-center justify-between">
           <div style={{width:'143px'}}>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-500 px-1 py-4 text-base font-medium leading-6 text-white shadow-sm"              >
                Log in
              </button>
            </div>
              <div className="text-sm">
                    <a href="#" className="font-normal text-base text-red-500">
                      Forget password?
                    </a>
                  </div>
           </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            <Link
              to="/form"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Registration
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
