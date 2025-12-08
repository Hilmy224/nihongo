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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-lg font-semibold text-stone-900">WEBSITE LOGO</div>
          
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm text-stone-600 hover:text-stone-900">about</a>
            <a href="#" className="text-sm text-stone-600 hover:text-stone-900">blog</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-stone-600 hover:text-stone-900">
                products
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>category 1</DropdownMenuItem>
                <DropdownMenuItem>category 2</DropdownMenuItem>
                <DropdownMenuItem>category 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#" className="text-sm text-stone-600 hover:text-stone-900">contact</a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden bg-gradient-to-br from-stone-200 via-stone-300 to-stone-400">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMCAyMGMxMCAxMCAyMCAxMCAzMCAwczIwLTEwIDMwIDBzMjAgMTAgMzAgMCIgc3Ryb2tlPSIjYzhiYThhIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto flex h-full items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-stone-900">start your adventure</h1>
            <Button size="lg" className="bg-stone-800 text-white hover:bg-stone-700">
              sign up now
            </Button>
          </div>
        </div>
      </section>

      {/* Fold Line */}
      <div className="border-t-2 border-dashed border-stone-300">
        <div className="container mx-auto px-4 py-2">
          <span className="text-xs text-stone-500">fold</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
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
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                  consequat.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.
                  consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                  et iusto odio dignissim qui blandit praesent.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600">
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t bg-stone-100">
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
      </footer>
    </div>
  )
}
