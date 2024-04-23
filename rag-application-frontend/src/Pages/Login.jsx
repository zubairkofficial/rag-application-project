import { useNavigate, Link } from "react-router-dom";
import { backendRequest } from "../Helpers/backendRequest";
import { notyf } from "../Helpers/notyf";

export function Login() {
    const navigate = useNavigate()

    async function login(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const response = await backendRequest("POST", "/login", data);
        console.log(response);

        if (response.success) {
            localStorage.setItem('token', response.token);
            localStorage.setItem("user_type", response.type);
            localStorage.setItem('name', response.name);

            if (response.type === 'consumer')
                navigate("/consumer/dashboard");
            else if (response.type === 'creator')
                navigate("/creator/dashboard");
        } else {
            notyf.error(response.detail || "Unable to Login");
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
                        <h1 className="mb-0 mb-sm-24">Login</h1>
                        <p className="mt-sm-8 mt-sm-0 text-black-60">
                            Welcome back, please login to your account.
                        </p>
                        <form className="mt-16 mt-sm-32 mb-8" onSubmit={login}>
                            <div className="mb-16">
                                <label htmlFor="loginUsername" className="form-label">
                                    Email :
                                </label>
                                <input type="email" name="email" className="form-control" id="loginUsername" />
                            </div>
                            <div className="mb-16">
                                <label htmlFor="loginPassword" className="form-label">
                                    Password :
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="loginPassword"
                                    name="password"
                                />
                            </div>
                            <div className="row align-items-center justify-content-between mb-16">
                                <div className="col hp-flex-none w-auto">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label
                                            className="form-check-label ps-4"
                                            htmlFor="exampleCheck1"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div className="col hp-flex-none w-auto">
                                    <Link
                                        className="hp-button text-black-80 hp-text-color-dark-40"
                                        to="/forget-password"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                {/* <a
                                    href="index.html"
                                    className="d-block w-100"
                                    style={{ color: "inherit" }}
                                > */}
                                    Sign in
                                {/* </a> */}
                            </button>
                        </form>
                        <div className="col-12 hp-form-info text-center">
                            <span className="text-black-80 hp-text-color-dark-40 hp-caption me-4">
                                Don’t you have an account?
                            </span>
                            <Link
                                className="text-primary-1 hp-text-color-dark-primary-2 hp-caption"
                                to="/signup"
                            >
                                Create an account
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