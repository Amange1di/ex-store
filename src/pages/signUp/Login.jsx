import React, { useState } from "react";
import SideImage from "../../assets/SideImage.png";

const profile = "https://api.escuelajs.co/api/v1/auth/profile";
const login = "https://api.escuelajs.co/api/v1/auth/login";

export default function LoginExample({ setIsSuccess, setUser }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    setError(null);

    const form = evt.target;
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    try {
      const req = await fetch(login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!req.ok) {
        throw new Error("Login failed");
      }

      const res = await req.json();
      console.log(res, "----token---");

      const req2 = await fetch(profile, {
        headers: {
          Authorization: `Bearer ${res.access_token}`,
        },
      });

      if (!req2.ok) {
        throw new Error("Failed to fetch profile");
      }

      const userData = await req2.json();
      console.log(userData, "---profile---");
      setUser(userData);
      setIsSuccess(true);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container  m-auto flex">
      <img src={SideImage} alt="Side Image" />

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to Exclusive
          </h2>
          <p className="mt-4 text-sm leading-5 text-gray-500">
            Enter your details below
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className={`flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
                  loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-500"
                } focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600`}
                disabled={loading}
                style={{ width: "143px",  }}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
