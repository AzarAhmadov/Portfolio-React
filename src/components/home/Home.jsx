import About from '../About';
import Banner from '../Hero';
import Contact from '../Contact';
import Exprience from '../Experience';
import Portfolio from '../Portfolio';
import Services from '../Services';
import Skilss from '../Skills';


const Home = () => {
    return (
        <main>
            <Banner />
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
