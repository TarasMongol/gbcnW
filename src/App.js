import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import GbcSt from './components/gbcSt/gbcSt';
import Register from './components/register/Register';
import CategoryPage from './components/categoryPage/categoryPage';
import TouPage from './components/touPage/touPage';

function AppContent() {
  const location = useLocation();
  const isRegisterPage = location.pathname === '/register';

  return (
    <div className="app-wrapper">
      {!isRegisterPage && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gbc-st" element={<GbcSt />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news" element={<CategoryPage />} />
          <Route path="/news/:subCategory" element={<CategoryPage />} />
          <Route path="/football-2027" element={<CategoryPage />} />
          <Route path="/business" element={<CategoryPage />} />
          <Route path="/business/:subCategory" element={<CategoryPage />} />
          <Route path="/technology" element={<CategoryPage />} />
          <Route path="/technology/:subCategory" element={<CategoryPage />} />
          <Route path="/health" element={<CategoryPage />} />
          <Route path="/culture" element={<CategoryPage />} />
          <Route path="/culture/:subCategory" element={<CategoryPage />} />
          <Route path="/arts" element={<CategoryPage />} />
          <Route path="/travel" element={<CategoryPage />} />
          <Route path="/travel/:subCategory" element={<CategoryPage />} />
          <Route path="/earth" element={<CategoryPage />} />
          <Route path="/earth/:subCategory" element={<CategoryPage />} />
          <Route path="/audio" element={<CategoryPage />} />
          <Route path="/audio/:subCategory" element={<CategoryPage />} />
          <Route path="/tou" element={<TouPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;