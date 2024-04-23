import { Link, NavLink, useNavigate } from "react-router-dom";
import { backendRequest } from "../Helpers/backendRequest";

export function CreatorLayout({ children }) {

    const navigate = useNavigate();

    async function logout(e) {
        e.preventDefault();
        const response = await backendRequest("POST", "/logout");
        if (response.success) {
            localStorage.clear();
            navigate("/login");
        }
    }

    return (
        <>
            <main className="hp-bg-color-dark-90 d-flex min-vh-100">
                <div className="hp-sidebar hp-bg-color-black-20 hp-bg-color-dark-90 border-end border-black-40 hp-border-color-dark-80">
                    <div className="hp-sidebar-container">
                        <div className="hp-sidebar-header-menu">
                            <div className="row justify-content-between align-items-end mx-0">
                                <div className="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-visible">
                                    <div className="hp-cursor-pointer">
                                        <svg
                                            width={8}
                                            height={15}
                                            viewBox="0 0 8 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.91102 1.73796L0.868979 4.78L0 3.91102L3.91102 0L7.82204 3.91102L6.95306 4.78L3.91102 1.73796Z"
                                                fill="#B2BEC3"
                                            />
                                            <path
                                                d="M3.91125 12.0433L6.95329 9.00125L7.82227 9.87023L3.91125 13.7812L0.000224113 9.87023L0.869203 9.00125L3.91125 12.0433Z"
                                                fill="#B2BEC3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-auto px-0">
                                    <div className="hp-header-logo d-flex align-items-center">
                                        <Link to="" className="position-relative">
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
                                <div className="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-hidden">
                                    <div className="hp-cursor-pointer mb-4">
                                        <svg
                                            width={8}
                                            height={15}
                                            viewBox="0 0 8 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.91102 1.73796L0.868979 4.78L0 3.91102L3.91102 0L7.82204 3.91102L6.95306 4.78L3.91102 1.73796Z"
                                                fill="#B2BEC3"
                                            />
                                            <path
                                                d="M3.91125 12.0433L6.95329 9.00125L7.82227 9.87023L3.91125 13.7812L0.000224113 9.87023L0.869203 9.00125L3.91125 12.0433Z"
                                                fill="#B2BEC3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <div className="menu-title">STATISTICS</div>
                                    <ul>
                                        <li>
                                            <NavLink to="/Creator/dashboard">
                                                <div
                                                    className="tooltip-item in-active"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    title=""
                                                    data-bs-original-title="Dashboard"
                                                    aria-label="Dashboard"
                                                />
                                                <span>
                                                    <span className="submenu-item-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M8.97 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="m1.97 12.7 6-.02c.75 0 1.59.57 1.87 1.27l1.14 2.88c.26.65.67.65.93 0l2.29-5.81c.22-.56.63-.58.91-.05l1.04 1.97c.31.59 1.11 1.07 1.77 1.07h4.06"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>Dashboard</span>
                                                </span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="menu-title">PROJECTS</div>
                                    <ul>
                                        <li>
                                            <NavLink to="/Creator/projects">
                                                <div
                                                    className="tooltip-item in-active"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    title=""
                                                    data-bs-original-title="All Projects"
                                                    aria-label="All Projects"
                                                />
                                                <span>
                                                    <span className="submenu-item-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M8.97 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="m1.97 12.7 6-.02c.75 0 1.59.57 1.87 1.27l1.14 2.88c.26.65.67.65.93 0l2.29-5.81c.22-.56.63-.58.91-.05l1.04 1.97c.31.59 1.11 1.07 1.77 1.07h4.06"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>All Projects</span>
                                                </span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="row justify-content-between align-items-center hp-sidebar-footer mx-0 hp-bg-color-dark-90">
                            <div className="divider border-black-40 hp-border-color-dark-70 hp-sidebar-hidden mt-0 px-0" />
                            <div className="col">
                                <div className="row align-items-center">
                                    <div className="w-auto px-0">
                                        <div
                                            className="avatar-item bg-primary-4 d-flex align-items-center justify-content-center rounded-circle"
                                            style={{ width: 48, height: 48 }}
                                        >
                                            <img
                                                src="../../../app-assets/img/memoji/user-avatar-8.png"
                                                height="100%"
                                                className="hp-img-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-auto ms-8 px-0 hp-sidebar-hidden mt-4">
                                        <span className="d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body lh-1">
                                            {localStorage.getItem('name')}
                                        </span>
                                        <a

                                            className="hp-badge-text fw-normal hp-text-color-dark-30"
                                        >
                                            View Profile
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col hp-flex-none w-auto px-0 hp-sidebar-hidden">
                                <a >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 24 24"
                                        className="remix-icon hp-text-color-black-100 hp-text-color-dark-0"
                                        height={24}
                                        width={24}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hp-main-layout">
                    <header>
                        <div className="row w-100 m-0">
                            <div className="col px-0">
                                <div className="row w-100 align-items-center justify-content-between position-relative">
                                    <div
                                        className="col w-auto hp-flex-none hp-mobile-sidebar-button me-24 px-0"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#mobileMenu"
                                        aria-controls="mobileMenu"
                                    >
                                        <button type="button" className="btn btn-text btn-icon-only">
                                            <i
                                                className="ri-menu-fill hp-text-color-black-80 hp-text-color-dark-30 lh-1"
                                                style={{ fontSize: 24 }}
                                            />
                                        </button>
                                    </div>
                                    <div className="hp-header-text-info col col-lg-14 col-xl-16 hp-header-start-text d-flex align-items-center hp-horizontal-none">
                                        <div
                                            className="d-flex overflow-hidden rounded-4 hp-bg-color-black-0 hp-bg-color-dark-100"
                                            style={{ minWidth: 45, width: 45, height: 45 }}
                                        >
                                            <img
                                                src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/memoji/newspaper.svg"
                                                alt="Newspaper"
                                                height="80%"
                                                style={{ marginTop: "auto", marginLeft: "auto" }}
                                            />
                                        </div>
                                        <p className="hp-header-start-text-item hp-input-label fw-normal hp-text-color-black-100 hp-text-color-dark-0 ms-12 mb-0 lh-1 d-flex align-items-center">
                                            Do you know the latest update of 2022?&nbsp;&nbsp;
                                            <span className="hp-text-color-primary-1">
                                                Our roadmap is alive for future updates.
                                            </span>
                                        </p>
                                    </div>
                                    <div className="hp-horizontal-logo-menu d-flex align-items-center w-auto">
                                        <div className="col hp-flex-none w-auto hp-horizontal-block">
                                            <div className="hp-header-logo d-flex align-items-center">
                                                <a className="position-relative">
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

                                                    target="_blank"
                                                    className="d-flex"
                                                >
                                                    <span className="hp-sidebar-hidden hp-caption fw-normal hp-text-color-primary-1">
                                                        v.3.2
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col hp-flex-none w-auto hp-horizontal-block hp-horizontal-menu ps-24">
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className="px-6">
                                                    <a

                                                        className="px-12 py-4"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <span>Dashboards</span>
                                                        <i className="ri-arrow-down-s-line" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M8.97 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="m1.97 12.7 6-.02c.75 0 1.59.57 1.87 1.27l1.14 2.88c.26.65.67.65.93 0l2.29-5.81c.22-.56.63-.58.91-.05l1.04 1.97c.31.59 1.11 1.07 1.77 1.07h4.06"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Analytics</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M3 9.11v5.77C3 17 3 17 5 18.35l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11C21 7 21 7 19 5.65l-5.5-3.18c-.82-.48-2.17-.48-3 0L5 5.65C3 7 3 7 3 9.11Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>E-Commerce</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="px-6">
                                                    <a

                                                        className="px-12 py-4"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <span>Applications</span>
                                                        <i className="ri-arrow-down-s-line" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17 2.44v9.98c0 1.97-1.41 2.74-3.14 1.7l-1.32-.79c-.3-.18-.78-.18-1.08 0l-1.32.79C8.41 15.15 7 14.39 7 12.42V2.44"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17 2.44v9.98c0 1.97-1.41 2.74-3.14 1.7l-1.32-.79c-.3-.18-.78-.18-1.08 0l-1.32.79C8.41 15.15 7 14.39 7 12.42V2.44"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Contact</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>E-commerce</span>
                                                                </span>
                                                                <i className="dropdown-menu-arrow" />
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Shop</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Wishlist</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Product Detail</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Checkout</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                                style={{ pointerEvents: "none" }}
                                                            >
                                                                <span>
                                                                    <div className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M17.98 10.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeMiterlimit={10}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M21.98 6.79v4c0 2.94-1.35 4.52-4.04 4.75.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79h-6.4c-.26 0-.51.01-.75.04C6.27 3.35 7.86 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeMiterlimit={10}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M13.495 13.25h.01M9.995 13.25h.01M6.495 13.25h.01"
                                                                                stroke="currentColor"
                                                                                strokeWidth={2}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                    <span>Mailbox</span>
                                                                </span>
                                                                <span className="badge hp-text-color-black-100 hp-bg-success-3 rounded-pill px-8 border-0 badge-none">
                                                                    Coming soon
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Knowledge Base</span>
                                                                </span>
                                                                <i className="dropdown-menu-arrow" />
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Knowledge Base 1</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Knowledge Base 2</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                                style={{ pointerEvents: "none" }}
                                                            >
                                                                <span>
                                                                    <div className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M3.01 11.22v4.49C3.01 20.2 4.81 22 9.3 22h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99ZM5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12ZM12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                    <span>File Manager</span>
                                                                </span>
                                                                <span className="badge hp-text-color-black-100 hp-bg-success-3 rounded-pill px-8 border-0 badge-none">
                                                                    Coming soon
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="px-6">
                                                    <a

                                                        className="px-12 py-4"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <span>Pages</span>
                                                        <i className="ri-arrow-down-s-line" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Authentication</span>
                                                                </span>
                                                                <i className="dropdown-menu-arrow" />
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Login Page V1</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Login Page V2</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Register Page V1</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Register Page V2</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Recover Password V1</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Recover Password V2</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Reset Password V1</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Reset Password V2</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Error Pages</span>
                                                                </span>
                                                                <i className="dropdown-menu-arrow" />
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>404</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>403</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>500</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>503</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>502</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Maintenance</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Coming Soon</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Profile</span>
                                                                </span>
                                                                <i className="dropdown-menu-arrow" />
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Personel Information</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Notifications</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Activity Monitor</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Security Settings</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Password Change</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Connect with Social</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Email</span>
                                                                </span>
                                                                <i className="dropdown-menu-arrow" />
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Hello</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Promotional</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Verify</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Reset Password</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Term</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Deactive Account</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Lock Screen</span>
                                                                </span>
                                                                <i className="dropdown-menu-arrow" />
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Welcome</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Password Is Changed</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Deactivated</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Lock</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Landing</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Pricing</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Invoice</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>FAQ</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Blank Page</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="px-6">
                                                    <a

                                                        className="px-12 py-4"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <span>User Interface</span>
                                                        <i className="ri-arrow-down-s-line" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM10 2v20M10 12h12"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Typography</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM10 2v20M10 12h12"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Buttons</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Components</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Charts</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>SelectBox</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Icons</span>
                                                                </span>
                                                                <i className="dropdown-menu-arrow" />
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Remix Icons</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Iconly Icons</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Illustration Set</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Crypto Icons</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>User Icons</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Flags</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Page Layouts</span>
                                                                </span>
                                                                <i className="dropdown-menu-arrow" />
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Boxed Layout</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Vertical Layout</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Horizontal Layout</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Full Layout</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropend">
                                                            <a
                                                                className="dropdown-item"

                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <span>
                                                                    <span className="submenu-item-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={18}
                                                                            height={18}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span>Cards</span>
                                                                </span>
                                                                <i className="dropdown-menu-arrow" />
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Advance</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Statistics</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropend">
                                                                    <a >
                                                                        <span>Analytics</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="hp-header-search d-none col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search..."
                                            id="header-search"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="col hp-flex-none w-auto pe-0">
                                        <div className="row align-items-center justify-content-end">
                                            <div className="w-auto px-0">
                                                <div className="d-flex align-items-center me-4 hp-header-search-button">
                                                    <button
                                                        type="button"
                                                        className="btn btn-icon-only bg-transparent border-0 hp-hover-bg-black-10 hp-hover-bg-dark-100 hp-transition d-flex align-items-center justify-content-center"
                                                        style={{ height: 40 }}
                                                    >
                                                        <svg
                                                            className="hp-header-search-button-icon-1 hp-text-color-black-80 hp-text-color-dark-30"
                                                            set="curved"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <i
                                                            className="d-none hp-header-search-button-icon-2 ri-close-line hp-text-color-black-60"
                                                            style={{ fontSize: 24 }}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="hover-dropdown-fade w-auto px-0 d-flex align-items-center position-relative">
                                                <button
                                                    type="button"
                                                    className="btn btn-icon-only bg-transparent border-0 hp-hover-bg-black-10 hp-hover-bg-dark-100 hp-transition d-flex align-items-center justify-content-center"
                                                    style={{ height: 40 }}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={22}
                                                        height={22}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        className="hp-text-color-black-80 hp-text-color-dark-30"
                                                    >
                                                        <path
                                                            d="M12 6.44v3.33M12.02 2C8.34 2 5.36 4.98 5.36 8.66v2.1c0 .68-.28 1.7-.63 2.28l-1.27 2.12c-.78 1.31-.24 2.77 1.2 3.25a23.34 23.34 0 0 0 14.73 0 2.22 2.22 0 0 0 1.2-3.25l-1.27-2.12c-.35-.58-.63-1.61-.63-2.28v-2.1C18.68 5 15.68 2 12.02 2Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeMiterlimit={10}
                                                            strokeLinecap="round"
                                                        />
                                                        <path
                                                            d="M15.33 18.82c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeMiterlimit={10}
                                                        />
                                                    </svg>
                                                    <span
                                                        className="position-absolute translate-middle p-2 rounded-circle bg-primary hp-notification-circle"
                                                        style={{ width: 6, height: 6, top: 12 }}
                                                    />
                                                </button>
                                                {/* <div
                                                    className="hp-notification-menu dropdown-fade position-absolute pt-18"
                                                    style={{ width: 380, top: "100%" }} >
                                                    <div className="p-24 rounded hp-bg-black-0 hp-bg-dark-100">
                                                        <div className="row justify-content-between align-items-center mb-16">
                                                            <div className="col hp-flex-none w-auto h5 hp-text-color-black-100 hp-text-color-dark-10 hp-text-color-dark-0 me-64 mb-0">
                                                                Notifications
                                                            </div>
                                                            <div className="col hp-flex-none w-auto hp-badge-text fw-medium hp-text-color-black-80 me-12 px-0">
                                                                4 New
                                                            </div>
                                                        </div>
                                                        <div className="divider my-4" />
                                                        <div
                                                            className="hp-overflow-y-auto px-10"
                                                            style={{
                                                                maxHeight: 400,
                                                                marginRight: "-10px",
                                                                marginLeft: "-10px"
                                                            }}
                                                        >
                                                            <div
                                                                className="row hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 py-12 px-10"
                                                                style={{
                                                                    marginLeft: "-10px",
                                                                    marginRight: "-10px"
                                                                }}
                                                            >
                                                                <div className="w-auto px-0 me-12">
                                                                    <div
                                                                        className="avatar-item d-flex align-items-center justify-content-center rounded-circle"
                                                                        style={{ width: 48, height: 48 }}
                                                                    >
                                                                        <img
                                                                            src="../../../app-assets/img/memoji/user-avatar-1.png"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="w-auto px-0 col">
                                                                    <p className="d-block fw-medium hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 mb-4">
                                                                        Debi Cakar
                                                                        <span className="hp-text-color-black-60">
                                                                            commented on
                                                                        </span>
                                                                        Ecosystem and conservation
                                                                    </p>
                                                                    <span className="d-block hp-badge-text fw-medium hp-text-color-black-60 hp-text-color-dark-40">
                                                                        1m ago
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="row hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 py-12 px-10"
                                                                style={{
                                                                    marginLeft: "-10px",
                                                                    marginRight: "-10px"
                                                                }}
                                                            >
                                                                <div className="w-auto px-0 me-12">
                                                                    <div
                                                                        className="avatar-item d-flex align-items-center justify-content-center rounded-circle"
                                                                        style={{ width: 48, height: 48 }}
                                                                    >
                                                                        <img
                                                                            src="../../../app-assets/img/memoji/user-avatar-2.png"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="w-auto px-0 col">
                                                                    <p className="d-block fw-medium hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 mb-4">
                                                                        Edward Adams{" "}
                                                                        <span className="hp-text-color-black-60">
                                                                            invite you
                                                                        </span>{" "}
                                                                        to Prototyping
                                                                    </p>
                                                                    <span className="d-block hp-badge-text fw-medium hp-text-color-black-60 hp-text-color-dark-40">
                                                                        9h ago
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="row hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 py-12 px-10"
                                                                style={{
                                                                    marginLeft: "-10px",
                                                                    marginRight: "-10px"
                                                                }}
                                                            >
                                                                <div className="w-auto px-0 me-12">
                                                                    <div
                                                                        className="avatar-item d-flex align-items-center justify-content-center rounded-circle"
                                                                        style={{ width: 48, height: 48 }}
                                                                    >
                                                                        <img
                                                                            src="../../../app-assets/img/memoji/user-avatar-3.png"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="w-auto px-0 col">
                                                                    <p className="d-block fw-medium hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 mb-4">
                                                                        Richard Charles{" "}
                                                                        <span className="hp-text-color-black-60">
                                                                            mentioned you in
                                                                        </span>{" "}
                                                                        UX Basics Field
                                                                    </p>
                                                                    <span className="d-block hp-badge-text fw-medium hp-text-color-black-60 hp-text-color-dark-40">
                                                                        13h ago
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="row hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 py-12 px-10"
                                                                style={{
                                                                    marginLeft: "-10px",
                                                                    marginRight: "-10px"
                                                                }}
                                                            >
                                                                <div className="w-auto px-0 me-12">
                                                                    <div
                                                                        className="avatar-item hp-bg-dark-success bg-success-4 d-flex align-items-center justify-content-center rounded-circle"
                                                                        style={{ width: 48, height: 48 }}
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            className="hp-text-color-success-1"
                                                                        >
                                                                            <path
                                                                                d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.78 7.7-5.67 5.67a.75.75 0 0 1-1.06 0l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06Z"
                                                                                fill="currentColor"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="w-auto px-0 col">
                                                                    <p className="d-block fw-medium hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 mb-4">
                                                                        <span className="hp-text-color-black-60">
                                                                            You swapped exactly
                                                                        </span>
                                                                        0.230000 ETH{" "}
                                                                        <span className="hp-text-color-black-60">
                                                                            for
                                                                        </span>{" "}
                                                                        28,031.99
                                                                    </p>
                                                                    <span className="d-block hp-badge-text fw-medium hp-text-color-black-60 hp-text-color-dark-40">
                                                                        17h ago
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="me-2 hp-basket-dropdown-button w-auto px-0 position-relative">
                                                <button
                                                    type="button"
                                                    className="btn btn-icon-only bg-transparent border-0 hp-hover-bg-black-10 hp-hover-bg-dark-100 hp-transition d-flex align-items-center justify-content-center"
                                                    style={{ height: 40 }}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={22}
                                                        height={22}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        className="hp-text-color-black-80 hp-text-color-dark-30"
                                                    >
                                                        <path
                                                            d="M8.4 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.9 7.5C20.76 19.99 20 22 16.5 22H7.51C4 22 3.24 19.99 3.54 17.53l.9-7.5C4.66 8.09 5 6.5 8.4 6.5Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8M20.41 17.03H8"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </button>
                                                {/* <div className="hp-basket-dropdown">
                                                    <div className="row px-0 justify-content-between align-items-center">
                                                        <h5 className="mb-0 w-auto hp-text-color-dark-15">
                                                            My Cart
                                                        </h5>
                                                        <div className="w-auto px-0 me-8">
                                                            <span className="d-inline-block hp-caption fw-medium w-auto hp-text-color-black-80 hp-text-color-dark-30">
                                                                1 Item
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="divider mt-24 mb-4" />
                                                    <div className="hp-basket-dropdown-list">
                                                        <div
                                                            className="hp-d-block hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 rounded py-8 px-10 hp-overflow-x-auto"
                                                            style={{ marginLeft: "-10px", marginRight: "-10px" }}
                                                        >
                                                            <div className="row flex-nowrap justify-content-between align-items-center">
                                                                <div
                                                                    className="col mt-4 pe-0"
                                                                    style={{ flex: "0 0 32px" }}
                                                                >
                                                                    <a >
                                                                        <div
                                                                            className="avatar-item d-flex align-items-center justify-content-center hp-bg-black-0 hp-bg-dark-100 rounded-circle"
                                                                            style={{ width: 35, height: 35 }}
                                                                        >
                                                                            <img src="../../../app-assets/img/product/watch-1.png" />
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div
                                                                    className="col ms-10 px-0"
                                                                    style={{ flex: "0 0 120px" }}
                                                                >
                                                                    <a >
                                                                        <h5 className="mb-0 fw-medium hp-p1-body hp-text-color-black-100 hp-text-color-dark-15">
                                                                            Smart Watches 3
                                                                        </h5>
                                                                        <p
                                                                            className="mb-0 hp-caption hp-text-color-black-60"
                                                                            style={{ marginTop: 1 }}
                                                                        >
                                                                            By{" "}
                                                                            <span className="hp-text-color-black-80">
                                                                                Sony
                                                                            </span>
                                                                        </p>
                                                                    </a>
                                                                </div>
                                                                <div
                                                                    className="col hp-d-flex hp-d-flex-column ms-8 px-0"
                                                                    style={{ flex: "0 0 70px" }}
                                                                >
                                                                    <div
                                                                        className="input-number input-number-sm"
                                                                        style={{ width: 65 }}
                                                                    >
                                                                        <div className="input-number-handler-wrap">
                                                                            <span className="input-number-handler input-number-handler-up">
                                                                                <span className="input-number-handler-up-inner">
                                                                                    <svg
                                                                                        viewBox="64 64 896 896"
                                                                                        width="1em"
                                                                                        height="1em"
                                                                                        fill="currentColor"
                                                                                    >
                                                                                        <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" />
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                            <span className="input-number-handler input-number-handler-down input-number-handler-down-disabled">
                                                                                <span className="input-number-handler-down-inner">
                                                                                    <svg
                                                                                        viewBox="64 64 896 896"
                                                                                        width="1em"
                                                                                        height="1em"
                                                                                        fill="currentColor"
                                                                                    >
                                                                                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="input-number-input-wrap">
                                                                            <input
                                                                                className="input-number-input"
                                                                                type="number"
                                                                                min={1}
                                                                                max={10}
                                                                                defaultValue={1}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="hp-cursor-pointer mt-4 hp-input-description fw-medium text-black-60 text-decoration-underline">
                                                                        Remove Item
                                                                    </div>
                                                                </div>
                                                                <div className="col ps-0 text-end">
                                                                    <p className="hp-basket-dropdown-list-item-price hp-p1-body mb-0 hp-text-color-black-80 hp-text-color-dark-30 fw-medium">
                                                                        $59.00
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="divider mt-4 mb-12" />
                                                    <div className="row">
                                                        <div className="col-6 px-8">
                                                            <a >
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-text w-100 hp-bg-black-20 hp-text-color-black-100 hp-hover-text-color-primary-1 hp-hover-bg-primary-4"
                                                                >
                                                                    View Cart
                                                                </button>
                                                            </a>
                                                        </div>
                                                        <div className="col-6 px-8">
                                                            <a >
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-text hp-text-color-black-0 hp-bg-black-100 hp-hover-bg-primary-1 w-100"
                                                                >
                                                                    Checkout
                                                                </button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="hover-dropdown-fade w-auto px-0 ms-6 position-relative">
                                                <div className="hp-cursor-pointer rounded-4 border hp-border-color-dark-80">
                                                    <div className="rounded-3 overflow-hidden m-4 d-flex">
                                                        <div
                                                            className="avatar-item hp-bg-info-4 d-flex"
                                                            style={{ width: 32, height: 32 }}
                                                        >
                                                            <img src="../../../app-assets/img/memoji/user-avatar-4.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="hp-header-profile-menu dropdown-fade position-absolute pt-18"
                                                    style={{ top: "100%", width: 260 }}
                                                >
                                                    <div className="rounded hp-bg-black-0 hp-bg-dark-100 px-18 py-24">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <a
                                                                    className="hp-p1-body fw-medium"
                                                                    href=""
                                                                >
                                                                    Account Settings
                                                                </a>
                                                            </div>
                                                            <div className="col-12 mt-24">
                                                                <a
                                                                    className="hp-p1-body fw-medium"
                                                                    href=""
                                                                    onClick={logout}
                                                                >
                                                                    Logout
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div
                        className="offcanvas offcanvas-start hp-mobile-sidebar bg-black-20 hp-bg-dark-90"
                        tabIndex={-1}
                        id="mobileMenu"
                        aria-labelledby="mobileMenuLabel"
                        style={{ width: 256 }}
                    >
                        <div className="offcanvas-header justify-content-between align-items-center ms-16 me-8 mt-16 p-0">
                            <div className="w-auto px-0">
                                <div className="hp-header-logo d-flex align-items-center">
                                    <a className="position-relative">
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

                                        target="_blank"
                                        className="d-flex"
                                    >
                                        <span className="hp-sidebar-hidden hp-caption fw-normal hp-text-color-primary-1">
                                            v.3.2
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-hidden"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            >
                                <button
                                    type="button"
                                    className="btn btn-text btn-icon-only bg-transparent"
                                >
                                    <i
                                        className="ri-close-fill lh-1 hp-text-color-black-80"
                                        style={{ fontSize: 24 }}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="hp-sidebar hp-bg-color-black-20 hp-bg-color-dark-90 border-end border-black-40 hp-border-color-dark-80">
                            <div className="hp-sidebar-container">
                                <div className="hp-sidebar-header-menu">
                                    <div className="row justify-content-between align-items-end mx-0">
                                        <div className="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-visible">
                                            <div className="hp-cursor-pointer">
                                                <svg
                                                    width={8}
                                                    height={15}
                                                    viewBox="0 0 8 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M3.91102 1.73796L0.868979 4.78L0 3.91102L3.91102 0L7.82204 3.91102L6.95306 4.78L3.91102 1.73796Z"
                                                        fill="#B2BEC3"
                                                    />
                                                    <path
                                                        d="M3.91125 12.0433L6.95329 9.00125L7.82227 9.87023L3.91125 13.7812L0.000224113 9.87023L0.869203 9.00125L3.91125 12.0433Z"
                                                        fill="#B2BEC3"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-auto px-0">
                                            <div className="hp-header-logo d-flex align-items-center">
                                                <a className="position-relative">
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

                                                    target="_blank"
                                                    className="d-flex"
                                                >
                                                    <span className="hp-sidebar-hidden hp-caption fw-normal hp-text-color-primary-1">
                                                        v.3.2
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-hidden">
                                            <div className="hp-cursor-pointer mb-4">
                                                <svg
                                                    width={8}
                                                    height={15}
                                                    viewBox="0 0 8 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M3.91102 1.73796L0.868979 4.78L0 3.91102L3.91102 0L7.82204 3.91102L6.95306 4.78L3.91102 1.73796Z"
                                                        fill="#B2BEC3"
                                                    />
                                                    <path
                                                        d="M3.91125 12.0433L6.95329 9.00125L7.82227 9.87023L3.91125 13.7812L0.000224113 9.87023L0.869203 9.00125L3.91125 12.0433Z"
                                                        fill="#B2BEC3"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="menu-title">DASHBOARDS</div>
                                            <ul>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Analytics"
                                                            aria-label="Analytics"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M8.97 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="m1.97 12.7 6-.02c.75 0 1.59.57 1.87 1.27l1.14 2.88c.26.65.67.65.93 0l2.29-5.81c.22-.56.63-.58.91-.05l1.04 1.97c.31.59 1.11 1.07 1.77 1.07h4.06"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Analytics</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="E-Commerce"
                                                            aria-label="E-Commerce"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M3 9.11v5.77C3 17 3 17 5 18.35l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11C21 7 21 7 19 5.65l-5.5-3.18c-.82-.48-2.17-.48-3 0L5 5.65C3 7 3 7 3 9.11Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>E-Commerce</span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="menu-title">APPLICATIONS</div>
                                            <ul>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Contact"
                                                            aria-label="Contact"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17 2.44v9.98c0 1.97-1.41 2.74-3.14 1.7l-1.32-.79c-.3-.18-.78-.18-1.08 0l-1.32.79C8.41 15.15 7 14.39 7 12.42V2.44"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17 2.44v9.98c0 1.97-1.41 2.74-3.14 1.7l-1.32-.79c-.3-.18-.78-.18-1.08 0l-1.32.79C8.41 15.15 7 14.39 7 12.42V2.44"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Contact</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="submenu-item">
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>E-commerce</span>
                                                        </span>
                                                        <div className="menu-arrow" />
                                                    </a>
                                                    <ul className="submenu-children" data-level={1}>
                                                        <li>
                                                            <a >
                                                                <span>Shop</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Wishlist</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Product Detail</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Checkout</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a style={{ pointerEvents: "none" }}>
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Mailbox"
                                                            aria-label="Mailbox"
                                                        />
                                                        <span>
                                                            <div className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M17.98 10.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeMiterlimit={10}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.98 6.79v4c0 2.94-1.35 4.52-4.04 4.75.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79h-6.4c-.26 0-.51.01-.75.04C6.27 3.35 7.86 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeMiterlimit={10}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M13.495 13.25h.01M9.995 13.25h.01M6.495 13.25h.01"
                                                                        stroke="currentColor"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <span>Mailbox</span>
                                                        </span>
                                                        <span className="badge hp-text-color-black-100 hp-bg-success-3 rounded-pill px-8 border-0 badge-none">
                                                            Coming soon
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="submenu-item">
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Knowledge Base</span>
                                                        </span>
                                                        <div className="menu-arrow" />
                                                    </a>
                                                    <ul className="submenu-children" data-level={1}>
                                                        <li>
                                                            <a >
                                                                <span>Knowledge Base 1</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Knowledge Base 2</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a style={{ pointerEvents: "none" }}>
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="File Manager"
                                                            aria-label="File Manager"
                                                        />
                                                        <span>
                                                            <div className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M3.01 11.22v4.49C3.01 20.2 4.81 22 9.3 22h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99ZM5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12ZM12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <span>File Manager</span>
                                                        </span>
                                                        <span className="badge hp-text-color-black-100 hp-bg-success-3 rounded-pill px-8 border-0 badge-none">
                                                            Coming soon
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="menu-title">PAGES</div>
                                            <ul>
                                                <li>
                                                    <a className="submenu-item">
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Authentication</span>
                                                        </span>
                                                        <div className="menu-arrow" />
                                                    </a>
                                                    <ul className="submenu-children" data-level={1}>
                                                        <li>
                                                            <a >
                                                                <span>Login Page V1</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Login Page V2</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Register Page V1</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Register Page V2</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Recover Password V1</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Recover Password V2</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Reset Password V1</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Reset Password V2</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="submenu-item">
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Error Pages</span>
                                                        </span>
                                                        <div className="menu-arrow" />
                                                    </a>
                                                    <ul className="submenu-children" data-level={1}>
                                                        <li>
                                                            <a >
                                                                <span>404</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>403</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>500</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>503</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>502</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Maintenance</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Coming Soon</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="submenu-item">
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Profile</span>
                                                        </span>
                                                        <div className="menu-arrow" />
                                                    </a>
                                                    <ul className="submenu-children" data-level={1}>
                                                        <li>
                                                            <a >
                                                                <span>Personel Information</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Notifications</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Activity Monitor</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Security Settings</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Password Change</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Connect with Social</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="submenu-item">
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Email</span>
                                                        </span>
                                                        <div className="menu-arrow" />
                                                    </a>
                                                    <ul className="submenu-children" data-level={1}>
                                                        <li>
                                                            <a

                                                                target="_blank"
                                                            >
                                                                <span>Hello</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a

                                                                target="_blank"
                                                            >
                                                                <span>Promotional</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a

                                                                target="_blank"
                                                            >
                                                                <span>Verify</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a

                                                                target="_blank"
                                                            >
                                                                <span>Reset Password</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a

                                                                target="_blank"
                                                            >
                                                                <span>Term</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a

                                                                target="_blank"
                                                            >
                                                                <span>Deactive Account</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="submenu-item">
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Lock Screen</span>
                                                        </span>
                                                        <div className="menu-arrow" />
                                                    </a>
                                                    <ul className="submenu-children" data-level={1}>
                                                        <li>
                                                            <a >
                                                                <span>Welcome</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Password Is Changed</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Deactivated</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Lock</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Landing"
                                                            aria-label="Landing"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Landing</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Pricing"
                                                            aria-label="Pricing"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Pricing</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Invoice"
                                                            aria-label="Invoice"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Invoice</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="FAQ"
                                                            aria-label="FAQ"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>FAQ</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Blank Page"
                                                            aria-label="Blank Page"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Blank Page</span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="menu-title">USER INTERFACE</div>
                                            <ul>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Typography"
                                                            aria-label="Typography"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM10 2v20M10 12h12"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Typography</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Buttons"
                                                            aria-label="Buttons"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM10 2v20M10 12h12"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Buttons</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Components"
                                                            aria-label="Components"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Components</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Charts"
                                                            aria-label="Charts"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Charts</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <div
                                                            className="tooltip-item in-active"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title=""
                                                            data-bs-original-title="Charts"
                                                            aria-label="Charts"
                                                        />
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>SelectBox</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="submenu-item">
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Icons</span>
                                                        </span>
                                                        <div className="menu-arrow" />
                                                    </a>
                                                    <ul className="submenu-children" data-level={1}>
                                                        <li>
                                                            <a >
                                                                <span>Remix Icons</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Iconly Icons</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Illustration Set</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Crypto Icons</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>User Icons</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Flags</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="submenu-item">
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Page Layouts</span>
                                                        </span>
                                                        <div className="menu-arrow" />
                                                    </a>
                                                    <ul className="submenu-children" data-level={1}>
                                                        <li>
                                                            <a >
                                                                <span>Boxed Layout</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Vertical Layout</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Horizontal Layout</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Full Layout</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="submenu-item">
                                                        <span>
                                                            <span className="submenu-item-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>Cards</span>
                                                        </span>
                                                        <div className="menu-arrow" />
                                                    </a>
                                                    <ul className="submenu-children" data-level={1}>
                                                        <li>
                                                            <a >
                                                                <span>Advance</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Statistics</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a >
                                                                <span>Analytics</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row justify-content-between align-items-center hp-sidebar-footer mx-0 hp-bg-color-dark-90">
                                    <div className="divider border-black-40 hp-border-color-dark-70 hp-sidebar-hidden mt-0 px-0" />
                                    <div className="col">
                                        <div className="row align-items-center">
                                            <div className="w-auto px-0">
                                                <div
                                                    className="avatar-item bg-primary-4 d-flex align-items-center justify-content-center rounded-circle"
                                                    style={{ width: 48, height: 48 }}
                                                >
                                                    <img
                                                        src="../../../app-assets/img/memoji/user-avatar-8.png"
                                                        height="100%"
                                                        className="hp-img-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-auto ms-8 px-0 hp-sidebar-hidden mt-4">
                                                <span className="d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body lh-1">
                                                    Jane Doe
                                                </span>
                                                <a

                                                    className="hp-badge-text fw-normal hp-text-color-dark-30"
                                                >
                                                    View Profile
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col hp-flex-none w-auto px-0 hp-sidebar-hidden">
                                        <a >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 24 24"
                                                className="remix-icon hp-text-color-black-100 hp-text-color-dark-0"
                                                height={24}
                                                width={24}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hp-main-layout-content">
                        {children}
                    </div>
                    {/* <footer className="w-100 py-18 px-16 py-sm-24 px-sm-32 hp-bg-color-black-20 hp-bg-color-dark-90">
                        <div className="row">
                            <div className="col-12">
                                <p className="hp-badge-text fw-semibold mb-0 text-center text-sm-start hp-text-color-dark-30">
                                    COPYRIGHT ©2021 Hypeople, All rights Reserved
                                </p>
                            </div>
                        </div>
                    </footer> */}
                </div>
            </main>
            <div className="scroll-to-top">
                <button
                    type="button"
                    className="btn btn-primary btn-icon-only rounded-circle hp-primary-shadow"
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height="16px"
                        width="16px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />
                        </g>
                    </svg>
                </button>
            </div>
        </>
    )
}