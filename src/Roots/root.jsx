import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const root = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className="pt-12 md:pt-16 mt-2 ">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default root;