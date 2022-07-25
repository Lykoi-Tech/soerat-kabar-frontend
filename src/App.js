import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './pages/Detail';
import Home from './pages/Home';
import List from './pages/List';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact children={() => <Home />} />
          <Route path="/detail" children={() => <Detail />} />
          <Route path="/list" children={() => <List />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;