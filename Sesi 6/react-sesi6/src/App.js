import logo from './logo.svg';
import './App.css';
import Users from './Statefull Component/Users';
import Counter from './Hooks-UseState/Counter';
import Example from './Hooks-UseState/Example';
import Movie from './Stateless Component/Movie';


function Header(){
  return(
    <header className='header'>
      <h1>My First React App</h1>
    </header>
  )
}

function Content(){
  return(
    <div className='content'>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )

}

function Footer(){
  return(
    <div className='footer'>
      <p>&copy; My self - 2021</p>
    </div>
  )
}

function App() {
  const movieProps = {
    title : "Perahu-perahu kertas",
    year : 2017, 
    rating: "9/10",
  }

  return (
    <div className="App">
         <Header/>
        <hr/>
        <Content/>
        <Users/>
        <Counter initialCount={1}/>
        <Example/>
        <hr/>
        <Footer/> 
    </div>
  );
}

export default App;
