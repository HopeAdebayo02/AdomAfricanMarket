import { useState } from 'react'
import { ShoppingCart, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-widest text-amber-500">ADOM</span>
              <span className="text-xs sm:text-sm tracking-wider text-stone-300 hidden sm:block">AFRICAN MARKET</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className={`text-sm tracking-wider transition-colors uppercase ${isActive('/') ? 'text-amber-500' : 'hover:text-amber-500'}`}>Home</Link>
              <Link to="/products" className={`text-sm tracking-wider transition-colors uppercase ${isActive('/products') ? 'text-amber-500' : 'hover:text-amber-500'}`}>Products</Link>
              <Link to="/menu" className={`text-sm tracking-wider transition-colors uppercase ${isActive('/menu') ? 'text-amber-500' : 'hover:text-amber-500'}`}>Menu</Link>
              <Link to="/shipping" className={`text-sm tracking-wider transition-colors uppercase ${isActive('/shipping') ? 'text-amber-500' : 'hover:text-amber-500'}`}>Gani Shipping</Link>
              <Link to="/contact" className={`text-sm tracking-wider transition-colors uppercase ${isActive('/contact') ? 'text-amber-500' : 'hover:text-amber-500'}`}>Contact</Link>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <button className="relative p-2 hover:text-amber-500 transition-colors" aria-label="Cart">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </button>
              <Link to="/contact" className="hidden sm:inline-block border border-amber-500 text-amber-500 px-4 py-2 text-xs tracking-wider uppercase hover:bg-amber-500 hover:text-white transition-all">
                Visit Us
              </Link>
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-900 border-t border-stone-800">
            <div className="px-4 py-4 space-y-3">
              <Link to="/" className="block text-sm tracking-wider hover:text-amber-500 uppercase" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/products" className="block text-sm tracking-wider hover:text-amber-500 uppercase" onClick={() => setMobileMenuOpen(false)}>Products</Link>
              <Link to="/menu" className="block text-sm tracking-wider hover:text-amber-500 uppercase" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
              <Link to="/shipping" className="block text-sm tracking-wider hover:text-amber-500 uppercase" onClick={() => setMobileMenuOpen(false)}>Gani Shipping</Link>
              <Link to="/contact" className="block text-sm tracking-wider hover:text-amber-500 uppercase" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </nav>

      <Outlet />

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-stone-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-widest text-amber-500 mb-4">ADOM</h2>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">
                Your trusted source for authentic African groceries, spices, and ingredients. Bringing the flavors of home to your kitchen.
              </p>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-3">Subscribe to our Newsletter</h3>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border border-stone-700 px-4 py-2.5 text-sm placeholder-stone-500 focus:border-amber-500 focus:outline-none transition-colors flex-1"
                />
                <button type="submit" className="bg-amber-600 px-4 sm:px-6 py-2.5 text-xs tracking-wider uppercase hover:bg-amber-700 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/" className="text-stone-400 text-sm hover:text-amber-500 transition-colors">Home</Link></li>
                <li><Link to="/products" className="text-stone-400 text-sm hover:text-amber-500 transition-colors">Products</Link></li>
                <li><Link to="/menu" className="text-stone-400 text-sm hover:text-amber-500 transition-colors">Menu</Link></li>
                <li><Link to="/shipping" className="text-stone-400 text-sm hover:text-amber-500 transition-colors">Gani Shipping</Link></li>
                <li><Link to="/contact" className="text-stone-400 text-sm hover:text-amber-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6">Contact Us</h3>
              <div className="space-y-3 text-stone-400 text-sm">
                <p>1224 E 66th St</p>
                <p>Minneapolis, MN 55423</p>
                <a href="mailto:info@adomafricanmarket.com" className="block hover:text-amber-500 transition-colors">info@adomafricanmarket.com</a>
                <a href="tel:+16128694117" className="block hover:text-amber-500 transition-colors">(612) 869-4117</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6">Store Hours</h3>
              <div className="space-y-2 text-stone-400 text-sm">
                <p>Mon - Sat: 10 AM - 7 PM</p>
                <p>Sunday: 1:30 - 5 PM</p>
              </div>
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-8 h-8 border border-stone-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors" aria-label="Facebook">
                  <Facebook size={14} />
                </a>
                <a href="#" className="w-8 h-8 border border-stone-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors" aria-label="Twitter">
                  <Twitter size={14} />
                </a>
                <a href="#" className="w-8 h-8 border border-stone-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors" aria-label="Instagram">
                  <Instagram size={14} />
                </a>
                <a href="#" className="w-8 h-8 border border-stone-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-stone-500 text-xs sm:text-sm">
              Copyright &copy; {new Date().getFullYear()} <Link to="/" className="hover:text-amber-500 transition-colors">Adom African Market</Link>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
