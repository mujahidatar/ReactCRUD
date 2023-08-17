// import logo from './logo.svg';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './CRUD/Add'
import Dashboard from './CRUD/Dashboard'
import Edit from './CRUD/Edit'
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 style={{ color: "red", backgroundColor: "black", textShadow: "1px 1px white" }}>Welcome you all in this react session</h1>
      <div className='card container border-success border-5'>
      <div className='card-header border-primary border-3'>
          <h1>This is Card Header</h1>
      </div>
        <div className='card-body'>
          <BrowserRouter>
            <Routes>
              <Route path="/add" element={<Add />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/comp1" element={<Comp1 />}>
                <Route path="/comp1/comp2" element={<Comp2 />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
          
        </div>
      </div>
      

    </div>
  );
}

export default App;
