import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';
import './sass/App.scss';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log(isMobileMenuOpen);
  }, [isMobileMenuOpen]);
  return (
    <div className='App'>
      <Nav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Route>
        <Route path='/'>
          <Home />
        </Route>
      </Route>
    </div>
  );
}

export default App;
