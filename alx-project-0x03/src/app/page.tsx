import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to ALX Project 0x03</h1>
                <p>This is the home page of the application.</p>
                <button>Sign In</button>
                <button>Sign Up</button>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;