import Link from 'next/link';

function Contatos() {
    return (
        <div>
                <header>
                    <nav>
                    <Link className='logo' href="/">Brasil Luvas</Link>
                        <ul className='navList'>
                            <li>
                                <Link className='navBarLink' href="/produtos">Produtos</Link>
                            </li>
                            <li>
                                <Link className='navBarLink' href="/sobre">Sobre</Link>
                            </li>
                            <li>
                                <Link className='navBarLink' href="/contatos">Contatos</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <h1>Contratos</h1>
                </main>
        </div>
    )
}

export default Contatos