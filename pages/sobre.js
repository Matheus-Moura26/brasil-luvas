import Link from 'next/link';
import styles from "../styles/sobre.module.css"
import { useEffect } from 'react';
import Aos from "aos"
import 'aos/dist/aos.css'

function Sobre() {

    useEffect(() => { 
        Aos.init({duration: 1500});
    }, [])

    return (
        <div>

            <main className={styles.sobreBox}>
                <div data-aos="fade-up" className={styles.sobreCardTextLeft}>
                    <p className={styles.sobreTxt}>
                        A Brasil Luvas é uma empresa líder no mercado de equipamentos de segurança e ferramentas para construção civil. Atuando há mais de 20 anos, a empresa é especializada na representação de produtos de alta qualidade, com foco na satisfação dos clientes.
                    </p>
                </div>

                <div data-aos="fade-right" className={styles.sobreCardTextRight}>
                    <p className={styles.sobreTxt}>
                        Fundada em 26 de junho de 2000, a Brasil Luvas tem como missão fornecer os melhores equipamentos de segurança e ferramentas para construção civil em geral, com um atendimento personalizado e um alto padrão de qualidade. A empresa tem uma equipe de profissionais altamente capacitados e comprometidos com a satisfação dos clientes.
                    </p>
                </div>

                <div data-aos="fade-left" className={styles.sobreCardTextLeft}>
                    <p className={styles.sobreTxt}>
                        Sediada em Goiás e atende também o Distrito Federal. Além disso, a empresa oferece entrega em todo o Brasil, com o frete por conta do cliente e a entrega feita através de transportadora, garantindo a segurança e a rapidez na entrega dos produtos.
                    </p>
                </div>

                <div data-aos="fade-down" className={styles.sobreCardTextRight}>
                    <p className={styles.sobreTxt}>
                        A ampla variedade de produtos oferecidos pela Brasil Luvas inclui equipamentos de proteção individual (EPIs), como luvas, capacetes, botas, óculos de proteção, entre outros, além de ferramentas para construção civil, como serras, martelos, furadeiras, entre outras. Todos os produtos são de marcas reconhecidas no mercado, garantindo a qualidade e a segurança para os usuários.
                    </p>
                </div>

                <div data-aos="fade-up" className={styles.sobreCardTextLeft}>
                    <p className={styles.sobreTxt}>
                        Com a Brasil Luvas, os clientes podem contar com um atendimento personalizado e eficiente, além de produtos de alta qualidade e preços competitivos. A empresa está sempre em busca de novas soluções e tecnologias para oferecer aos clientes o que há de melhor no mercado de equipamentos de segurança e ferramentas para construção civil.
                    </p>
                </div>
                

                

                

                

                
            </main>
        </div>
    )
}

export default Sobre