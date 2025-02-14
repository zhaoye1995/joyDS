import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    // <BrowserRouter>
    //   <Routes>
    //     Hello
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </BrowserRouter>
    <h1>Helloworld!</h1>
  );
}

export default App
