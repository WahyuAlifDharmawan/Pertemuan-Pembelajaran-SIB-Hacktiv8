import logo from './logo.svg';
import './App.css';
import Content from "./components/content";
import Users from './components/users';
import { Route, Routes } from 'react-router-dom';
import Aboutme from './components/aboutme';
import Profile from './foto/profile.jpg';

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/users' element={<Users />} />
          <Route path='/aboutme' element={<Aboutme />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
