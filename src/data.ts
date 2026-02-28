export interface Product {
  slug: string
  name: string
  price: number
  unit: string
  category: "fresh-produce" | "meat-seafood" | "oils-cooking" | "rice-grains"
  featured: boolean
  image: string
  fallback: string
  description: string
  metaTitle: string
  metaDescription: string
}

export const allProducts: Product[] = [
  { slug: "yam", name: "Yam", price: 2.99, unit: "per lb", category: "fresh-produce", featured: true, image: "/images/yam.jpg", fallback: "https://placehold.co/400x300/png", description: "Fresh African yam, a hearty root vegetable perfect for boiling, frying, or pounding into fufu. A true West African staple.", metaTitle: "Fresh Yam - Adom African Market Minneapolis", metaDescription: "Buy fresh African yam at Adom African Market in Minneapolis. Perfect for boiling, frying, or pounding. $2.99 per lb." },
  { slug: "yellow-plantain", name: "Yellow Plantain", price: 1.29, unit: "per lb", category: "fresh-produce", featured: true, image: "/images/plantain.jpg", fallback: "https://placehold.co/400x300/png", description: "Ripe yellow plantains, sweet and ready for frying, baking, or grilling. A staple in African and Caribbean cuisine.", metaTitle: "Yellow Plantain - Adom African Market Minneapolis", metaDescription: "Buy ripe yellow plantains at Adom African Market in Minneapolis. Sweet and perfect for frying, baking, or grilling. $1.29 per lb." },
  { slug: "green-plantain", name: "Green Plantain", price: 1.59, unit: "per lb", category: "fresh-produce", featured: true, image: "/images/plantain.jpg", fallback: "https://placehold.co/400x300/png", description: "Firm green plantains ideal for boiling, frying into chips, or making fufu. A versatile cooking staple.", metaTitle: "Green Plantain - Adom African Market Minneapolis", metaDescription: "Buy green plantains at Adom African Market in Minneapolis. Ideal for boiling, chips, or fufu. $1.59 per lb." },
  { slug: "fufu", name: "Fufu", price: 6.99, unit: "bag", category: "fresh-produce", featured: true, image: "/images/fufu.jpg", fallback: "https://placehold.co/400x300/png", description: "Ready-to-prepare fufu, the classic West African side dish. Made from pounded starchy vegetables, perfect with soups and stews.", metaTitle: "Fufu - Adom African Market Minneapolis", metaDescription: "Buy fufu at Adom African Market in Minneapolis. Classic West African side dish for soups and stews. $6.99 per bag." },
  { slug: "cassava-leaf", name: "Cassava Leaf", price: 4.99, unit: "bunch", category: "fresh-produce", featured: true, image: "/images/cassava.jpg", fallback: "https://placehold.co/400x300/png", description: "Fresh cassava leaves, a staple green in West and Central African cooking. Rich in nutrients and perfect for traditional stews.", metaTitle: "Cassava Leaf - Adom African Market Minneapolis", metaDescription: "Buy fresh cassava leaf at Adom African Market in Minneapolis. Nutrient-rich greens for traditional stews. $4.99 per bunch." },
  { slug: "fresh-peanuts", name: "Fresh Peanuts", price: 3.99, unit: "per lb", category: "fresh-produce", featured: true, image: "/images/peanuts.jpg", fallback: "https://placehold.co/400x300/png", description: "Fresh raw peanuts, also known as groundnuts. Essential for African soups, sauces, snacking, and making groundnut paste.", metaTitle: "Fresh Peanuts - Adom African Market Minneapolis", metaDescription: "Buy fresh peanuts (groundnuts) at Adom African Market in Minneapolis. For soups, sauces, and snacking. $3.99 per lb." },
  { slug: "sweet-potato", name: "Sweet Potato", price: 2.99, unit: "per lb", category: "fresh-produce", featured: true, image: "/images/yam.jpg", fallback: "https://placehold.co/400x300/png", description: "Fresh sweet potatoes with a naturally sweet, creamy flesh. Great for roasting, boiling, or making porridge.", metaTitle: "Sweet Potato - Adom African Market Minneapolis", metaDescription: "Buy fresh sweet potatoes at Adom African Market in Minneapolis. Naturally sweet and creamy. $2.99 per lb." },
  { slug: "fresh-okra", name: "Fresh Okra", price: 4.99, unit: "per lb", category: "fresh-produce", featured: true, image: "/images/okro.jpg", fallback: "https://placehold.co/400x300/png", description: "Farm-fresh okra, perfect for soups, stews, and traditional West African dishes. Hand-selected for quality and freshness.", metaTitle: "Fresh Okra - Adom African Market Minneapolis", metaDescription: "Buy fresh okra at Adom African Market in Minneapolis. Perfect for soups, stews, and traditional dishes. $4.99 per lb." },
  { slug: "coco-yam", name: "Coco Yam", price: 2.99, unit: "per lb", category: "fresh-produce", featured: true, image: "/images/yam.jpg", fallback: "https://placehold.co/400x300/png", description: "Fresh coco yam, a starchy root vegetable perfect for boiling, porridges, and thickening soups.", metaTitle: "Coco Yam - Adom African Market Minneapolis", metaDescription: "Buy fresh coco yam at Adom African Market in Minneapolis. Perfect for boiling, porridges, and thickening soups. $2.99 per lb." },

  { slug: "red-snapper", name: "Red Snapper", price: 9.99, unit: "per lb", category: "meat-seafood", featured: true, image: "/images/snapper.jpg", fallback: "https://placehold.co/400x300/png", description: "Fresh whole red snapper, a prized fish in West African cuisine. Perfect for grilling, frying, or pepper soup.", metaTitle: "Fresh Red Snapper - Adom African Market Minneapolis", metaDescription: "Buy fresh red snapper at Adom African Market in Minneapolis. Perfect for grilling, frying, or pepper soup. $9.99 per lb." },
  { slug: "tilapia", name: "Tilapia", price: 3.50, unit: "per lb", category: "meat-seafood", featured: true, image: "/images/tilapia.jpg", fallback: "https://placehold.co/400x300/png", description: "Fresh tilapia, a mild and versatile white fish. Excellent fried, grilled, or in light soups and stews.", metaTitle: "Fresh Tilapia - Adom African Market Minneapolis", metaDescription: "Buy fresh tilapia at Adom African Market in Minneapolis. Mild, versatile white fish for frying or grilling. $3.50 per lb." },
  { slug: "fresh-shrimp", name: "Fresh Shrimp", price: 16.99, unit: "per lb", category: "meat-seafood", featured: true, image: "/images/shrimp.jpg", fallback: "https://placehold.co/400x300/png", description: "Premium fresh shrimp, perfect for jollof rice, stir-fry, soups, and seafood platters.", metaTitle: "Fresh Shrimp - Adom African Market Minneapolis", metaDescription: "Buy premium fresh shrimp at Adom African Market in Minneapolis. Great for jollof rice and seafood dishes. $16.99 per lb." },
  { slug: "goat-half", name: "Goat (Half \u2013 21\u201322 lbs)", price: 75.00, unit: "bulk", category: "meat-seafood", featured: false, image: "/images/goat.jpg", fallback: "https://placehold.co/400x300/png", description: "Half goat (21-22 lbs), fresh and ready for traditional preparations. Ideal for parties, events, and family gatherings.", metaTitle: "Half Goat (21-22 lbs) - Adom African Market Minneapolis", metaDescription: "Buy half goat (21-22 lbs) at Adom African Market in Minneapolis. Fresh, ideal for parties and gatherings. $75.00." },
  { slug: "goat-quarter", name: "Goat (Quarter \u2013 10\u201311 lbs)", price: 37.50, unit: "bulk", category: "meat-seafood", featured: false, image: "/images/goat.jpg", fallback: "https://placehold.co/400x300/png", description: "Quarter goat (10-11 lbs), perfect portion for smaller households. Fresh and ready for your favorite recipes.", metaTitle: "Quarter Goat (10-11 lbs) - Adom African Market Minneapolis", metaDescription: "Buy quarter goat (10-11 lbs) at Adom African Market in Minneapolis. Perfect for smaller households. $37.50." },

  { slug: "ayaba-palm-oil", name: "Ayaba Palm Oil", price: 8.99, unit: "bottle", category: "oils-cooking", featured: true, image: "/images/palm-oil.jpg", fallback: "https://placehold.co/400x300/png", description: "Premium Ayaba brand palm oil, rich in color and flavor. Essential for authentic West African soups and stews.", metaTitle: "Ayaba Palm Oil - Adom African Market Minneapolis", metaDescription: "Buy Ayaba Palm Oil at Adom African Market in Minneapolis. Premium quality for authentic African cooking. $8.99 per bottle." },
  { slug: "vahnos-oil-500ml", name: "Vahnos Oil 500ml", price: 5.99, unit: "bottle", category: "oils-cooking", featured: true, image: "/images/palm-oil.jpg", fallback: "https://placehold.co/400x300/png", description: "Vahnos cooking oil in a convenient 500ml bottle. Versatile oil for everyday African cooking needs.", metaTitle: "Vahnos Oil 500ml - Adom African Market Minneapolis", metaDescription: "Buy Vahnos Oil 500ml at Adom African Market in Minneapolis. Versatile cooking oil for everyday use. $5.99." },
  { slug: "vahnos-oil-2l", name: "Vahnos Oil 2L", price: 15.99, unit: "bottle", category: "oils-cooking", featured: true, image: "/images/palm-oil.jpg", fallback: "https://placehold.co/400x300/png", description: "Vahnos cooking oil in a 2-liter bottle. Great value for families who cook African dishes regularly.", metaTitle: "Vahnos Oil 2L - Adom African Market Minneapolis", metaDescription: "Buy Vahnos Oil 2L at Adom African Market in Minneapolis. Family-size value for regular cooking. $15.99." },
  { slug: "vahnos-oil-4-5l", name: "Vahnos Oil 4.5L", price: 28.99, unit: "bottle", category: "oils-cooking", featured: false, image: "/images/palm-oil.jpg", fallback: "https://placehold.co/400x300/png", description: "Vahnos cooking oil in a large 4.5-liter bottle. Best value for bulk cooking and large households.", metaTitle: "Vahnos Oil 4.5L - Adom African Market Minneapolis", metaDescription: "Buy Vahnos Oil 4.5L at Adom African Market in Minneapolis. Best bulk value for large households. $28.99." },
  { slug: "shea-butter", name: "Shea Butter", price: 10.99, unit: "container", category: "oils-cooking", featured: false, image: "/images/palm-oil.jpg", fallback: "https://placehold.co/400x300/png", description: "Raw, unrefined shea butter from West Africa. Used for cooking, skincare, and traditional remedies.", metaTitle: "Shea Butter - Adom African Market Minneapolis", metaDescription: "Buy raw shea butter at Adom African Market in Minneapolis. Unrefined, for cooking and skincare. $10.99." },

  { slug: "parboiled-rice-25lb", name: "Parboiled Rice (25 lb bag)", price: 19.99, unit: "each", category: "rice-grains", featured: true, image: "/images/grains.jpg", fallback: "https://placehold.co/400x300/png", description: "25-pound bag of premium parboiled rice. A pantry staple for jollof rice, fried rice, and everyday meals.", metaTitle: "Parboiled Rice 25 lb - Adom African Market Minneapolis", metaDescription: "Buy 25 lb parboiled rice at Adom African Market in Minneapolis. Perfect for jollof and everyday meals. $19.99." },
  { slug: "jasmine-rice-25lb", name: "Jasmine Rice (25 lb bag)", price: 25.99, unit: "each", category: "rice-grains", featured: true, image: "/images/grains.jpg", fallback: "https://placehold.co/400x300/png", description: "25-pound bag of fragrant jasmine rice. Aromatic and fluffy, perfect for pairing with African stews and curries.", metaTitle: "Jasmine Rice 25 lb - Adom African Market Minneapolis", metaDescription: "Buy 25 lb jasmine rice at Adom African Market in Minneapolis. Fragrant and fluffy for stews and curries. $25.99." },
  { slug: "jasmine-rice-35lb", name: "Jasmine Rice (35 lb bag)", price: 39.99, unit: "each", category: "rice-grains", featured: false, image: "/images/grains.jpg", fallback: "https://placehold.co/400x300/png", description: "35-pound bag of fragrant jasmine rice. Best value for large families and bulk buyers.", metaTitle: "Jasmine Rice 35 lb - Adom African Market Minneapolis", metaDescription: "Buy 35 lb jasmine rice at Adom African Market in Minneapolis. Best bulk value for large families. $39.99." },
  { slug: "ijebu-garri", name: "Ijebu Garri", price: 15.99, unit: "bag", category: "rice-grains", featured: true, image: "/images/cassava.jpg", fallback: "https://placehold.co/400x300/png", description: "Premium Ijebu garri, a crispy cassava flour staple. Enjoy as a snack with groundnuts or as eba with soup.", metaTitle: "Ijebu Garri - Adom African Market Minneapolis", metaDescription: "Buy Ijebu Garri at Adom African Market in Minneapolis. Premium cassava flour for snacking or eba. $15.99." },
]

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return allProducts.filter((p) => p.category === category)
}

export function getFeaturedByCategory(category: Product["category"]): Product[] {
  return allProducts.filter((p) => p.category === category && p.featured)
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim()
  if (!q) return []
  return allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.replace("-", " ").includes(q)
  )
}

export const categories = [
  { name: "Oils & Cooking", slug: "oils-cooking", image: "/images/palm-oil.jpg" },
  { name: "Fresh Produce", slug: "fresh-produce", image: "/images/plantain.jpg" },
  { name: "Meat & Seafood", slug: "meat-seafood", image: "/images/snapper.jpg" },
  { name: "Rice & Grains", slug: "rice-grains", image: "/images/grains.jpg" },
]

export const products = [
  { name: "Jollof Rice Seasoning", price: 8.99, image: "/images/spices.jpg", fallback: "https://placehold.co/400x300/png" },
  { name: "Plantain Chips", price: 5.99, image: "/images/plantain.jpg", fallback: "https://placehold.co/400x300/png" },
  { name: "Palm Oil (1L)", price: 12.99, image: "/images/palm-oil.jpg", fallback: "https://placehold.co/400x300/png" },
  { name: "Garri (Fine)", price: 9.99, image: "/images/cassava.jpg", fallback: "https://placehold.co/400x300/png" },
  { name: "Suya Spice Mix", price: 6.99, image: "/images/suya.jpg", fallback: "https://placehold.co/400x300/png" },
  { name: "Dried Beans (2lb)", price: 7.99, image: "/images/beans.jpg", fallback: "https://placehold.co/400x300/png" },
]

export const menuItems = [
  { name: "Fufu Flour Mix", desc: "Pounded yam, cassava, and plantain varieties", price: 8.99, image: "/images/fufu.jpg" },
  { name: "Egusi Seeds (Ground)", desc: "Premium melon seeds for traditional soups", price: 10.99, image: "/images/grains.jpg" },
  { name: "Dried Stockfish", desc: "Authentic smoked fish for rich, flavorful stews", price: 15.99, image: "/images/suya.jpg" },
  { name: "Shea Butter (Raw)", desc: "Unrefined, natural shea butter from West Africa", price: 12.99, image: "/images/palm-oil.jpg" },
  { name: "Yam Flour (Amala)", desc: "Finely milled yam flour for smooth amala", price: 9.99, image: "/images/yam.jpg" },
  { name: "Ogbono Seeds", desc: "Wild mango seeds for thick, draw soups", price: 14.99, image: "/images/spices.jpg" },
]

export const testimonials = [
  { name: "Amara Okafor", role: "Regular Customer", text: "Adom African Market is my go-to store for authentic African groceries. The quality of their products is unmatched, and the staff is always so welcoming and helpful." },
  { name: "Kwame Mensah", role: "Chef", text: "As a professional chef specializing in West African cuisine, I rely on Adom for the freshest ingredients. Their palm oil and spices are top quality every single time." },
  { name: "Fatima Diallo", role: "Food Blogger", text: "I\'ve tried many African grocery stores, but Adom stands out for their wide selection and authentic products. It feels like shopping back home in Dakar!" },
  { name: "David Adeyemi", role: "Customer", text: "The best place to find Nigerian ingredients in the area. From garri to ogbono, they have everything I need for my family\'s traditional meals." },
]

export const blogPosts = [
  { title: "How to Make the Perfect Jollof Rice at Home", date: "February 15, 2026", category: "Recipes", image: "/images/jollof.jpg" },
  { title: "Essential African Spices Every Kitchen Needs", date: "February 10, 2026", category: "Guide", image: "/images/spices.jpg" },
  { title: "The Health Benefits of Traditional African Foods", date: "February 5, 2026", category: "Wellness", image: "/images/about.jpg" },
]
