import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/contact" component={ContactForm} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div >
    </Router>
  );
}

export default App;
