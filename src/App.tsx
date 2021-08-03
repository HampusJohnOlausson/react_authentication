import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Pages/Login';
import Nav from './Components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';

function App() {

   const [name, setName] = useState("");

   useEffect(() => {
     (
       async () => {
       const response = await fetch("http://localhost:8000/api/user", {
         headers: { "Content-Type": "application/json" },
         credentials: "include",
       });

       const content = await response.json();

       setName(content.name);
     } 
     )();
   });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName} />

        <main className="form-signin">
          <Route path="/" exact component={() => <Home name={name}/>}/>
          <Route path="/login" component={() => <Login setName={setName}/>}/>
          <Route path="/register" component={Register} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
