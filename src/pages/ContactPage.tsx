import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Star } from 'lucide-react'
import { testimonials } from '../data'

function ContactPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="pt-16 sm:pt-20">
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
                  <p>1224 E 66th St<br />Minneapolis, MN 55423</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-amber-500">Contact</h3>
                <div className="space-y-3">
                                    <a href="tel:+16128694117" className="flex items-center gap-3 text-stone-400 text-sm hover:text-amber-500 transition-colors">
                                      <Phone size={18} className="flex-shrink-0" />
                                      (612) 869-4117
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
                    <p>Monday - Saturday: 10 AM - 7 PM</p>
                    <p>Sunday: 1:30 - 5 PM</p>
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
    </div>
  )
}

export default ContactPage
