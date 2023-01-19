import React from "react";
import Profile from "../foto/profile.jpg";
const Aboutme = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <a href="/">
                    <button type="button" className="btn btn-outline-primary">
                        Back
                    </button>
                </a>
                <h1 className="display-5 fw-bold">About Me</h1>
                <img className="w-1/2 md:ml-auto" src={Profile} />
            <p className="col-md-8 fs-4">
                Perkenalkan nama saya Wahyu Alif Dharmawan, saya seorang mahasiswa dari Universitas Dian Nuswantoro. Hobi saya adalah berolah raga, khususnya bulu tangkis. Motivasi saya mengikuti Studi Independen adalah mencari pengalaman dan menambah wawasan tentang pemprograman yang sebenarnya saya awam tentang React dan React Native.
            </p>
            <p className="col-md-8 fs-4">
                Nama    : Wahyu Alif Dharmawan
            </p>
            <p className="col-md-8 fs-4">
                Kelas   : RCTN-KS05-014
            </p>
            <p className="col-md-8 fs-4">
                Progres : Sesi 1-12 sudah
            </p>

            {/* <a href="/">
                        <button
                            className="btn btn-primary btn-lg"
                            type="button">Home</button> </a>
                    <a href="/users">
                        <button
                            className="btn btn-primary btn-lg"
                            type="button">Users List</button> </a> */}
        </div>
        </>
    );
};

export default Aboutme;