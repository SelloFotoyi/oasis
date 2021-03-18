import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import './css/App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log(isMobileMenuOpen);
  }, [isMobileMenuOpen]);
  return (
    <div className='App'>
      <Route>
        <Nav
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </Route>
    </div>
  );
}

export default App;
