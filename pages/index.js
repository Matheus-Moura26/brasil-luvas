import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/navbar';



function Home() {

    return (
        <div>
                <header>
                    <Navbar />
                </header>

                <main>
                    <h1>Home</h1>
                </main>
        </div>
    )
}

export default Home