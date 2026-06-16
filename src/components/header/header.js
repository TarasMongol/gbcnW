import React, { useState, useEffect } from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = () => {
      const stored = localStorage.getItem('user_session');
      if (stored) {
        try {
          setUser(JSON.parse(stored));
        } catch (e) {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    checkUser();
    window.addEventListener('storage', checkUser);
    return () => {
      window.removeEventListener('storage', checkUser);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user_session');
    setUser(null);
    window.dispatchEvent(new Event('storage'));
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Football 2027', path: '/football-2027' },
    { name: 'Business', path: '/business' },
    { name: 'Technology', path: '/technology' },
    { name: 'Health', path: '/health' },
    { name: 'Culture', path: '/culture' },
    { name: 'Arts', path: '/arts' },
    { name: 'Travel', path: '/travel' },
    { name: 'Earth', path: '/earth' },
    { name: 'Sport', path: '/sport' },
    { name: 'Audio', path: '/audio' },
    { name: 'Video', path: '/video' },
    { name: 'Live', path: '/live' }
  ];

  return (
    <header className="gbc-header">
      <div className="header-top-bar">
        {}
        <div className="header-left-section">
          <button className="hamburger-menu-btn" aria-label="Menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          
          <div className="header-separator"></div>
          
          <a href="/watch-live" className="watch-live-link" onClick={(e) => e.preventDefault()}>
            <svg className="play-icon" viewBox="0 0 24 24" fill="#FF0000">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="watch-live-text">Watch live</span>
          </a>
        </div>

        {}
        <div className="header-center-section">
          <div className="logo-container">
            <div className="logo-box"><span className="logo-letter">G</span></div>
            <div className="logo-box"><span className="logo-letter">B</span></div>
            <div className="logo-box"><span className="logo-letter">C</span></div>
          </div>
          <div className="corporation-title">GLOBAL BROADCASTING CORPORATION</div>
        </div>

        {}
        <div className="header-right-section">
          <button className="search-btn" onClick={(e) => e.preventDefault()}>
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className="search-text">Search</span>
          </button>

          <div className="auth-btn-wrapper">
            {user ? (
              <div className="header-logged-in-profile">
                <svg className="profile-icon" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div className="profile-dropdown-container">
                  <span className="profile-email" title={user.email}>{user.email}</span>
                  <button onClick={handleSignOut} className="sign-out-link">Sign Out</button>
                </div>
              </div>
            ) : (
              <Link to="/register" className="header-signin-link">
                <svg className="profile-icon" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span className="signin-text">Sign in</span>
              </Link>
            )}
          </div>

          <Link to="/gbc-st" className="subscribe-btn">
            <span className="subscribe-title">GBC+</span>
            <span className="subscribe-subtitle">Subscribe</span>
          </Link>
        </div>
      </div>

      <div className="header-nav-bar-container">
        <nav className="header-nav-bar">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}