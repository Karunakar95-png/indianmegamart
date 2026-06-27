import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg";
import spices from "@/assets/spices.jpg";
import lentils from "@/assets/lentils.jpg";
import snacks from "@/assets/snacks.jpg";
import produce from "@/assets/produce.jpg";
import { MapPin, Phone, Mail, Clock, CreditCard, ShoppingBag, Instagram, Facebook, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indian Mega Mart - Indian Grocery Store in Sunnyvale, CA" },
      { name: "description", content: "Indian Mega Mart in Sunnyvale brings authentic Indian spices, fresh produce, snacks, and pantry essentials. Visit us at 854 Old San Francisco Rd." },
      { property: "og:title", content: "Indian Mega Mart - Sunnyvale's Authentic Indian Grocery" },
      { property: "og:description", content: "Fresh produce, authentic spices, and traditional Indian groceries in Sunnyvale, CA." },
    ],
  }),
  component: Index,
});

const categories = [
  { name: "Spices", desc: "Aromatic spices for your kitchen.", img: spices },
  { name: "Lentils & Pulses", desc: "Premium quality lentils and pulses.", img: lentils },
  { name: "Snacks", desc: "Delicious Indian snacks to relish.", img: snacks },
  { name: "Fresh Produce", desc: "Fresh fruits and vegetables daily.", img: produce },
];

const moreCategories = [
  "Fresh Fruits", "Tea & Coffee", "Dairy & Eggs", "Cooking Oils & Ghee",
  "Ice Cream & Chocolates", "Pooja Items", "Kitchen Supplies", "Cleaning Supplies",
];

const reviews = [
  "The produce is always fresh and features a great variety of veggies and fruits.",
  "It has fresh produce, a wide range of groceries, and good prices.",
  "New owners have kept this place very organized and clean.",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center min-w-0">
            <img src={logo.url} alt="Indian Mega Mart" className="h-10 md:h-12 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#categories" className="hover:text-primary transition">Categories</a>
            <a href="#reviews" className="hover:text-primary transition">Reviews</a>
            <a href="#visit" className="hover:text-primary transition">Visit Us</a>
          </nav>
          <a href="tel:+14087491902" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition">
            <Phone size={16} /> <span className="hidden sm:inline">(408) 749-1902</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="absolute inset-0">
          <img src={hero} alt="Inside Indian Mega Mart" className="w-full h-full object-cover" width={1920} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">Sunnyvale, California</p>
          <h1 className="text-4xl md:text-6xl font-bold text-background max-w-3xl leading-tight">
            The Flavors of India, Right Here in Sunnyvale.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-background/90 max-w-2xl">
            Fresh produce, authentic spices, traditional snacks, and everything you need for a true Indian meal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#visit" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition inline-flex items-center gap-2">
              <MapPin size={18} /> Visit the Store
            </a>
            <a href="https://www.doordash.com" target="_blank" rel="noreferrer" className="bg-background/10 backdrop-blur border border-background/30 text-background px-6 py-3 rounded-md font-semibold hover:bg-background/20 transition inline-flex items-center gap-2">
              <ShoppingBag size={18} /> Order Online
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-background/90 text-sm">
            <span className="inline-flex items-center gap-2"><CreditCard size={16} className="text-accent" /> Accepts SNAP / EBT</span>
            <span className="inline-flex items-center gap-2"><CreditCard size={16} className="text-accent" /> Credit Cards Accepted</span>
            <span className="inline-flex items-center gap-2"><Clock size={16} className="text-accent" /> Open today · Closes 9 PM</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">A Taste of India in Every Aisle</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Indian Mega Mart, we bring the rich flavors of India to Sunnyvale. From fresh produce and authentic spices to traditional snacks and pantry essentials, we offer everything you need to create delicious Indian meals.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We're proud to serve our diverse community with high-quality products, friendly service, and a passion for Indian cuisine. Stop by today and experience the essence of India — close to home.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold">Explore Our Categories</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <div key={c.name} className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-center text-xl font-semibold mb-6">And much more in store</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {moreCategories.map((m) => (
                <span key={m} className="bg-card border border-border px-4 py-2 rounded-full text-sm font-medium">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">From Our Customers</p>
            <h2 className="text-3xl md:text-4xl font-bold">What People Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 text-accent mb-3">
                  {[...Array(5)].map((_, k) => <Star key={k} size={18} fill="currentColor" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed italic">"{r}"</p>
                <p className="mt-4 text-xs text-muted-foreground font-semibold uppercase tracking-wider">Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visit" className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-card rounded-xl p-8 shadow-sm">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Visit Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Come See Us in Sunnyvale</h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-muted-foreground">854 Old San Francisco Rd<br />Sunnyvale, CA 94086</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+14087491902" className="text-muted-foreground hover:text-primary">(408) 749-1902</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:immsunnyvale@gmail.com" className="text-muted-foreground hover:text-primary">immsunnyvale@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-muted-foreground">Open daily · Closes 9 PM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShoppingBag className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Order Online</p>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <a href="https://www.doordash.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary underline">DoorDash</a>
                    <a href="https://www.ubereats.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary underline">Uber Eats</a>
                    <a href="https://postmates.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary underline">Postmates</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm min-h-[400px]">
            <iframe
              title="Indian Mega Mart Location"
              src="https://www.google.com/maps?q=854+Old+San+Francisco+Rd,+Sunnyvale,+CA+94086&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Indian Mega Mart" className="h-10 bg-background rounded-md p-1" />
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-accent transition"><Instagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-accent transition"><Facebook /></a>
          </div>
          <p className="text-sm text-background/70 text-center">© 2024 Indian Mega Mart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
