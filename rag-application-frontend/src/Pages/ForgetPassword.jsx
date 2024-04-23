import { Link, useNavigate } from "react-router-dom";
import { backendRequest } from "../Helpers/backendRequest";
import { notyf } from "../Helpers/notyf";
import { useState } from "react";

export function ForgetPassword() {

    const navigate = useNavigate();
    const [formType, setFormType] = useState("reset-password"); // "reset-password" | "enter-code" | "new-password"
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function resetPassword(e) {
        e.preventDefault();
        setIsLoading(true);
        const fData = new FormData(e.target);
        const response = await backendRequest("POST", "/reset-password", fData);
        console.log(response);

        if (response.success) {
            notyf.success("Password Reset Code is sent. Please check your Email Address.");
            setEmail( fData.get("email") );
            setFormType("enter-code");
        } else {
            notyf.error(response.detail || "Unable to reset.");
        }
        setIsLoading(false);
    }

    async function enterCode(e) {
        e.preventDefault();
        setIsLoading(true);
        const fData = new FormData(e.target);
        fData.append("email", email);
        const response = await backendRequest("POST", "/reset-code-status", fData);
        console.log(response);

        if (response.success) {
            notyf.success("Password Reset Code is sent. Please check your Email Address.");
            setCode( fData.get("code") );
            setFormType("new-password");
        } else {
            notyf.error(response.detail || "Unable to reset.");
        }
        setIsLoading(false);
    }

    async function newPassword(e) {
        e.preventDefault();
        setIsLoading(true);
        const fData = new FormData(e.target);
        fData.append("email", email);
        fData.append("code", code);
        const response = await backendRequest("POST", "/set-password", fData);
        console.log(response);

        if (response.success) {
            notyf.success("Password Changed successfully.");
            navigate("/login");
        } else {
            notyf.error(response.detail || "Unable to reset.");
        }
        setIsLoading(false);
    }

    return (
        <div className="row hp-authentication-page">
            <div className="hp-bg-black-20 hp-bg-color-dark-90 col-lg-6 col-12">
                <div className="row hp-image-row h-100 px-8 px-sm-16 px-md-0 pb-32 pb-sm-0 pt-32 pt-md-0">
                    <div className="hp-logo-item m-16 m-sm-32 m-md-64 w-auto px-0 col-12">
                        <div className="hp-header-logo d-flex align-items-center">
                            <Link to="/" className="position-relative">
                                <img
                                    className="hp-logo hp-sidebar-visible hp-dark-none"
                                    src="/logo.png"
                                    alt="logo"
                                />
                                <img
                                    className="hp-logo hp-sidebar-visible hp-dark-block"
                                    src="/logo.png"
                                    alt="logo"
                                />
                                <img
                                    className="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none"
                                    src="/logo.png"
                                    alt="logo"
                                />
                                <img
                                    className="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block"
                                    src="/logo.png"
                                    alt="logo"
                                />
                                <img
                                    className="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-none"
                                    src="/logo.png"
                                    alt="logo"
                                />
                                <img
                                    className="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-block"
                                    src="/logo.png"
                                    alt="logo"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 px-0">
                        <div className="row h-100 w-100 mx-0 align-items-center justify-content-center">
                            <div className="hp-bg-item text-center mb-32 mb-md-0 px-0 col-12">
                                <img
                                    className="hp-dark-none m-auto w-100"
                                    src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/pages/authentication/authentication-bg.svg"
                                    alt="Background Image"
                                />
                                <img
                                    className="hp-dark-block m-auto w-100"
                                    src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/pages/authentication/authentication-bg-dark.svg"
                                    alt="Background Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 py-sm-64 py-lg-0">
                <div className="row align-items-center justify-content-center h-100 mx-4 mx-sm-n32">
                    <div className="col-12 col-md-9 col-xl-7 col-xxxl-5 px-8 px-sm-0 pt-24 pb-48">
                        <h1 className="mb-0 mb-sm-24">Recover Password</h1>
                        <p className="mt-sm-8 mt-sm-0 text-black-60">
                            We’ll e-mail you instructions on how to reset your password.
                        </p>

                        {
                            formType === "reset-password" &&
                            <form className="mt-16 mt-sm-32 mb-8" onSubmit={resetPassword}>
                                <div className="mb-24">
                                    <label htmlFor="recoverEmail" className="form-label">
                                        E-mail :
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="recoverEmail"
                                        placeholder="you@example.com"
                                        name="email"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                                    Reset Password
                                </button>
                            </form>
                        }

                        {
                            formType === "enter-code" &&
                            <form className="mt-16 mt-sm-32 mb-8" onSubmit={enterCode}>
                                <div className="mb-24">
                                    <label htmlFor="resetCode" className="form-label">
                                        Code :
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="resetCode"
                                        placeholder="xxxx"
                                        name="code"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                                    Reset Password
                                </button>
                            </form>
                        }

                        {
                            formType === "new-password" &&
                            <form className="mt-16 mt-sm-32 mb-8" onSubmit={newPassword}>
                                <div className="mb-24">
                                    <label htmlFor="newPassword" className="form-label">
                                        Enter New Password :
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="newPassword"
                                        name="password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                                    Reset Password
                                </button>
                            </form>
                        }

                        <div className="col-12 hp-form-info text-center">
                            <span className="text-black-80 hp-text-color-dark-40 hp-caption me-4">
                                Go back to
                            </span>
                            <Link
                                className="text-primary-1 hp-text-color-dark-primary-2 hp-caption"
                                to="/login"
                            >
                                Login
                            </Link>
                        </div>
                        <div className="mt-48 mt-sm-96 col-12">
                            <p className="hp-p1-body text-center hp-text-color-black-60 mb-8">
                                {" "}
                                Copyright 2024 BACAFIT.{" "}
                            </p>
                            <div className="row align-items-center justify-content-center mx-n8">
                                <div className="w-auto hp-flex-none px-8 col">
                                    <a
                                        className="hp-text-color-black-80 hp-text-color-dark-40"
                                    >
                                        {" "}
                                        Privacy Policy{" "}
                                    </a>
                                </div>
                                <div className="w-auto hp-flex-none px-8 col">
                                    <a
                                        className="hp-text-color-black-80 hp-text-color-dark-40"
                                    >
                                        {" "}
                                        Term of use{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}