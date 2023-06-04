import logo from './logo.svg';
import './App.css';
import ChartComponent from './components/ChartComponent';
import AdminView from './components/AdminView';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
    <Navbar/>
    {/* <AdminView/> */}
    </BrowserRouter>
     {/* <h1>Application using ReactJS,TailwindCSS and SpringBoot</h1> */}
     {/* <ChartComponent/> */}
     </React.Fragment>
  );
}

export default App;
