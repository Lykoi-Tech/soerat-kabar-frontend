import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Navigation = () => {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    }
  })

  return (
    <div>
      <div className={`navbar ${stickyNav ? 'sticky' : ''}`} id="navbar">
        <p>Selasa, 5 Juli 2022, 10:34 WIB</p>
        <div className="navbar-menu">
          <a className="active" href="#beranda">Beranda</a>
          <a href="#kategori">Kategori</a>
          <a href="#arsip-nasional">Arsip Nasional</a>
        </div>
      </div>
    </div>
  )
}

export default Navigation;