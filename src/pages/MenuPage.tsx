import { menuItems } from '../data'

function MenuPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <section id="menu" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14">
            <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Our Recipes</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Recipes
            </h2>
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
    </div>
  )
}

export default MenuPage
