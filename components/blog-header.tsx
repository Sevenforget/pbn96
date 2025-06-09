import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 bg-blue-50/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image src="/images/logo.png" alt="Travel Blog Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
              여행노트
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
              홈
            </Link>
            <Link href="/categories/travel" className="text-gray-700 hover:text-teal-600 transition-colors">
              여행
            </Link>
            <Link href="/categories/accommodation" className="text-gray-700 hover:text-teal-600 transition-colors">
              숙박
            </Link>
            <Link href="/categories/tips" className="text-gray-700 hover:text-teal-600 transition-colors">
              여행 팁
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
              소개
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="검색..."
                className="py-2 pl-9 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent w-40 md:w-auto"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
