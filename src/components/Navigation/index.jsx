import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Navigation = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    }
    setInterval(() => setDateTime(new Date()), 1000);
  }, [])

  return (
    <div>
      <div className={`navbar ${stickyNav ? 'sticky' : ''}`} id="navbar">
        <p>
          {dateTime.toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}, {dateTime.toLocaleString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          })} WIB
        </p>
        <div className="navbar-menu">
          <a className="active" href="#beranda">Beranda</a>
          <a href="#kategori">Kategori</a>
          <a href="#arsip-nasional">Arsip Nasional</a>
        </div>
      </div>
    </div>
    // <nav className="navbar navbar-expand-lg bg-light">
    //   <div className="container">
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#home">Home</a>
    //         </li>
    //       </ul>
    //       <ul className="navbar-nav d-flex">
    //         <li className="nav-item">
    //           <a href="#beranda" className="nav-link">Beranda</a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="#kategori" className="nav-link">Kategori</a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="#arsip-nasional" className="nav-link">Arsip Nasional</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navigation;