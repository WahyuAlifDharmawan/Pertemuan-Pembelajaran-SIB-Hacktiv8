import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import Logo from "../assets/Logo.jpg"

const Header = () => {
    return (
        <MDBRow>
            <MDBRow className='g-0 mb-4'>
                <MDBCol md='6'>
                    <MDBCardImage src={Logo} fluid alt='...' />
                </MDBCol>
                <MDBCol md='4' className='text-start'>
                    <MDBCardBody>
                        <MDBCardTitle><strong>Hacktiv8 Meetup</strong></MDBCardTitle>
                        <MDBCardText>
                            <br></br>
                            <p>Location    : Jakarta, Indonesia</p>
                            <p>Member      : 666</p>
                            <p>Organizers  : Adhy Wiranata</p>
                        </MDBCardText>
                        <MDBCardText>
                            <MDBBtn>Join Us</MDBBtn>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBRow>
    )
}

export default Header;