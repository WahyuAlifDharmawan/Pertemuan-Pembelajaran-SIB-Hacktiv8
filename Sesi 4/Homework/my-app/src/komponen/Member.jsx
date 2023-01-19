import React from "react";
import {
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
    MDBCardBody,
    MDBTypography,
    MDBCard,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink
} from "mdb-react-ui-kit";
import Author from "../assets/Author.jpg"

const Member = () => {
    return (
        <MDBCard className='ms-4 text-start' >
            <MDBRow className="g-0 text-start mb-2">
                <MDBTypography
                    tag="h3">Members
                    
                </MDBTypography>
                <MDBCardBody>
                    <MDBListGroup light className="mb-4">
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img
                                    src={Author}
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Wahyu Alif Dharmawan</p>
                                    <p className="text-muted mb-0">wahyualifdharmawan8@gmail.com</p>
                                </div>
                            </div>
                        </MDBListGroupItem>
                    </MDBListGroup>
                </MDBCardBody>
            </MDBRow>
        </MDBCard>
    )
}

export default Member;