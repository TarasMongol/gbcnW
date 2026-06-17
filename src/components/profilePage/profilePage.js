import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './profilePage.css';
import profileBanner from '../../imgs/profile_banner.png';
import privacyBanner from '../../imgs/privacy_banner.png';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');

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
    navigate('/');
  };

  const tabs = ['Overview', 'Settings', 'Your comments', 'Sign out'];

  const handleTabClick = (tab) => {
    if (tab === 'Sign out') {
      handleSignOut();
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="gbc-profile-page-container">
      {/* Top Profile Banner Section */}
      <div className="profile-hero-section" style={{ backgroundImage: `url(${profileBanner})` }}>
        <div className="profile-hero-overlay">
          <span className="profile-welcome-subtitle">Welcome to your GBC</span>
          <h1 className="profile-welcome-title">Lovely to see you here</h1>
          
          <button className="profile-settings-btn" onClick={() => setActiveTab('Settings')}>
            Continue to Settings
          </button>
        </div>
      </div>

      {/* Profile Navigation Bar */}
      <div className="profile-nav-bar">
        <div className="profile-nav-left">
          <h2 className="profile-nav-title">Your account</h2>
        </div>
        <div className="profile-nav-right">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`profile-nav-item ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
              {activeTab === tab && <div className="profile-active-indicator"></div>}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tab Contents */}
      <div className="profile-content-area">
        {activeTab === 'Overview' && (
          <div className="profile-tab-content overview-content">
            <h3 className="content-section-title">Account Overview</h3>
            {user ? (
              <div className="profile-details-card">
                <div className="profile-avatar-placeholder">
                  {user.email.substring(0, 2).toUpperCase()}
                </div>
                <div className="profile-info-fields">
                  <div className="info-row">
                    <span className="info-label">Email Address</span>
                    <span className="info-value">{user.email}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Account Status</span>
                    <span className="info-value status-active">Active (GBC Member)</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Session ID</span>
                    <span className="info-value session-id">GBC-SEC-8729130</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="profile-not-signed-in">
                <p>You are not currently signed in.</p>
                <button className="profile-auth-redirect-btn" onClick={() => navigate('/register')}>
                  Sign In / Register
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'Settings' && (
          <div className="profile-tab-content settings-content">
            <h3 className="content-section-title">Account Settings</h3>
            <div className="settings-options-grid">
              <div className="settings-option-card">
                <h4>Email Newsletter Preferences</h4>
                <p>Manage notifications, newsletters, and breaking news alerts.</p>
                <button className="settings-option-btn">Edit Preferences</button>
              </div>
              <div className="settings-option-card">
                <h4>Change Password</h4>
                <p>Update your password to keep your account secure.</p>
                <button className="settings-option-btn">Change Password</button>
              </div>
              <div className="settings-option-card">
                <h4>Delete Account</h4>
                <p>Permanently close your GBC profile account and remove data.</p>
                <button className="settings-option-btn delete-btn">Delete Profile</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Your comments' && (
          <div className="profile-tab-content comments-content">
            <h3 className="content-section-title">Your Comments</h3>
            <div className="no-comments-placeholder">
              <svg className="comments-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <p>You haven't posted any comments yet.</p>
              <span>Comments you make on articles will show up here.</span>
            </div>
          </div>
        )}
      </div>

      {/* Privacy and GBC Section at the Bottom */}
      <div className="profile-privacy-section" style={{ backgroundImage: `url(${privacyBanner})` }}>
        <div className="privacy-highlight-overlay">
          <div className="privacy-card-blue">
            <h2 className="privacy-card-title">Your privacy and the GBC</h2>
          </div>
          <p className="privacy-card-text">
            Want to know what's happening with your info and how you can take control? Find out more
          </p>
          <button className="privacy-action-link" onClick={() => navigate('/gbc-st')}>
            GBC+ Privacy Details
          </button>
        </div>
      </div>
    </div>
  );
}
