import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import AllGamesCard from '../components/AllGamesCard';
import About from '../pages/About';
import { LogIn } from 'lucide-react';
import Register from '../pages/Register';
import Login from '../pages/Login';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet>
                    <Home></Home>
                    <AllGamesCard></AllGamesCard>
                    <About></About>
                    <Login></Login>
                    <Register></Register>
                </Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;