import { MapPin, ShoppingCart, Phone } from 'lucide-react'

function ShippingPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <section id="shipping" className="py-16 sm:py-20 lg:py-28 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Gani Shipping</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ship to Ghana
            </h2>
            <p className="text-stone-600 leading-relaxed mt-6 max-w-2xl mx-auto text-sm sm:text-base">
              Send packages to Ghana with our trusted Gani Shipping service. We offer reliable shipping from Minneapolis to Ghana and local moving services at competitive rates, right from our store.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white border border-stone-200 p-6 sm:p-8 text-center hover:border-amber-500 transition-all duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <MapPin size={24} className="text-amber-600" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold tracking-wider uppercase mb-3">Shipping to Ghana</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Reliable door-to-door shipping from Minneapolis to cities across Ghana. We exclusively ship to Ghana — fast and affordable.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 sm:p-8 text-center hover:border-amber-500 transition-all duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <ShoppingCart size={24} className="text-amber-600" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold tracking-wider uppercase mb-3">Local Moving</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Need help moving locally in the Minneapolis area? We offer convenient local moving services.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 sm:p-8 text-center hover:border-amber-500 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Phone size={24} className="text-amber-600" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold tracking-wider uppercase mb-3">Get a Quote</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">Contact us for shipping rates and schedules. We are happy to help with all your shipping needs.</p>
              <a href="tel:+16128694117" className="inline-block text-amber-600 text-sm tracking-wider uppercase underline underline-offset-4 hover:text-amber-700 transition-colors">
                Call (612) 869-4117
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShippingPage
