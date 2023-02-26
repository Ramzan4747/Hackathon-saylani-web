import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Header/Navbar'
import AllEvents from './AllEvents/AllEvents'
import CreateEvents from './CreateEvents'
import Home from './Home'
import UserEvents from './UserEvents/UserEvents'
export default function index() {
    return (
        <>
            <Navbar />
                <main>
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/createEvents' element={<CreateEvents />} />
                    <Route path='/allEvents' element={<AllEvents />} />
                    <Route path='/userEvents' element={<UserEvents />} />
            </Routes>
                </main>
            <Footer />
        </>
    )
}
