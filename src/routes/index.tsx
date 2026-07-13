import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import spices from "@/assets/spices.jpg";
import lentils from "@/assets/lentils.jpg";
import snacks from "@/assets/snacks.jpg";
import produce from "@/assets/produce.jpg";
import { MapPin, Phone, Mail, Clock, CreditCard, Instagram, Facebook, Star, ShoppingBasket, Truck, Heart } from "lucide-react";

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
  { name: "Spices", desc: "Aromatic spices for your kitchen.", img: spices, emoji: "🌶️" },
  { name: "Lentils & Pulses", desc: "Premium quality lentils and pulses.", img: lentils, emoji: "🫘" },
  { name: "Snacks", desc: "Delicious Indian snacks to relish.", img: snacks, emoji: "🍿" },
  { name: "Fresh Produce", desc: "Fresh fruits and vegetables daily.", img: produce, emoji: "🥦" },
];

const moreCategories = [
  "🍎 Fresh Fruits", "☕ Tea & Coffee", "🥚 Dairy & Eggs", "🫙 Cooking Oils & Ghee",
  "🍦 Ice Cream & Chocolates", "🪔 Pooja Items", "🍳 Kitchen Supplies", "🧹 Cleaning Supplies",
];

const reviews = [
  { text: "The produce is always fresh and features a great variety of veggies and fruits.", author: "Priya S." },
  { text: "It has fresh produce, a wide range of groceries, and good prices.", author: "Rahul M." },
  { text: "New owners have kept this place very organized and clean.", author: "Anita K." },
];

const stats = [
  { icon: <ShoppingBasket size={28} />, value: "500+", label: "Products" },
  { icon: <Star size={28} />, value: "4.5★", label: "Google Rating" },
  { icon: <Truck size={28} />, value: "Same Day", label: "DoorDash Delivery" },
  { icon: <Heart size={28} />, value: "7 Days", label: "Open Every Week" },
];

function SectionHeading({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="text-center mb-12 fade-up">
      <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">{tag}</p>
      <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
        {title}
        <span className="block h-1 w-16 bg-primary rounded-full mx-auto mt-3" />
      </h2>
    </div>
  );
}

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center min-w-0">
            <img src={logo} alt="Indian Mega Mart" className="h-10 md:h-12 w-auto object-contain" />
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
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/65 to-foreground/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-40">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">✨ Sunnyvale, California</p>
          <h1 className="text-4xl md:text-6xl font-bold text-background max-w-3xl leading-tight">
            The Flavors of India,{" "}
            <span className="text-accent">Right Here</span>{" "}
            in Sunnyvale.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-background/90 max-w-2xl">
            Fresh produce, authentic spices, traditional snacks, and everything you need for a true Indian meal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#visit" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition inline-flex items-center gap-2 shadow-lg">
              <MapPin size={18} /> Visit the Store
            </a>
            <a href="https://www.doordash.com/en-GB/convenience/store/34339601" target="_blank" rel="noreferrer" className="bg-background/15 backdrop-blur border border-background/40 text-background px-6 py-3 rounded-full font-semibold hover:bg-background/25 transition inline-flex items-center gap-2">
              🛒 Order Online
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-background/90 text-sm">
            <span className="inline-flex items-center gap-2"><CreditCard size={16} className="text-accent" /> Accepts SNAP / EBT</span>
            <span className="inline-flex items-center gap-2"><CreditCard size={16} className="text-accent" /> Credit Cards Accepted</span>
            <span className="inline-flex items-center gap-2"><Clock size={16} className="text-accent" /> Open today · Closes 9 PM</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 px-4 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="fade-up flex flex-col items-center gap-2" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="opacity-80">{s.icon}</div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-sm opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block relative">
            A Taste of India in Every Aisle
            <span className="block h-1 w-16 bg-primary rounded-full mx-auto mt-3" />
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
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
          <SectionHeading tag="What We Offer" title="Explore Our Categories" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c, i) => (
              <div key={c.name} className="fade-up group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 cursor-default" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="aspect-square overflow-hidden relative">
                  <img src={c.img} alt={c.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-background/90 rounded-full w-10 h-10 flex items-center justify-center text-xl shadow">
                    {c.emoji}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 fade-up">
            <h3 className="text-center text-xl font-semibold mb-6">And much more in store</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {moreCategories.map((m) => (
                <span key={m} className="bg-card border border-border px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading tag="From Our Customers" title="What People Are Saying" />
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="fade-up bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 text-accent mb-3">
                  {[...Array(5)].map((_, k) => <Star key={k} size={18} fill="currentColor" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed italic">"{r.text}"</p>
                <p className="mt-4 text-sm font-semibold text-primary">— {r.author}</p>
                <p className="text-xs text-muted-foreground">Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visit" className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <SectionHeading tag="Find Us" title="Come See Us in Sunnyvale" />
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="fade-up bg-card rounded-2xl p-8 shadow-sm">
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
                    <p className="text-muted-foreground">Open daily · 8 AM – 9 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-up rounded-2xl overflow-hidden shadow-sm min-h-[400px]">
              <iframe
                title="Indian Mega Mart Location"
                src="https://www.google.com/maps?q=854+Old+San+Francisco+Rd,+Sunnyvale,+CA+94086&output=embed"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center">
          <img src={logo} alt="Indian Mega Mart" className="h-10 bg-background rounded-md p-1" />
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/indian_mega_mart/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-accent transition"><Instagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-accent transition"><Facebook /></a>
          </div>
          <p className="text-sm text-background/70 text-center">© 2025 Indian Mega Mart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}