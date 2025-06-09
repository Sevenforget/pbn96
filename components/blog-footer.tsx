import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function BlogFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">여행노트</h3>
            <p className="text-gray-400 mb-4">
              세계 각지의 아름다운 여행지와 특별한 숙박 경험을 공유하는 블로그입니다. 여행을 사랑하는 모든 이들을 위한
              공간입니다.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">카테고리</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/travel" className="text-gray-400 hover:text-white transition-colors">
                  여행
                </Link>
              </li>
              <li>
                <Link href="/categories/accommodation" className="text-gray-400 hover:text-white transition-colors">
                  숙박
                </Link>
              </li>
              <li>
                <Link href="/categories/tips" className="text-gray-400 hover:text-white transition-colors">
                  여행 팁
                </Link>
              </li>
              <li>
                <Link href="/categories/food" className="text-gray-400 hover:text-white transition-colors">
                  맛집
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">구독하기</h3>
            <p className="text-gray-400 mb-4">최신 여행 정보와 특별한 숙박 정보를 받아보세요.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="이메일 주소"
                className="px-4 py-2 rounded-l-md flex-grow text-gray-900 focus:outline-none"
              />
              <button type="submit" className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-r-md transition-colors">
                구독
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} 여행노트. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
