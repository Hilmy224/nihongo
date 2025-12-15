"use client"

import { Button } from "@/components/ui/button"
import { Menu, ChevronLeft, ChevronRight, Facebook, Instagram, X, Youtube, Calendar, MapPin } from "lucide-react"
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
              <a href="#" className="text-xl text-stone-700 hover:text-indigo-300">Marketplace</a>
              <a href="#" className="text-xl text-stone-700 hover:text-indigo-300">Events</a>
              <a href="#" className="text-xl text-stone-700 hover:text-indigo-300">Community</a>
            </nav>

            <div className="flex items-center gap-4 relative z-10">
              <a href="#" className="hidden text-xl text-stone-700 md:block pb-1 hover:text-indigo-300">Sign In</a>
              <Button size="sm" className="hidden md:inline-flex rounded-full px-4 py-2 pb-3 text-xl bg-gradient-to-br from-blue-400 to-blue-800 text-white font-sans hover:from-indigo-400 hover:to-indigo-800">
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
              <Button size="lg" className="text-light text-lg rounded-full px-22 py-8 bg-stone-900 text-white hover:bg-stone-400 hover:text-black hover:outline-solid outline-blue-400">
                Explore NIHONGO ➔
              </Button>
              <Button size="lg" className="text-lg  rounded-full px-18 py-8 bg-nihongo-green  text-black hover:bg-lime-400 hover:outline-solid outline-blue-400">
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

              <div className="p-8 rounded-2xl bg-nihongo-green flex flex-col">
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
        <section className="py-16 min-h-[920px] bg-orange-50 relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute right-[-80px] top-[-120px] w-[620px] h-[620px] bg-pink-100 rounded-full blur-[200px] opacity-30" />
          </div>
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-5xl font-bold text-stone-900">Shop Japan's Finest Merch</h2>
            <p className="mb-8 text-2xl pb-9 text-stone-600">Official items, fast local shipping, zero hassle.</p>

            <div className="grid gap-24 md:grid-cols-3 max-w-7xl mx-auto pb-8">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col h-full">
                  <div className="relative rounded-md overflow-hidden h-64 md:h-72 lg:h-80">
                    <img src="/product_item.png" alt={`Product ${i}`} className="w-full h-full object-cover" />
                  </div>

                  <div className="mt-6 text-left flex flex-col flex-grow">
                    <div className="text-2xl text-stone-900">Devil Butler with Black Cat Rirakoro Mascot Figure Collection</div>
                    <div className="text-base font-bold text-black mt-2">IDR 289,000</div>
                    <div className="mt-auto pt-6">
                      <Button className="w-full rounded-full px-6 py-4 bg-slate-800 text-white hover:bg-slate-400 hover:text-black hover:outline-solid outline-blue-400">Add to Cart</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button size="lg" className="text-light text-lg rounded-full px-14 py-6 bg-nihongo-green text-slate-800 hover:bg-lime-400 hover:outline-solid outline-blue-400">
                See All Products ➔
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Japanese Events */}
        <section className="py-16 min-h-[920px] bg-nihongo-green relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute left-[-60px] bottom-[-120px] w-[600px] h-[600px] bg-amber-200 rounded-full blur-[200px] opacity-20" />
          </div>
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-6 text-5xl font-bold text-stone-900">Upcoming Japanese Events</h2>
            <p className="mb-8 text-2xl pb-9 text-stone-600">Your easy gateway to the hottest J-culture events in Indonesia.</p>

            <div className="grid gap-24 md:grid-cols-3 max-w-8xl mx-auto pb-8">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col h-full pt-12">
                  <div className="relative rounded-md overflow-hidden h-64 md:h-72 lg:h-80">
                    <img src="/event_item.png" alt={`Event ${i}`} className="w-full h-full object-contain" />
                  </div>

                  <div className="mt-6 text-left flex flex-col flex-grow">
                    <div className="text-2xl font-bold text-black">Event Name</div>

                    <div className="mt-4 text-base text-stone-600 flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-slate-800" />
                      <div>20 Desember 2025</div> 
                    </div>

                    <div className="mt-3 text-base text-stone-600 flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-slate-800" />
                      <div>ICE BSD, Tangerang</div>
                    </div>

                    <div className="mt-auto pt-6 mt-12 border-t border-stone-200">
                      <div className="flex items-center justify-between gap-4 pt-4">
                        <div className="text-lg font-bold text-stone-900">IDR 150,000</div>
                        <Button size="sm" className="rounded-full font-normal px-14 py-4 bg-slate-800 text-slate-200 hover:bg-slate-500 hover:text-black hover:outline-solid outline-blue-400">Buy Ticket</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4">
              <Button size="lg" className="text-light text-lg rounded-full px-14 py-6 bg-slate-800 text-white hover:bg-lime-400 hover:outline-solid outline-blue-400 hover:text-black">
                See All Events ➔
              </Button>
            </div>
          </div>
        </section>

        {/* Join the Conversation (refined per design reference) */}
        <section className="py-16 min-h-[920px] bg-stone-50 relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-0 pointer-events-none">
            <div className="absolute right-[120px] top-[40px] w-[760px] h-[760px] bg-amber-300 rounded-full blur-[260px] opacity-65 mix-blend-multiply" />
            <div className="absolute left-[-120px] top-[-220px] w-[980px] h-[920px] bg-pink-200 rounded-full blur-[300px] opacity-55 mix-blend-multiply" />
            <div className="absolute right-[60px] top-[-180px] w-[720px] h-[720px] bg-slate-100 rounded-full blur-[260px] opacity-40 mix-blend-overlay" />
            <div className="absolute left-[160px] bottom-[-120px] w-[560px] h-[560px] bg-amber-100 rounded-full blur-[220px] opacity-40 mix-blend-screen" />
            <div className="absolute right-[260px] bottom-[-220px] w-[640px] h-[640px] bg-pink-100 rounded-full blur-[220px] opacity-30 mix-blend-multiply" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="mb-6 text-5xl font-bold font-display">Join the Conversation</h2>
              <p className="mb-8 text-2xl text-stone-700">Connect with thousands of Indonesian fans.</p>
            </div>

            <div className="mt-8 grid gap-10 md:grid-cols-3 items-stretch">
              {[
                { emoji: "🎬", title: "Anime", members: "7K", bg: "bg-amber-100" },
                { emoji: "📚", title: "Manga", members: "7K", bg: "bg-slate-100" },
                { emoji: "🎵", title: "J-Pop", members: "7K", bg: "bg-orange-100" }
              ].map((item, i) => (
                <div key={i} className={`flex-1 p-6 ${item.bg} rounded-2xl shadow-lg flex flex-col h-80 max-h-50 justify-center items-center`}>
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <div className="text-2xl font-display">{item.title}</div>
                  <div className="text-base text-stone-700 mt-2">{item.members} members</div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-3 items-stretch">
              {[
                { emoji: "👘", title: "Cosplay", members: "7K", bg: "bg-amber-100" },
                { emoji: "🎌", title: "Learn Japanese", members: "7K", bg: "bg-lime-200" },
                { emoji: "🎮", title: "Gaming", members: "7K", bg: "bg-slate-200" }
              ].map((item, i) => (
                <div key={i} className={`flex-1 p-6 ${item.bg} rounded-2xl shadow-lg flex flex-col h-80 max-h-50 justify-center items-center`}>
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <div className="text-2xl font-display">{item.title}</div>
                  <div className="text-base text-stone-700 mt-2">{item.members} members</div>
                </div>
              ))}
            </div>
          </div>

          {/* Forum Preview Cards */}
          <div className="container mx-auto px-4 mt-16 max-w-4xl relative z-0">
            <div className="flex flex-col gap-9">
              {/* Card 1 */}
              <div className="p-7 bg-stone-100 rounded-2xl shadow-md">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-stone-50 to-amber-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex items-center gap-2.5">
                      <div className="text-black text-base font-medium">ackerman123</div>
                      <div className="text-stone-500 text-sm">•</div>
                      <div className="text-stone-500 text-sm">2 hrs ago</div>
                    </div>
                    <div className="text-stone-700 text-base leading-6">
                      Ada yang mau ikut nonton Jujutsu Kaisen: Execution di CGV Margo City weekend ini? Let's go bareng!
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1.5">
                        {/* thumbs-up icon - replace path */}
                        <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <div className="text-stone-500 text-sm">45</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {/* message-square icon - replace path */}
                        <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <div className="text-stone-500 text-sm">12</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-7 bg-stone-100 rounded-2xl shadow-md">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-stone-50 to-amber-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex items-center gap-2.5">
                      <div className="text-black text-base font-medium">MegumiFushiguro123</div>
                      <div className="text-stone-500 text-sm">•</div>
                      <div className="text-stone-500 text-sm">4 hrs ago</div>
                    </div>
                    <div className="text-stone-700 text-base leading-6">
                      Baru beli manga One Piece vol. terbaru di NihonGo! Packagingnya rapi banget 🔥
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1.5">
                        {/* thumbs-up icon - replace path */}
                        <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <div className="text-stone-500 text-sm">89</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {/* message-square icon - replace path */}
                        <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <div className="text-stone-500 text-sm">24</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
              <Button size="lg" className="text-light text-lg rounded-full px-14 py-6 bg-slate-800 text-white hover:bg-lime-400 hover:outline-solid outline-blue-400 hover:text-black">
                Visit Forums ➔
              </Button>
            </div>
        </section>

        {/* Why Choose NIHONGO */}
        <section className="py-16 min-h-[950px] bg-slate-800 text-white relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute left-[-200px] top-[-120px] w-[820px] h-[820px] bg-slate-700 rounded-full blur-[260px] opacity-12" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="mb-6 text-5xl font-bold font-display">Why Choose NIHONGO?</h2>
              <p className="mb-8 text-2xl text-slate-300">Your Passion. Our Platform. The Indonesian Way.</p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-3 pt-6">
              <div className="p-8 bg-white/10 rounded-2xl flex flex-col h-full">
                <div className="p-4 bg-white/5 rounded-2xl inline-flex items-center justify-center w-18 h-18 mb-4">
                  <img src="/Users.svg" alt="Users" className="w-9 h-9" />
                </div>
                <div className="text-2xl font-display font-semibold">Active Communities</div>
                <div className="text-slate-300 text-xl mt-2 pb-12">Join 10K+ Indonesian J-culture enthusiasts</div>
              </div>

              <div className="p-8 bg-white/10 rounded-2xl flex flex-col h-full">
                <div className="p-4 bg-white/5 rounded-2xl inline-flex items-center justify-center w-18 h-18 mb-6">
                  <img src="/Truck.svg" alt="Delivery" className="w-9 h-9" />
                </div>
                <div className="text-2xl font-display font-semibold">Local Jabodetabek Delivery</div>
                <div className="text-slate-300 text-xl mt-2 pb-12">Fast shipping across Jakarta, Bogor, Depok, Tangerang & Bekasi</div>
              </div>

              <div className="p-8 bg-white/10 rounded-2xl flex flex-col h-full">
                <div className="p-4 bg-white/5 rounded-2xl inline-flex items-center justify-center w-18 h-18 mb-6">
                  <img src="/Chield_check.svg" alt="Authentic" className="w-9 h-9" />
                </div>
                <div className="text-2xl font-display font-semibold">Authentic Merchandise</div>
                <div className="text-slate-300 text-xl mt-2 pb-12">100% official product, verified and guaranteed</div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="p-8 bg-white/10 rounded-2xl flex flex-col h-full">
                <div className="p-4 bg-white/5 rounded-2xl inline-flex items-center justify-center w-18 h-18 mb-6">
                  <img src="/Calendar2.svg" alt="Events" className="w-9 h-9" />
                </div>
                <div className="text-2xl font-display font-semibold">Exclusive Event Access</div>
                <div className="text-slate-300 text-xl mt-2 pb-12">Early bird tickets and VIP access to major J-culture events</div>
              </div>

              <div className="p-8 bg-white/10 rounded-2xl flex flex-col h-full">
                <div className="p-4 bg-white/5 rounded-2xl inline-flex items-center justify-center w-18 h-18 mb-6">
                  <img src="/Wallet.svg" alt="Payments" className="w-9 h-9" />
                </div>
                <div className="text-2xl font-display font-semibold">Flexible Payment Option</div>
                <div className="text-slate-300 text-xl mt-2 pb-12">Pay with QRIS, GoPay, OVO, DANA, ShopeePay, or any bank transfer</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Updated */}
        <section className="py-16 min-h-[490px] bg-stay-updated relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-0 pointer-events-none">
            <img src="/Send_fill.svg" alt="" className="absolute right-16 top-8 w-64 opacity-30 pointer-events-none" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="mb-6 text-5xl font-display text-stone-900">Stay Updated!</h2>
              <p className="mb-8 text-2xl text-stone-700">Get the latest news on merch drops, events, and community highlights.</p>
            </div>

            <div className="flex justify-center mt-6 pt-10">
              <div className="w-full max-w-4xl inline-flex items-center gap-4">
                <input aria-label="Email" className="flex-1 rounded-full px-8 py-6 bg-white/80 placeholder:text-stone-500 text-lg border border-stone-200" placeholder="Enter your email" />
                <Button className="rounded-full px-12 py-8 bg-slate-900 text-white inline-flex items-center gap-3 hover:bg-lime-400 hover:outline-solid outline-blue-400 hover:text-black">
                  <img src="/Send_fill.svg" alt="" className="w-6 h-6" />
                  <span className="text-lg">Subscribe</span>
                </Button>
              </div>
            </div>

            <div className="mt-4 text-center text-sm text-stone-600">No spam, just pure J-culture goodness. Unsubscribe anytime.</div>
          </div>
        </section>

      {/* Footer */}
      <footer className="relative bg-nihongo-green overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-[100px] top-[60px] w-[762px] h-[742px] bg-emerald-200 rounded-full blur-[200px] opacity-40" />
          <div className="absolute right-[120px] bottom-[-120px] w-[762px] h-[742px] bg-amber-200 rounded-full blur-[300px] opacity-30" />
        </div>
        <div className="max-w-[1313px] mx-auto px-4 py-20">
          <div className="inline-flex justify-start items-start gap-14 w-full">
            <div className="w-96 inline-flex flex-col justify-start items-start gap-12">
              <div className="flex flex-col gap-5">
                <div className="text-5xl text-black font-display">NIHONGO</div>
                <div className="text-xl text-stone-500">Indonesia’s platform for Japanese pop culture enthusiasts. Connect, shop, and explore the best of Japan’s culture right here.</div>
              </div>
              <div className="inline-flex gap-4">
                <a href="#" aria-label="X" className="w-9 h-9 bg-white/20 rounded flex items-center justify-center hover:bg-white/30">
                  <X className="w-5 h-5 text-black" />
                </a>
                <a href="#" aria-label="YouTube" className="w-9 h-9 bg-white/20 rounded flex items-center justify-center hover:bg-white/30">
                  <Youtube className="w-5 h-5 text-black" />
                </a>
                <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/20 rounded flex items-center justify-center hover:bg-white/30">
                  <Instagram className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>
            <div className="flex-1 flex gap-7">
              <div className="w-52 inline-flex flex-col gap-4 text-black">
                <div className="text-3xl font-display">Marketplace</div>
                <div className="text-stone-500"> All Products</div>
                <div className="text-stone-500">Figures & Collectibles</div>
                <div className="text-stone-500">Manga</div>
                <div className="text-stone-500">Apparel</div>
                <div className="text-stone-500">Official Vendors</div>
              </div>
              <div className="w-52 inline-flex flex-col gap-4 text-black">
                <div className="text-3xl font-display">Events</div>
                <div className="text-stone-500">Upcoming Events</div>
                <div className="text-stone-500">Anime Conventions</div>
                <div className="text-stone-500">J-Pop Concerts</div>
                <div className="text-stone-500">Cosplay Festivals</div>
                <div className="text-stone-500">Past Events</div>
              </div>
              <div className="w-52 inline-flex flex-col gap-4 text-black">
                <div className="text-3xl font-display">Community</div>
                <div>Forums</div>
                <div>Topics</div>
              </div>
              <div className="w-52 inline-flex flex-col gap-4 text-black">
                <div className="text-3xl font-display">Support</div>
                <div>
                <div className="text-stone-500">Help Center</div>
                <div className="text-stone-500">Contact Us</div>
                <div className="text-stone-500">Shipping Info</div>
                <div className="text-stone-500">Payment Methods</div>
                <div >FAQs</div>
              </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-between items-center text-stone-500 text-sm">
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
