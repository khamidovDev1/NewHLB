import './App.scss';
import Container1 from './components/Container1/Container1.js';
import Container2 from './components/Container2/Container2.js';
import Container3 from './components/Container3/Container3.js';
import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Container1 />
            <Container2 />
            <Container3 />
            <Footer />
        </div>
    );
}

export default App;
