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
                            <a href="index.html" className="position-relative">
                                <div
                                    className="hp-header-logo-icon position-absolute bg-black-20 hp-bg-dark-90 rounded-circle border border-black-0 hp-border-color-dark-90 d-flex align-items-center justify-content-center"
                                    style={{ width: 18, height: 18, top: "-5px" }}
                                >
                                    <svg
                                        className="hp-fill-color-dark-0"
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.709473 0L1.67247 10.8L5.99397 12L10.3267 10.7985L11.2912 0H0.710223H0.709473ZM9.19497 3.5325H4.12647L4.24722 4.88925H9.07497L8.71122 8.95575L5.99397 9.70875L3.28047 8.95575L3.09522 6.87525H4.42497L4.51947 7.93275L5.99472 8.33025L5.99772 8.3295L7.47372 7.93125L7.62672 6.21375H3.03597L2.67897 2.208H9.31422L9.19572 3.5325H9.19497Z"
                                            fill="#2D3436"
                                        />
                                    </svg>
                                </div>
                                <img
                                    className="hp-logo hp-sidebar-visible hp-dark-none"
                                    src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/logo/logo-small.svg"
                                    alt="logo"
                                />
                                <img
                                    className="hp-logo hp-sidebar-visible hp-dark-block"
                                    src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/logo/logo-small-dark.svg"
                                    alt="logo"
                                />
                                <img
                                    className="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none"
                                    src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/logo/logo.svg"
                                    alt="logo"
                                />
                                <img
                                    className="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block"
                                    src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/logo/logo-dark.svg"
                                    alt="logo"
                                />
                                <img
                                    className="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-none"
                                    src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/logo/logo-rtl.svg"
                                    alt="logo"
                                />
                                <img
                                    className="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-block"
                                    src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/logo/logo-rtl-dark.svg"
                                    alt="logo"
                                />
                            </a>
                            <a
                                href="https://hypeople-studio.gitbook.io/yoda/change-log"
                                target="_blank"
                                className="d-flex"
                            >
                                <span className="hp-sidebar-hidden hp-caption fw-normal hp-text-color-primary-1">
                                    v.3.2
                                </span>
                            </a>
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
                                Copyright 2021 Hypeople LTD.{" "}
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