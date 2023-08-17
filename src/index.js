import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import reportWebVitals from './reportWebVitals';
// import ParentComp from './components/parentComp';
// import Fruits from './components/fruits';
// import Dashboard from './CRUD/Dashboard';
// import FavColor from './components/favColor';
// import FormComponent from './components/formComponent';
// import FunComp from "./components/funComp";
// import ClsComp from './components/clsComp';
// import FcComp from './components/fcComp';
// import ClComp from './components/clComp';
// import MyEventsCom from './components/MyEventsCom';
// import MyImage from './components/myImage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
