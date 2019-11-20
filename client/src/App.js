import React, {Fragment} from 'react';
import './App.css';
import Navigation from './components/layout/Navigation';
import Landing from './components/layout/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => 
    <Fragment>
      <Navigation/>
      <Landing />
    </Fragment>
  


export default App;
