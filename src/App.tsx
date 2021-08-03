import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Nav from './Components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <main className="form-signin">
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
