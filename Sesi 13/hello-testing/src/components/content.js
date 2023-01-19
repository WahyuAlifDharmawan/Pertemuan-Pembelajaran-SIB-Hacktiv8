import React from "react";

const Content = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Why do you we need test?</h1>
                <p className="col-md-8 fs-4">
                    To guarantee our code quality. And to show the people that we also care about it and wish to give something that already proven, at least by ourself.
                </p>

                <a href="/users">
                    <button
                        className="btn btn-primary btn-lg"
                        type="button">Users List</button> </a>
                <a href="/aboutme">
                    <button
                        className="btn btn-primary btn-lg"
                        type="button">About Me</button> </a>
            </div>
        </>
    );
};

export default Content;