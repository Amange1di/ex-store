import React from 'react';
import { Container } from "@mui/material";
import SideImage from "../../assets/sign-up-fon.png";
import { Link } from "react-router-dom";

const url = "https://api.escuelajs.co/api/v1/users/";

export default function FormExample({ setIsSuccess }) {
  console.log('FormExample rendered', setIsSuccess);
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const data = {};
        const formData = new FormData(form);
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        const req = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (req.ok && req.status === 201) {
            const response = await req.json();
            console.log('Token:', response.token);
            localStorage.setItem('authToken', response.token);
            setIsSuccess(true);
        } else {
            console.error('Registration failed');
        }
    };

    return (
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between" }}>
            <img style={{ width: "650px" }} src={SideImage} alt="" />
            <div>
                <h2 style={{ fontSize: "36px", fontWeight: "500" }}>Create an account</h2>
                <p className="sm:mx-auto sm:w-full sm:max-w-sm mt-6 text-base leading-9 tracking-tight">
                    Enter your details below
                </p>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form style={{ display: "flex", flexDirection: "column", gap: "40px" }} className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-base font-normal leading-6 text-gray-400"></label>
                            <div className="mt-2" style={{ width: "370px", borderBottom: "1.5px solid #999999" }}>
                                <input style={{ width: "100%", outline: "none" }} id="name" name="name" type="text" placeholder="Name" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900"></label>
                            <div className="mt-2" style={{ width: "370px", borderBottom: "1.5px solid #999999" }}>
                                <input style={{ width: "100%", outline: "none" }} id="email" name="email" type="email" autoComplete="email" required placeholder="Email or Phone Number" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900"></label>
                            </div>
                            <div className="mt-2" style={{ width: "370px", borderBottom: "1.5px solid #999999" }}>
                                <input style={{ width: "100%", outline: "none" }} id="password" name="password" type="password" autoComplete="current-password" required placeholder="Password" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="avatar" className="block text-sm font-medium leading-6 text-gray-900"></label>
                            <div className="mt-2" style={{ width: "370px", borderBottom: "1.5px solid #999999" }}>
                                <input style={{ width: "100%", outline: "none" }} id="avatar" name="avatar" type="url" required placeholder="User Avatar" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-4 text-base font-medium leading-6 text-white shadow-sm">
                                Create Account
                            </button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have account?
                        <Link style={{ textDecoration: "underline !important ", textUnderlineOffset: "5px" }} to="/login" className="ml-3 font-semibold leading-6 text-zinc-700 hover:text underline underline-offset-4">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </Container>
    );
}
