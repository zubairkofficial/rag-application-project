import { Layout } from "../../Components/Layout";

export function Home() {
    return (
        <Layout>
            <div className="row">
                <div className="col-12">
                    <h1 className="mb-0 hp-text-color-black-0">
                        {" "}
                        Blank Page{" "}
                    </h1>
                </div>
                <div className="col-12">
                    <ol className="breadcrumb mt-24">
                        <li className="breadcrumb-item breadcrumb-link">
                            <a href="https://yoda.hypeople.studio/"> Home </a>
                        </li>
                        <li className="breadcrumb-item">
                            <a >
                                <span className="hp-text-color-black-0">
                                    {" "}
                                    Pages{" "}
                                </span>
                            </a>
                        </li>
                        <li className="breadcrumb-item">
                            <a >
                                <span className="hp-text-color-black-0">
                                    {" "}
                                    Blank Page{" "}
                                </span>
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </Layout>
    );
}