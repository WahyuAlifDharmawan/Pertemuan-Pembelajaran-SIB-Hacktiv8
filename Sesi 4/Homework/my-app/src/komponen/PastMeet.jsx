import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBBtn,
    MDBTypography,
    MDBCardGroup
} from 'mdb-react-ui-kit';

const PastMeet = () => {
    return (
        <MDBCard className='ms-4 text-start' >
            <MDBRow className="g-0 text-start mb-2">
                <MDBRow className='text-start'>
                    <MDBTypography tag='h3' className='mb-4'>Past Meetup</MDBTypography>
                    <MDBCardGroup className='mb-4'>
                        <MDBCard>
                            <MDBCardBody className='g-0'>
                                <MDBCardTitle>1 September 2022</MDBCardTitle>
                                <MDBCardText>
                                    Workshop Semarang
                                </MDBCardText>
                                <MDBCardText className='text-muted'>
                                    140 went
                                </MDBCardText>
                                <MDBBtn href='#'>View</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>2 September 2022</MDBCardTitle>
                                <MDBCardText>
                                    Workshop Surabaya
                                </MDBCardText>
                                <MDBCardText className='text-muted'>
                                    120 went
                                </MDBCardText>
                                <MDBBtn href='#'>View</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>3 September 2022</MDBCardTitle>
                                <MDBCardText>
                                    Workshop Jakarta
                                </MDBCardText>
                                <MDBCardText className='text-muted'>
                                    220 went
                                </MDBCardText>
                                <MDBBtn href='#'>View</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCardGroup>
                </MDBRow>
            </MDBRow>
        </MDBCard>
    )
}

export default PastMeet;