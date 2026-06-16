import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  const mainLinks = [
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
    { name: 'Live', path: '/live' },
    { name: 'Weather', path: '/weather' },
    { name: 'BBC Shop', path: '/shop' }
  ];

  const legalLinks = [
    { name: 'Terms of Use', path: '/terms' },
    { name: 'Subscription Terms', path: '/gbc-st', isRouterLink: true },
    { name: 'About the BBC', path: '/about' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookies', path: '/cookies' },
    { name: 'Accessibility Help', path: '/accessibility' },
    { name: 'Advertise with us', path: '/advertise' },
    { name: 'Do not share or sell my info', path: '/do-not-sell' },
    { name: 'BBC.com Help & FAQs', path: '/help' },
    { name: 'Content Index', path: '/index' },
    { name: 'Set Preferred Source', path: '/preferred-source' }
  ];

  return (
    <footer className="gbc-footer">
      <div className="footer-inner">
        <div className="footer-panel-links">
          <div className="footer-nav-grid">
            {mainLinks.map((link) => (
              <a key={link.name} href={link.path} className="footer-main-link">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-social-bar">
          <span className="follow-text">Follow BBC on:</span>
        </div>

        <div className="footer-legal-links">
          {legalLinks.map((link) => (
            link.isRouterLink ? (
              <Link key={link.name} to={link.path} className="footer-legal-link">
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.path} className="footer-legal-link">
                {link.name}
              </a>
            )
          ))}
        </div>

        <p className="footer-copyright">
          Copyright 2026 BBC. All rights reserved. The BBC is not responsible for the content of external sites. Read about our approach to external linking.
        </p>
      </div>
    </footer>
  );
}
