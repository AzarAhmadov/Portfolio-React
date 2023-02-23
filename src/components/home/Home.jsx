import About from '../home/About';
import Hero from '../home/Hero';
import Contact from '../home/Contact';
import Exprience from '../home/Experience';
import Portfolio from '../home/Portfolio'
import Services from '../home/Services';
import Skilss from '../home/Skills';


const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skilss />
            <Exprience />
            <Services />
            <Portfolio />
            <Contact />
        </main>
    );
}

export default Home;
