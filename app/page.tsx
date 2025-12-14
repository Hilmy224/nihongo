"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChevronDown, Menu, ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from "lucide-react"
import { useState } from "react"
import SectionWithGrid from "@/components/ui/section-with-grid"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <SectionWithGrid sidePaddingPercent={10} cols={23} gridGapClass="gap-x-2" className="h-16" gradientClass="" gradientInside={true}>
          <div className="container mx-auto flex h-full items-center justify-between px-4">
            <div className="relative z-10 text-3xl font-display text-stone-900">NIHONGO</div>

            <nav className="hidden items-center gap-8 md:flex font-sans relative z-10 ">
              <a href="#" aria-current="page" className="text-xl font-bold text-stone-900">Home</a>
              <a href="#" className="text-xl text-stone-700 hover:text-stone-900">Marketplace</a>
              <a href="#" className="text-xl text-stone-700 hover:text-stone-900">Events</a>
              <a href="#" className="text-xl text-stone-700 hover:text-stone-900">Community</a>
            </nav>

            <div className="flex items-center gap-4 relative z-10">
              <a href="#" className="hidden text-xl text-stone-700 md:block">Sign In</a>
              <Button size="sm" className="hidden md:inline-flex rounded-full px-4 py-2 text-xl bg-blue-400 text-white font-sans hover:from-blue-500">
                Sign Up
              </Button>

              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </SectionWithGrid>
      </header>
      <SectionWithGrid sidePaddingPercent={10} cols={23} gridGapClass="gap-x-2" className="h-[500px] w-full overflow-hidden" evenClass="bg-red-100" oddClass="bg-stone-100" gradientClass="bg-gradient-to-br from-stone-200/30 via-stone-300/20 to-stone-400/30" gradientInside={true}>
      {/* Hero Section */}
      
      
        <div className="container mx-auto flex h-full items-center justify-center px-4 relative">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-stone-900">start your adventure</h1>
            <Button size="lg" className="bg-stone-800 text-white hover:bg-stone-700">
              sign up now
            </Button>
          </div>

          {/* Hero image (use jap_img.png) */}
          <div className="hidden lg:block absolute right-10 top-6 z-10">
            <img src="/jap_img.png" alt="Hero" className="w-[360px] h-[360px] rounded-xl object-cover shadow-md" />
          </div>
        </div>
      </SectionWithGrid>

      {/* Fold Line */}
      <SectionWithGrid sidePaddingPercent={10} cols={23} gridGapClass="gap-x-2" className="border-t-2 border-dashed border-stone-300 py-2" evenClass="bg-red-100" oddClass="bg-stone-100" gradientClass="bg-gradient-to-r from-stone-50/20 to-stone-100/10" gradientInside={true}>
        <div className="container mx-auto px-4 py-2">
          <span className="text-xs text-stone-500">fold</span>
        </div>
      </SectionWithGrid>

      {/* Main Content */}

      <SectionWithGrid sidePaddingPercent={10} cols={23} gridGapClass="gap-x-2" className="py-12" gradientClass="bg-gradient-to-br from-white/10 to-transparent" gradientInside={true}>

        <main className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Carousel/Slider */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-lg border bg-stone-100">
              <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-400 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <p className="text-lg font-medium">Carousel/Slider</p>
                  <p className="text-sm">Slide {currentSlide + 1} of 3</p>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      currentSlide === index ? "bg-stone-800" : "bg-stone-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-stone-900">Recent Articles</h2>
              <div className="space-y-4">
                <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm text-stone-700">Duis autem vel eum iriure dolor</p>
                </div>
                <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm text-stone-700">Odio dignissim qui blandi</p>
                </div>
                <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm text-stone-700">Ut wisi enim ad minim</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Content Section */}
        <div className="mt-12">
          <h2 className="mb-6 text-3xl font-bold text-stone-900">Lorem Ipsum</h2>
          <div className="space-y-4 text-stone-700">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
              te feugait nulla facilisi.{" "}
              <a
                href="#"
                className="underline decoration-2 underline-offset-2 hover:text-stone-900"
              >
                commodo consequat
              </a>
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
      </main>
      </SectionWithGrid>

      {/* Footer */}
      <SectionWithGrid sidePaddingPercent={10} cols={23} gridGapClass="gap-x-2" className="mt-16 border-t bg-stone-100 py-8" evenClass="bg-stone-100" oddClass="bg-stone-50" gradientClass="bg-gradient-to-r from-white/10 to-transparent" gradientInside={true}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-stone-900">Contact</h3>
              <p className="text-sm text-stone-600">
                1400 John F Kennedy Blvd<br />
                Philadelphia, PA 19107
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold text-stone-900">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-stone-600 hover:text-stone-900"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-stone-600 hover:text-stone-900"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-stone-600 hover:text-stone-900"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="text-sm text-stone-600">
              Copyright © 2021
            </div>
          </div>
        </div>
      </SectionWithGrid>
    </div>
  )
}
