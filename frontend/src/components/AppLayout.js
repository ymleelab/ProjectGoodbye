import React from 'react';

import Footer from './Footer';
import NavBar from './NavBar';

const AppLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default AppLayout;