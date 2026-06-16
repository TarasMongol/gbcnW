import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [codeError, setCodeError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [hasEightChars, setHasEightChars] = useState(false);
  const [hasLetter, setHasLetter] = useState(false);
  const [hasNumOrSymbol, setHasNumOrSymbol] = useState(false);

  useEffect(() => {
    setHasEightChars(password.length >= 8);
    setHasLetter(/[a-zA-Z]/.test(password));
    setHasNumOrSymbol(/[\d\W]/.test(password));
  }, [password]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setStep(2);
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (!code) {
      setCodeError('Please enter the verification code.');
      return;
    }

    if (code.trim() !== '123456') {
      setCodeError('Incorrect verification code. Please enter 123456.');
      return;
    }
    setCodeError('');
    setStep(3);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!hasEightChars || !hasLetter || !hasNumOrSymbol) {
      setPasswordError('Please make sure your password meets all requirements.');
      return;
    }
    setPasswordError('');
    setStep(4);

    localStorage.setItem('user_session', JSON.stringify({ email }));

    setTimeout(() => {

      window.dispatchEvent(new Event('storage'));
      navigate('/');
    }, 3000);
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="gbc-register-wrapper">
      {}
      <div className="gbc-register-black-bg">
        {}
        <button className="gbc-register-close-btn" onClick={handleClose} aria-label="Close">
          <div className="close-icon-x"></div>
        </button>

        {}
        <div className="gbc-register-form-container">
          
          {}
          <div className="gbc-register-logo-box-container">
            <div className="logo-box-square"><span className="logo-box-letter">G</span></div>
            <div className="logo-box-square"><span className="logo-box-letter">B</span></div>
            <div className="logo-box-square"><span className="logo-box-letter">C</span></div>
          </div>

          {step === 1 && (
            <form onSubmit={handleEmailSubmit} className="register-fade-in">
              <h1 className="register-title">
                Enter your email address to sign in or create an account
              </h1>
              
              <div className="register-input-group">
                <label className="register-label">Email</label>
                <input
                  type="email"
                  className={`register-text-input ${emailError ? 'input-error-border' : ''}`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  autoFocus
                  required
                />
                {emailError && <div className="register-error-msg">{emailError}</div>}
              </div>

              <button type="submit" className="register-continue-btn">
                <span>Continue</span>
              </button>

              <div className="register-help-container">
                <a href="#help" className="register-help-link" onClick={(e) => e.preventDefault()}>
                  Get help signing in
                </a>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleCodeSubmit} className="register-fade-in">
              <h1 className="register-title">Check your box</h1>
              
              <div className="register-subtext-info">
                <p className="subtext-line">
                  We’ve sent an email with a code to: <span className="highlight-email">{email}</span>
                </p>
                <p className="subtext-line">The code is active for 30 minutes</p>
                <p className="subtext-line bold-prompt">Enter the 6-digit code:</p>
              </div>

              <div className="register-input-group spacing-step2">
                <label className="register-label">Verification code</label>
                <input
                  type="text"
                  maxLength="6"
                  placeholder="xxxxxx"
                  className={`register-text-input code-input ${codeError ? 'input-error-border' : ''}`}
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    if (codeError) setCodeError('');
                  }}
                  autoFocus
                  required
                />
                {codeError && <div className="register-error-msg">{codeError}</div>}
              </div>

              <button type="submit" className="register-continue-btn">
                <span>Continue</span>
              </button>

              <div className="register-help-container">
                <a href="#help" className="register-help-link" onClick={(e) => e.preventDefault()}>
                  Get help signing in
                </a>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handlePasswordSubmit} className="register-fade-in">
              <h1 className="register-title">Create your account password</h1>
              
              <div className="register-email-edit-row">
                <span className="email-display-text">{email}</span>
                <button
                  type="button"
                  className="edit-email-btn"
                  onClick={() => {
                    setCode('');
                    setPassword('');
                    setStep(1);
                  }}
                >
                  edit email
                </button>
              </div>

              <p className="register-age-warning">
                You must be 18 or over to register for a GBC account
              </p>

              <div className="register-password-requirements">
                <p className="requirements-title">Passwords need to include...</p>
                <ul className="requirements-list">
                  <li className={hasEightChars ? 'met' : 'unmet'}>
                    <span className="bullet-indicator">{hasEightChars ? '✓' : '•'}</span>
                    At least eight characters
                  </li>
                  <li className={hasLetter ? 'met' : 'unmet'}>
                    <span className="bullet-indicator">{hasLetter ? '✓' : '•'}</span>
                    At least one letter
                  </li>
                  <li className={hasNumOrSymbol ? 'met' : 'unmet'}>
                    <span className="bullet-indicator">{hasNumOrSymbol ? '✓' : '•'}</span>
                    At least one number or symbol
                  </li>
                </ul>
              </div>

              <div className="register-input-group spacing-step3">
                <label className="register-label">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`register-text-input ${passwordError ? 'input-error-border' : ''}`}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError('');
                  }}
                  autoFocus
                  required
                />
                
                <button
                  type="button"
                  className="show-password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide password' : 'Show password'}
                </button>

                {passwordError && <div className="register-error-msg">{passwordError}</div>}
              </div>

              <button
                type="submit"
                className={`register-continue-btn ${(!hasEightChars || !hasLetter || !hasNumOrSymbol) ? 'disabled-btn' : ''}`}
                disabled={!hasEightChars || !hasLetter || !hasNumOrSymbol}
              >
                <span>Continue</span>
              </button>
            </form>
          )}

          {step === 4 && (
            <div className="register-success-container register-fade-in">
              <div className="success-icon-checkmark-circle">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                  <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
              </div>
              <h1 className="success-title">Successfully Registered!</h1>
              <p className="success-subtitle">Welcome to GBC, <span className="highlight-email">{email}</span></p>
              <p className="success-redirect-msg">Redirecting you to the home page...</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
