import { categories, products, freshProduce, meatSeafood, oilsCooking, riceGrains } from '../data'

const categoryIdMap: Record<string, string> = {
  "Oils & Cooking": "oils-cooking",
  "Fresh Produce": "fresh-produce",
  "Meat & Seafood": "meat-seafood",
  "Rice & Grains": "rice-grains",
}

function ProductsPage() {
  const scrollToSection = (name: string) => {
    const id = categoryIdMap[name]
    if (id) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="pt-16 sm:pt-20">
      {/* Categories Section */}
      <section className="py-10 sm:py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            {categories.map((cat) => (
              <div key={cat.name} className="flex items-center gap-3 sm:gap-4 group cursor-pointer" onClick={() => scrollToSection(cat.name)}>
                <span className="text-xl sm:text-2xl lg:text-4xl font-light tracking-wider uppercase text-stone-800 group-hover:text-amber-600 transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {cat.name}
                </span>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-transparent group-hover:border-amber-500 transition-all"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/100x100/png" }}
                />
              </div>
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

      {/* Fresh Produce Section */}
      <section id="fresh-produce" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Fresh Produce</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Farm Fresh, Straight to You
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {freshProduce.map((item) => (
              <div key={item.name} className="bg-white border border-stone-200 group hover:border-amber-500 transition-all duration-300 text-center">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x300/png" }}
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold tracking-wider uppercase mb-2">{item.name}</h3>
                  <p className="text-amber-600 text-sm sm:text-base font-medium">$ {item.price.toFixed(2)} USD</p>
                  <p className="text-stone-500 text-xs mt-1">{item.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meat & Seafood Section */}
      <section id="meat-seafood" className="py-16 sm:py-20 lg:py-28 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Meat & Seafood</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Meat & Seafood
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {meatSeafood.map((item) => (
              <div key={item.name} className="bg-white border border-stone-200 group hover:border-amber-500 transition-all duration-300 text-center">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x300/png" }}
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold tracking-wider uppercase mb-2">{item.name}</h3>
                  <p className="text-amber-600 text-sm sm:text-base font-medium">$ {item.price.toFixed(2)} USD</p>
                  <p className="text-stone-500 text-xs mt-1">{item.unit}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-stone-500 text-xs sm:text-sm text-center mt-6 italic">Prices subject to change. Fresh meat and seafood are sold by weight.</p>
        </div>
      </section>

      {/* Oils & Cooking Section */}
      <section id="oils-cooking" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Oils & Cooking</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Oils & Cooking
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {oilsCooking.map((item) => (
              <div key={item.name} className="bg-white border border-stone-200 group hover:border-amber-500 transition-all duration-300 text-center">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x300/png" }}
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold tracking-wider uppercase mb-2">{item.name}</h3>
                  <p className="text-amber-600 text-sm sm:text-base font-medium">$ {item.price.toFixed(2)} USD</p>
                  <p className="text-stone-500 text-xs mt-1">{item.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rice & Grains Section */}
      <section id="rice-grains" className="py-16 sm:py-20 lg:py-28 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Rice & Grains</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Rice & Grains
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {riceGrains.map((item) => (
              <div key={item.name} className="bg-white border border-stone-200 group hover:border-amber-500 transition-all duration-300 text-center">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x300/png" }}
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold tracking-wider uppercase mb-2">{item.name}</h3>
                  <p className="text-amber-600 text-sm sm:text-base font-medium">$ {item.price.toFixed(2)} USD</p>
                  <p className="text-stone-500 text-xs mt-1">{item.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
