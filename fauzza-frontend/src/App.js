
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NabBar';
import NavRouter from './router/NavRouter';

function App() {
  return (
    <>
      <NavBar />
      <div className="pages_loading_section">
        <NavRouter/>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
