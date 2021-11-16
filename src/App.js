import './App.css';


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Headbar } from './myComponent/headbar';
import { Home } from './myComponent/home';
import { About } from './myComponent/about';
import { Buisness } from './myComponent/buisness';
import { Nature } from './myComponent/nature';
function App() {
  

  return (
    <>
    <Router>
    <Headbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/buisness" element={<Buisness/>}/>
        <Route path="/nature" element={<Nature/>}/>
      </Routes>
    </Router>
    </>
   
  );
}
export default App;
