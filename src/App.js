import { Fragment } from 'react';
import classes from './App.module.css';

import MainNavigation from './components/Navigation/MainNavigation';
import Footer from './components/Footer/Footer';
import MarketingContainer from './components/Marketing/MarketingContainer';


function App() 
{
  return (
    <Fragment>
      <header>
        <MainNavigation/>
      </header>
      <main>
        <MarketingContainer/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Fragment>
  );
}

export default App;
