import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar expand='lg' dark bgColor='dark' className='mb-2'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>QTemu</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Create Meetup
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Explore</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
      <MDBCollapse className='d-flex w-auto'>
        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>Login</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default Navbar;

