import Link from 'next/link';
import { useState } from 'react';



function Home() {

    const [active, setActive] = useState(false);

    return (
        <body>
                <header>
                    <nav>
                        <Link className='logo' href="/">Brasil Luvas</Link>
                        <div onClick={() => setActive(!active)} className='mobileMenu'>
                            <div className={active? 'mobileMenuLine1 active' : 'mobileMenuLine1'}></div>
                            <div className={active? 'mobileMenuLine2 active' : 'mobileMenuLine2'}></div>
                            <div className={active? 'mobileMenuLine3 active' : 'mobileMenuLine3'}></div>
                        </div>
                        <ul className={active? 'navList active': 'navList'}>
                            <li>
                                <Link className={active? 'navBarLink active' : 'navBarLink'} href="/produtos">Produtos</Link>
                            </li>
                            <li>
                                <Link className={active? 'navBarLink active' : 'navBarLink'}  href="/sobre">Sobre</Link>
                            </li>
                            <li>
                                <Link className={active? 'navBarLink active' : 'navBarLink'}  href="/contatos">Contatos</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <h1>Home</h1>
                </main>
        </body>
    )
}

export default Home