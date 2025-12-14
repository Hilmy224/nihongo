"use client"

import { Button } from "@/components/ui/button"
import { Menu, ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from "lucide-react"
import { useState } from "react"

export default function Home() {

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="relative h-16">
          <div className="container mx-auto flex h-full items-center justify-between px-4">
            <div className="relative z-10 text-3xl font-display text-stone-900">NIHONGO</div>

            <nav className="hidden items-center gap-8 md:flex font-sans absolute left-1/2 -translate-x-1/2 z-10">
              <a href="#" aria-current="page" className="text-xl font-bold text-stone-900">Home</a>
              <a href="#" className="text-xl text-stone-700 hover:text-stone-900">Marketplace</a>
              <a href="#" className="text-xl text-stone-700 hover:text-stone-900">Events</a>
              <a href="#" className="text-xl text-stone-700 hover:text-stone-900">Community</a>
            </nav>

            <div className="flex items-center gap-4 relative z-10">
              <a href="#" className="hidden text-xl text-stone-700 md:block">Sign In</a>
              <Button size="sm" className="hidden md:inline-flex rounded-full px-4 py-2 text-xl bg-gradient-to-br from-blue-400 to-blue-800 text-white font-sans">
                Sign Up
              </Button>

              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <section className="relative min-h-[920px] w-full overflow-hidden bg-stone-50">
      {/* Hero Section */}
      <div aria-hidden="true" className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute right-[120px] top-[40px] w-[760px] h-[760px] bg-amber-300 rounded-full blur-[260px] opacity-65 mix-blend-multiply" />
        <div className="absolute left-[-120px] top-[-220px] w-[980px] h-[920px] bg-pink-200 rounded-full blur-[300px] opacity-55 mix-blend-multiply" />
        <div className="absolute right-[60px] top-[-180px] w-[720px] h-[720px] bg-slate-100 rounded-full blur-[260px] opacity-40 mix-blend-overlay" />
        <div className="absolute left-[160px] bottom-[-120px] w-[560px] h-[560px] bg-amber-100 rounded-full blur-[220px] opacity-40 mix-blend-screen" />
        <div className="absolute right-[260px] bottom-[-220px] w-[640px] h-[640px] bg-pink-100 rounded-full blur-[220px] opacity-30 mix-blend-multiply" />
        <div className="absolute left-[40%] top-[30%] w-[420px] h-[420px] bg-violet-200 rounded-full blur-[180px] opacity-35 mix-blend-soft-light" />
        <div className="absolute right-[30%] top-[60%] w-[520px] h-[520px] bg-yellow-200 rounded-full blur-[200px] opacity-45 mix-blend-screen" />
      </div>

        <div className="container mx-auto flex h-full items-start justify-between px-4 py-16 relative gap-8">
          <div className="text-left max-w-2xl py-16">
            <div className="mb-6 px-4 py-2 bg-stone-100 rounded-full inline-flex items-center gap-3 shadow-sm">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="text-sm text-stone-700">Indonesia's #1 J-Culture Hub</div>
            </div>
            <h1 className="mb-6 text-7xl font-bold font-display text-stone-900">Dive Into Japan's Pop Culture Universe.</h1>
            <p className="mb-6 text-2xl text-stone-700 w-max-200">Explore authentic merchandise, exclusive events, and vibrant communities — created for fans who live and breathe Japanese culture in Indonesia.</p>
            <div className="flex items-center gap-4">
              <Button size="lg" className="text-light text-lg rounded-full px-22 py-8 bg-stone-900 text-white hover:bg-stone-800">
                Explore NIHONGO ➔
              </Button>
              <Button size="lg" className="text-lg  rounded-full px-18 py-8 bg-lime-300  text-black hover:bg-amber-500">
                Join Community
              </Button>
            </div>

            {/* Three colored feature columns */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div>
                  <div className="text-xl font-semibold font-medium text-blue-400">5K+</div>
                  <div className="text-xl text-black">Active Members</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <div className="text-xl font-semibold font-medium text-lime-600">500+</div> <div className="text-xl text-black">Products</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <div className="text-xl font-semibold font-medium text-green-400">50+</div> <div className="text-xl text-black">Monthly Events</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image (use jap_img.png) */}
          <div className="hidden lg:block w-1/2 z-10">
            <img src="/jap_img.png" alt="Hero" className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Main Content */}

        {/* Everything You Need */}
        <section className="py-16 min-h-[620px] bg-slate-800 text-white relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute left-[-120px] top-[-60px] w-[760px] h-[760px] bg-amber-200 rounded-full blur-[220px] opacity-20" />
          </div>
          <div className="container mx-auto min-h-3/5 px-4 text-center">
            <h2 className="mb-6 text-5xl font-bold">Everything You Need, All in One Place</h2>
            <p className="mb-8 text-xl text-slate-200 pb-8">NIHONGO brings together the best of Japanese pop culture for Indonesian fans</p>
            
            
            <div className="grid gap-38 md:grid-cols-3 flex-col items-stretch">
              <div className="p-8 rounded-2xl bg-indigo-200 flex flex-col min-h-[440px]">
                <div className="text-left flex-grow">
                  <div className="mb-6">
                    <img src="/shopping_icon.svg" alt="Shopping" className="w-18 h-18" />
                  </div>
                  <div className="text-4xl text-black font-semibold font-display">Authentic Japanese Merchandise</div>
                  <div className="text-slate-500 text-2xl mt-2 py-4">Official figures, manga, apparel, and collectibles from trusted Japanese vendors.</div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-lime-400 flex flex-col">
                <div className="text-left flex-grow">
                  <div className="mb-6">
                    <img src="/ticket_icon.svg" alt="Tickets" className="w-18 h-18" />
                  </div>
                  <div className="text-4xl text-black font-semibold font-display">Event Tickets</div>
                  <div className="text-slate-500 text-2xl py-4 mt-2">Get tickets to anime expos, J-pop concerts, cosplay festivals, and more.</div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-green-200 flex flex-col">
                <div className="text-left flex-grow">
                  <div className="mb-6">
                    <img src="/forum_icon.svg" alt="Forum" className="w-18 h-18" />
                  </div>
                  <h2 className="text-4xl text-black font-semibold font-display">Community Forum</h2>
                  <div className="text-slate-500 text-2xl py-4 mt-2">Join discussions, share reviews, and connect with Indonesian J-culture fans.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Japan's Finest */}
        <section className="py-16  min-h-[920px] bg-orange-50 relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute right-[-80px] top-[-120px] w-[620px] h-[620px] bg-pink-100 rounded-full blur-[200px] opacity-30" />
          </div>
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-4xl font-bold text-stone-900">Shop Japan’s Finest</h2>
            <p className="mb-8 text-lg text-stone-600">Official items, fast local shipping, zero hassle.</p>
            <div className="grid gap-6 md:grid-cols-3">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-2xl shadow p-4">
                  <div className="relative h-48 rounded-md overflow-hidden bg-stone-100">
                    <img src="/product_item.png" alt={`Product ${i}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4">
                    <div className="text-lg font-medium text-stone-900">Product Title {i}</div>
                    <div className="text-sm text-stone-600">IDR 289,000</div>
                  </div>
                  {/* Placeholder: Wishlist/Badge icon - TODO: import Heart/Badge icon */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Japanese Events */}
        <section className="py-16  min-h-[920px] bg-emerald-100 relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute left-[-60px] bottom-[-120px] w-[600px] h-[600px] bg-emerald-200 rounded-full blur-[200px] opacity-25" />
          </div>
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-4xl font-bold text-stone-900">Upcoming Japanese Events</h2>
            <p className="mb-8 text-lg text-stone-700">Your easy gateway to the hottest J-culture events in Indonesia.</p>
            <div className="grid gap-6 md:grid-cols-3">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-2xl shadow p-5">
                  <div className="relative h-44 rounded-md overflow-hidden bg-stone-100 mb-4">
                    <img src="/event_item.png" alt={`Event ${i}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-lg font-bold">Event Name</div>
                  <div className="text-sm mt-2 text-stone-600">20 Desember 2025 — ICE BSD, Tangerang</div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex-1 text-base font-bold">IDR 150,000</div>
                    <Button size="sm" className="rounded-full px-4 py-2 bg-stone-900 text-white">Buy Ticket</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join the Conversation */}
        <section className="py-16  min-h-[920px] bg-stone-50 relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute right-[-160px] top-[-60px] w-[520px] h-[520px] bg-amber-100 rounded-full blur-[180px] opacity-20" />
          </div>
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-4xl font-bold text-stone-900">Join the Conversation</h2>
            <p className="mb-8 text-lg text-stone-700">Connect with thousands of Indonesian fans across topics.</p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-stone-50 rounded-2xl p-8">
                <div className="mb-6 w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center">{/* Placeholder: Icon/Symbol */}</div>
                <div className="text-lg font-medium">Anime</div>
                <div className="text-sm text-stone-600 mt-2">7K members</div>
              </div>
              <div className="bg-stone-50 rounded-2xl p-8">
                <div className="mb-6 w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">{/* Placeholder: Icon/Symbol */}</div>
                <div className="text-lg font-medium">Manga</div>
                <div className="text-sm text-stone-600 mt-2">7K members</div>
              </div>
              <div className="bg-stone-50 rounded-2xl p-8">
                <div className="mb-6 w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">{/* Placeholder: Icon/Symbol */}</div>
                <div className="text-lg font-medium">J-Pop</div>
                <div className="text-sm text-stone-600 mt-2">7K members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose NIHONGO */}
        <section className="py-16  min-h-[920px] bg-slate-800 text-white relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute left-[-200px] top-[-120px] w-[820px] h-[820px] bg-slate-700 rounded-full blur-[260px] opacity-12" />
          </div>
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-4xl font-bold">Why Choose NIHONGO?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-8 bg-white/8 rounded-2xl">
                <div className="mb-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">{/* Placeholder: Icon */}</div>
                <div className="text-lg font-medium">Active Communities</div>
                <div className="text-slate-200 mt-2">Join 10K+ Indonesian J-culture enthusiasts</div>
              </div>
              <div className="p-8 bg-white/8 rounded-2xl">
                <div className="mb-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">{/* Placeholder: Icon */}</div>
                <div className="text-lg font-medium">Local Jabodetabek Delivery</div>
                <div className="text-slate-200 mt-2">Fast shipping across Jakarta, Bogor, Depok, Tangerang & Bekasi</div>
              </div>
              <div className="p-8 bg-white/8 rounded-2xl">
                <div className="mb-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">{/* Placeholder: Icon */}</div>
                <div className="text-lg font-medium">Authentic Merchandise</div>
                <div className="text-slate-200 mt-2">100% official product, verified and guaranteed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Updated */}
        <section className="py-16 bg-stone-50 relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute left-[-100px] top-[-140px] w-[600px] h-[600px] bg-pink-50 rounded-full blur-[200px] opacity-20" />
          </div>
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-4xl font-bold text-stone-900">Stay Updated!</h2>
            <p className="mb-8 text-lg text-stone-700">Get the latest news on merch drops, events, and community highlights.</p>
            <div className="max-w-3xl">
              <div className="flex gap-4">
                <input className="flex-1 rounded-xl px-6 py-4 border" placeholder="Enter your email" />
                <Button className="rounded-xl px-6 py-4 bg-amber-400 text-black">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="mt-16 relative bg-emerald-300 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-[100px] top-[60px] w-[762px] h-[742px] bg-emerald-200 rounded-full blur-[200px] opacity-40" />
          <div className="absolute right-[120px] bottom-[-120px] w-[762px] h-[742px] bg-amber-200 rounded-full blur-[300px] opacity-30" />
        </div>
        <div className="max-w-[1313px] mx-auto px-4 py-20">
          <div className="inline-flex justify-start items-start gap-14 w-full">
            <div className="w-96 inline-flex flex-col justify-start items-start gap-12">
              <div className="flex flex-col gap-5">
                <div className="text-5xl text-white font-display">NIHONGO</div>
                <div className="text-xl text-white">Indonesia’s platform for Japanese pop culture enthusiasts. Connect, shop, and explore the best of Japan’s culture right here.</div>
              </div>
              <div className="inline-flex gap-7">
                <div className="w-9 h-9 bg-white/20 rounded flex items-center justify-center">{/* X */}</div>
                <div className="w-9 h-9 bg-white/20 rounded flex items-center justify-center">{/* YouTube */}</div>
                <div className="w-9 h-9 bg-white/20 rounded flex items-center justify-center">{/* Instagram */}</div>
              </div>
            </div>
            <div className="flex-1 flex gap-7">
              <div className="w-52 inline-flex flex-col gap-4 text-white">
                <div className="text-3xl font-display">Marketplace</div>
                <div>All Products</div>
                <div>Figures & Collectibles</div>
                <div>Manga</div>
                <div>Apparel</div>
                <div>Official Vendors</div>
              </div>
              <div className="w-52 inline-flex flex-col gap-4 text-white">
                <div className="text-3xl font-display">Events</div>
                <div>Upcoming Events</div>
                <div>Anime Conventions</div>
                <div>J-Pop Concerts</div>
                <div>Cosplay Festivals</div>
                <div>Past Events</div>
              </div>
              <div className="w-52 inline-flex flex-col gap-4 text-white">
                <div className="text-3xl font-display">Community</div>
                <div>Forums</div>
                <div>Topics</div>
              </div>
              <div className="w-52 inline-flex flex-col gap-4 text-white">
                <div className="text-3xl font-display">Support</div>
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>Shipping Info</div>
                <div>Payment Methods</div>
                <div>FAQs</div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-between items-center text-white text-sm">
            <div>© 2025 NIHONGO. All rights reserved.</div>
            <div className="flex gap-6">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>Cookie Policy</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
