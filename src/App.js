import Tours from './components/Tours';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

export default function App() {
    return (
        <body>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Tours />
            <Footer />
        </body>
    );
}
