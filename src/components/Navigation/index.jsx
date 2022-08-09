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
          {/* to utils.js */}
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
          {/* to utils.js */}
        </p>
        <div className="navbar-menu">
          <NavLink
            className={isActive =>
              (!isActive ? "active" : "")
            }
            to="/"
          >
            Beranda
          </NavLink>
          <NavLink to="/list-berita">Kategori</NavLink>
          <NavLink to="/list-arsip">Arsip Nasional</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navigation;