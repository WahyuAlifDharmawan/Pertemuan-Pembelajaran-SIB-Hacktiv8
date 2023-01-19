import logo from './logo.svg';
import './App.css';
import Navbar from './komponen/Navbar';
import Header from './komponen/Header.jsx';
import Konten from './komponen/Konten';
import AboutMeet from './komponen/AboutMeet';
import Member from './komponen/Member';
import PastMeet from './komponen/PastMeet';
import Footer from './komponen/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Konten />
      <AboutMeet />
      <Member />
      <PastMeet />
      <Footer />
    </div>
    
  );
}

export default App;
