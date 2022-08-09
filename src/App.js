import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import ListArsip from './pages/Arsip/List';
import DetailBerita from './pages/Berita/Detail';
import ListBerita from './pages/Berita/List';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact children={() => <Home />} />
          <Route path="/detail-berita" children={() => <DetailBerita />} />
          <Route path="/list-berita" children={() => <ListBerita />} />
          <Route path="/list-arsip" children={() => <ListArsip />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;