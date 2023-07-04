import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home';
// import Index from './Component/Index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        {/* <Route exact path='/index' element={<Index/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
