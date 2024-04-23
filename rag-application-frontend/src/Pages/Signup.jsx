import { Link, useNavigate } from "react-router-dom";
import { notyf } from "../Helpers/notyf";
import { backendRequest } from "../Helpers/backendRequest";

export function Signup() {

    const navigate = useNavigate();

    async function signup(e) {
        e.preventDefault();
        const fData = new FormData(e.target);
        const passwordMatches = fData.get('password') === fData.get("confirmPassword");
        if (passwordMatches) {
            const response = await backendRequest("POST", "/signup", fData);
            if (response.success) {
                notyf.success("Signed Up Successfully.");
                navigate("/login");
            } else {
                notyf.error(`Error ${response?.detail || ""}`);
            }
        }
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
                        <span className="d-block hp-p1-body hp-text-color-dark-0 hp-text-color-black-100 fw-medium mb-6">
                            {" "}
                            SIGN UP FOR FREE{" "}
                        </span>
                        <h1 className="mb-0 mb-sm-24">Create Account</h1>
                        <p className="mt-sm-8 mt-sm-0 text-black-60">
                            Please sign up to your personal account if you want to use all our
                            premium products.
                        </p>
                        <form className="mt-16 mt-sm-32 mb-8" onSubmit={signup}>
                            <div className="mb-16">
                                <label htmlFor="registerUsername" className="form-label">
                                    Full Name :
                                </label>
                                <input type="text" className="form-control" id="registerUsername" name="name" />
                            </div>
                            <div className="mb-16">
                                <label htmlFor="registerEmail" className="form-label">
                                    E-mail :
                                </label>
                                <input type="email" className="form-control" id="registerEmail" name="email" />
                            </div>
                            <div className="mb-16">
                                <label htmlFor="registerPassword" className="form-label" >
                                    Password :
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="registerPassword"
                                    name="password"
                                />
                            </div>
                            <div className="mb-16">
                                <label htmlFor="registerConfirmPassword" className="form-label">
                                    Confirm Password :
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="registerConfirmPassword"
                                    name="confirmPassword"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Sign Up
                            </button>
                        </form>
                        <div className="col-12 hp-form-info text-center">
                            <span className="text-black-80 hp-text-color-dark-40 hp-caption me-4">
                                Already have an account?
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