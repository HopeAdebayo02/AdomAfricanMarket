import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-stone-950 text-white overflow-hidden">
        <div
                    className="absolute inset-0 bg-cover bg-top opacity-60"
                    style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950/80" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-amber-500 text-sm sm:text-base tracking-widest mb-4 sm:mb-6 uppercase">Taste the Heart of Africa</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight mb-6 sm:mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Fresh, Authentic, African
          </h1>
          <Link
            to="/products"
            className="inline-block border border-amber-500 text-amber-500 px-8 sm:px-12 py-3 sm:py-4 text-xs sm:text-sm tracking-widest uppercase hover:bg-amber-500 hover:text-white transition-all duration-300"
          >
            Shop Now
          </Link>
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
              <Link to="/contact" className="inline-block bg-amber-600 text-white px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest uppercase hover:bg-amber-700 transition-colors">
                About Us
              </Link>

              <div className="mt-10 sm:mt-12 flex gap-6 sm:gap-8 items-start">
                <div>
                  <h3 className="text-sm font-semibold tracking-wider uppercase mb-3 underline underline-offset-4">Store Hours</h3>
                  <p className="text-stone-600 text-xs sm:text-sm">Monday - Wednesday: 10 AM - 7 PM</p>
                  <p className="text-stone-600 text-xs sm:text-sm">Thursday: 10 AM - 7 PM</p>
                  <p className="text-stone-600 text-xs sm:text-sm">Friday - Saturday: 10 AM - 7 PM</p>
                  <p className="text-stone-600 text-xs sm:text-sm">Sunday: 1:30 - 5 PM</p>
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
    </>
  )
}

export default HomePage
