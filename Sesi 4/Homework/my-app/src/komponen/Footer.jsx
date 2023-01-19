import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href=' https://www.hacktiv8.com/full-stack-javascript-immersive?utm_source=google&utm_medium=cpc&utm_campaign=Brand-all&utm_content=hacktiv8&utm_term=responsive-ads&gclid=CjwKCAjw9suYBhBIEiwA7iMhNCpnkvHcni3eYALJtTPUCRSJHRHKeZTmnlNB_L9la7e1Hm5JdHJ_WRoCX9AQAvD_BwE'>
                    Hacktiv8.com
                </a>
            </div>
        </MDBFooter>
    )
}

export default Footer;