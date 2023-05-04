import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1>

            <Link href="/sobre">Acessar a pagina sobre</Link>
            
        </div>
    )
}

export default Home