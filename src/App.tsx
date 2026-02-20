import { useState } from 'react'
import { ShoppingCart, Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight, Menu, X, Facebook, Twitter, Instagram, Linkedin, Star } from 'lucide-react'
import './App.css'

const products = [
  { name: "Jollof Rice Seasoning", price: 8.99, image: "/images/spices.jpg", fallback: "https://placehold.co/400x300/png" },
  { name: "Plantain Chips", price: 5.99, image: "/images/plantain.jpg", fallback: "https://placehold.co/400x300/png" },
  { name: "Palm Oil (1L)", price: 12.99, image: "/images/palm-oil.jpg", fallback: "https://placehold.co/400x300/png" },
  { name: "Garri (Fine)", price: 9.99, image: "/images/cassava.jpg", fallback: "https://placehold.co/400x300/png" },
  { name: "Suya Spice Mix", price: 6.99, image: "/images/suya.jpg", fallback: "https://placehold.co/400x300/png" },
  { name: "Dried Beans (2lb)", price: 7.99, image: "/images/beans.jpg", fallback: "https://placehold.co/400x300/png" },
]

const menuItems = [
  { name: "Fufu Flour Mix", desc: "Pounded yam, cassava, and plantain varieties", price: 8.99, image: "/images/fufu.jpg" },
  { name: "Egusi Seeds (Ground)", desc: "Premium melon seeds for traditional soups", price: 10.99, image: "/images/grains.jpg" },
  { name: "Dried Stockfish", desc: "Authentic smoked fish for rich, flavorful stews", price: 15.99, image: "/images/suya.jpg" },
  { name: "Shea Butter (Raw)", desc: "Unrefined, natural shea butter from West Africa", price: 12.99, image: "/images/palm-oil.jpg" },
  { name: "Yam Flour (Amala)", desc: "Finely milled yam flour for smooth amala", price: 9.99, image: "/images/yam.jpg" },
  { name: "Ogbono Seeds", desc: "Wild mango seeds for thick, draw soups", price: 14.99, image: "/images/spices.jpg" },
]

const categories = [
  { name: "Grains & Flours", image: "/images/grains.jpg" },
  { name: "Spices & Seasonings", image: "/images/spices.jpg" },
  { name: "Oils & Sauces", image: "/images/palm-oil.jpg" },
  { name: "Snacks", image: "/images/plantain.jpg" },
  { name: "Dried Foods", image: "/images/cassava.jpg" },
]

const testimonials = [
  { name: "Amara Okafor", role: "Regular Customer", text: "Adom African Market is my go-to store for authentic African groceries. The quality of their products is unmatched, and the staff is always so welcoming and helpful." },
  { name: "Kwame Mensah", role: "Chef", text: "As a professional chef specializing in West African cuisine, I rely on Adom for the freshest ingredients. Their palm oil and spices are top quality every single time." },
  { name: "Fatima Diallo", role: "Food Blogger", text: "I've tried many African grocery stores, but Adom stands out for their wide selection and authentic products. It feels like shopping back home in Dakar!" },
  { name: "David Adeyemi", role: "Customer", text: "The best place to find Nigerian ingredients in the area. From garri to ogbono, they have everything I need for my family's traditional meals." },
]

const blogPosts = [
  { title: "How to Make the Perfect Jollof Rice at Home", date: "February 15, 2026", category: "Recipes", image: "/images/jollof.jpg" },
  { title: "Essential African Spices Every Kitchen Needs", date: "February 10, 2026", category: "Guide", image: "/images/spices.jpg" },
  { title: "The Health Benefits of Traditional African Foods", date: "February 5, 2026", category: "Wellness", image: "/images/about.jpg" },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeMenuTab, setActiveMenuTab] = useState("All")

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-widest text-amber-500">ADOM</span>
              <span className="text-xs sm:text-sm tracking-wider text-stone-300 hidden sm:block">AFRICAN MARKET</span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-sm tracking-wider hover:text-amber-500 transition-colors uppercase">Home</a>
              <a href="#about" className="text-sm tracking-wider hover:text-amber-500 transition-colors uppercase">About</a>
              <a href="#products" className="text-sm tracking-wider hover:text-amber-500 transition-colors uppercase">Products</a>
              <a href="#menu" className="text-sm tracking-wider hover:text-amber-500 transition-colors uppercase">Menu</a>
              <a href="#contact" className="text-sm tracking-wider hover:text-amber-500 transition-colors uppercase">Contact</a>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <button className="relative p-2 hover:text-amber-500 transition-colors" aria-label="Cart">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </button>
              <a href="#contact" className="hidden sm:inline-block border border-amber-500 text-amber-500 px-4 py-2 text-xs tracking-wider uppercase hover:bg-amber-500 hover:text-white transition-all">
                Visit Us
              </a>
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
              <a href="#home" className="block text-sm tracking-wider hover:text-amber-500 uppercase" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="block text-sm tracking-wider hover:text-amber-500 uppercase" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#products" className="block text-sm tracking-wider hover:text-amber-500 uppercase" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#menu" className="block text-sm tracking-wider hover:text-amber-500 uppercase" onClick={() => setMobileMenuOpen(false)}>Menu</a>
              <a href="#contact" className="block text-sm tracking-wider hover:text-amber-500 uppercase" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-stone-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950/80" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-amber-500 text-sm sm:text-base tracking-widest mb-4 sm:mb-6 uppercase">Taste the Heart of Africa</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight mb-6 sm:mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Fresh, Authentic, African
          </h1>
          <a
            href="#products"
            className="inline-block border border-amber-500 text-amber-500 px-8 sm:px-12 py-3 sm:py-4 text-xs sm:text-sm tracking-widest uppercase hover:bg-amber-500 hover:text-white transition-all duration-300"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <img
                src="/images/about.jpg"
                alt="Fresh African cuisine ingredients and dishes"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/800x600/png" }}
              />
            </div>
            <div>
              <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">About Us</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                The Taste of Africa, Right Here
              </h2>
              <p className="text-stone-600 leading-relaxed mb-8 text-sm sm:text-base">
                At Adom African Market, we are passionate about bringing you the finest authentic African groceries and ingredients. From West African spices to East African grains, our carefully curated selection connects you to the rich culinary traditions of the continent.
              </p>
              <a href="#contact" className="inline-block bg-amber-600 text-white px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest uppercase hover:bg-amber-700 transition-colors">
                About Us
              </a>

              <div className="mt-10 sm:mt-12 flex gap-6 sm:gap-8 items-start">
                <div>
                  <h3 className="text-sm font-semibold tracking-wider uppercase mb-3 underline underline-offset-4">Store Hours</h3>
                  <p className="text-stone-600 text-xs sm:text-sm">Monday - Thursday: 9:00 AM - 8:00 PM</p>
                  <p className="text-stone-600 text-xs sm:text-sm">Friday - Saturday: 9:00 AM - 9:00 PM</p>
                  <p className="text-stone-600 text-xs sm:text-sm">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
                <img
                  src="/images/about2.jpg"
                  alt="Colorful African ingredients"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover hidden sm:block"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x200/png" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10 sm:py-16 bg-white border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            {categories.map((cat) => (
              <a key={cat.name} href="#products" className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <span className="text-xl sm:text-2xl lg:text-4xl font-light tracking-wider uppercase text-stone-800 group-hover:text-amber-600 transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {cat.name}
                </span>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-transparent group-hover:border-amber-500 transition-all"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/100x100/png" }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Grid */}
      <section id="products" className="py-16 sm:py-20 lg:py-28 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Our Products</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Popular African Staples
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-white border border-stone-200 group hover:border-amber-500 transition-all duration-300">
                <div className="p-4 sm:p-6 flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-semibold tracking-wider uppercase">{product.name}</h3>
                  <span className="text-stone-600 text-sm sm:text-base">$ {product.price.toFixed(2)} USD</span>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = product.fallback }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-white text-stone-900 px-6 py-2 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                      View
                    </button>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <button className="text-amber-600 text-xs tracking-wider uppercase underline underline-offset-4 hover:text-amber-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 sm:py-28 lg:py-36 bg-stone-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 to-stone-950/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-wide mb-6 sm:mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Fresh African Groceries Delivered to Your Door
          </h2>
          <a
            href="#contact"
            className="inline-block bg-amber-600 text-white px-8 sm:px-12 py-3 sm:py-4 text-xs sm:text-sm tracking-widest uppercase hover:bg-amber-700 transition-colors"
          >
            Visit Our Store
          </a>
        </div>
      </section>

      {/* Menu / Best Products List */}
      <section id="menu" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 sm:mb-14">
            <div>
              <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Our Selection</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                The Best Products
              </h2>
            </div>
            <div className="flex gap-4 sm:gap-6 mt-4 lg:mt-0">
              {["All", "Grains", "Spices", "Oils"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveMenuTab(tab)}
                  className={`text-xs sm:text-sm tracking-wider uppercase transition-colors ${activeMenuTab === tab ? 'text-amber-600 underline underline-offset-4' : 'text-stone-500 hover:text-stone-800'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-12">
            {menuItems.map((item) => (
              <div key={item.name} className="flex items-center gap-4 sm:gap-6 py-5 sm:py-6 border-b border-stone-200 group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover flex-shrink-0"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/100x100/png" }}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold tracking-wider uppercase group-hover:text-amber-600 transition-colors">{item.name}</h3>
                  <p className="text-stone-500 text-xs sm:text-sm mt-1 truncate">{item.desc}</p>
                </div>
                <span className="text-stone-700 text-sm sm:text-base font-medium flex-shrink-0">$ {item.price.toFixed(2)} USD</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-6 sm:py-10 bg-stone-950">
        <div className="flex gap-2 sm:gap-4 overflow-hidden">
          {["/images/gallery1.jpg", "/images/gallery2.jpg", "/images/gallery3.jpg", "/images/gallery4.jpg", "/images/about.jpg", "/images/spices.jpg", "/images/plantain.jpg", "/images/grains.jpg", "/images/suya.jpg", "/images/yam.jpg"].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
              onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x200/png" }}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-10 sm:mb-14" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            What Our Customers Say
          </h2>
          <div className="relative">
            <div className="flex items-center justify-center gap-1 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
              ))}
            </div>
            <blockquote className="text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed italic mb-6 sm:mb-8 max-w-2xl mx-auto">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <p className="font-semibold text-sm sm:text-base tracking-wider uppercase">{testimonials[currentTestimonial].name}</p>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">{testimonials[currentTestimonial].role}</p>
            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-stone-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-stone-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14">
            <div>
              <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Our Blog</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                From Our Kitchen
              </h2>
            </div>
            <a href="#" className="text-amber-600 text-xs sm:text-sm tracking-wider uppercase underline underline-offset-4 hover:text-amber-700 mt-4 sm:mt-0">
              More Articles
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="overflow-hidden mb-4 sm:mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 sm:h-52 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/600x400/png" }}
                  />
                </div>
                <p className="text-stone-500 text-xs sm:text-sm mb-2">{post.date} | {post.category}</p>
                <h3 className="text-base sm:text-lg font-medium group-hover:text-amber-600 transition-colors leading-snug">{post.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Visit Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="text-amber-500 text-xs sm:text-sm tracking-widest uppercase mb-3">Get In Touch</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Visit Our Store!
              </h2>
              <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-transparent border border-stone-700 px-4 py-3 text-sm placeholder-stone-500 focus:border-amber-500 focus:outline-none transition-colors w-full"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="bg-transparent border border-stone-700 px-4 py-3 text-sm placeholder-stone-500 focus:border-amber-500 focus:outline-none transition-colors w-full"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-transparent border border-stone-700 px-4 py-3 text-sm placeholder-stone-500 focus:border-amber-500 focus:outline-none transition-colors w-full"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="bg-transparent border border-stone-700 px-4 py-3 text-sm placeholder-stone-500 focus:border-amber-500 focus:outline-none transition-colors w-full"
                  />
                </div>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="bg-transparent border border-stone-700 px-4 py-3 text-sm placeholder-stone-500 focus:border-amber-500 focus:outline-none transition-colors w-full resize-none"
                />
                <button
                  type="submit"
                  className="bg-amber-600 text-white px-8 sm:px-10 py-3 text-xs sm:text-sm tracking-widest uppercase hover:bg-amber-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8 sm:space-y-10 lg:pl-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-amber-500">Visit Us</h3>
                <div className="flex items-start gap-3 text-stone-400 text-sm">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <p>123 Market Street, Suite 100<br />Columbus, OH 43215</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-amber-500">Contact</h3>
                <div className="space-y-3">
                  <a href="tel:+16145551234" className="flex items-center gap-3 text-stone-400 text-sm hover:text-amber-500 transition-colors">
                    <Phone size={18} className="flex-shrink-0" />
                    +1 (614) 555-1234
                  </a>
                  <a href="mailto:info@adomafricanmarket.com" className="flex items-center gap-3 text-stone-400 text-sm hover:text-amber-500 transition-colors">
                    <Mail size={18} className="flex-shrink-0" />
                    info@adomafricanmarket.com
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-amber-500">Store Hours</h3>
                <div className="flex items-start gap-3 text-stone-400 text-sm">
                  <Clock size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 9:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <li><a href="#home" className="text-stone-400 text-sm hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#about" className="text-stone-400 text-sm hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#products" className="text-stone-400 text-sm hover:text-amber-500 transition-colors">Products</a></li>
                <li><a href="#menu" className="text-stone-400 text-sm hover:text-amber-500 transition-colors">Menu</a></li>
                <li><a href="#contact" className="text-stone-400 text-sm hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6">Contact Us</h3>
              <div className="space-y-3 text-stone-400 text-sm">
                <p>123 Market Street, Suite 100</p>
                <p>Columbus, OH 43215</p>
                <a href="mailto:info@adomafricanmarket.com" className="block hover:text-amber-500 transition-colors">info@adomafricanmarket.com</a>
                <a href="tel:+16145551234" className="block hover:text-amber-500 transition-colors">+1 (614) 555-1234</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6">Store Hours</h3>
              <div className="space-y-2 text-stone-400 text-sm">
                <p>Mon - Fri: 9AM - 8PM</p>
                <p>Saturday: 9AM - 9PM</p>
                <p>Sunday: 10AM - 6PM</p>
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
              Copyright &copy; {new Date().getFullYear()} <a href="/" className="hover:text-amber-500 transition-colors">Adom African Market</a>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
