import { useState } from "react";
import "./App.css";
import Header from "./components/kode/Header";
import Content from "./components/kode/Content";
import Footer from "./components/kode/Footer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;