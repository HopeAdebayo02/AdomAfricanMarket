import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'
import ProductsPage from './pages/ProductsPage.tsx'
import MenuPage from './pages/MenuPage.tsx'
import ShippingPage from './pages/ShippingPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import ProductDetailPage from './pages/ProductDetailPage.tsx'
import FreshProducePage from './pages/FreshProducePage.tsx'
import MeatSeafoodPage from './pages/MeatSeafoodPage.tsx'
import OilsCookingPage from './pages/OilsCookingPage.tsx'
import RiceGrainsPage from './pages/RiceGrainsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/fresh-produce" element={<FreshProducePage />} />
          <Route path="/meat-seafood" element={<MeatSeafoodPage />} />
          <Route path="/oils-cooking" element={<OilsCookingPage />} />
          <Route path="/rice-grains" element={<RiceGrainsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
