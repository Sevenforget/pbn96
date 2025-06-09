import Image from "next/image"
import Link from "next/link"
import { TagBadge } from "./tag-badge"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"
import { Clock, User } from "lucide-react"

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-full transition-transform hover:scale-[1.02] hover:shadow-xl">
        <div className="relative h-48 w-full">
          <Image src={post.coverImage || "/images/default-cover.png"} alt={post.title} fill className="object-cover" />
        </div>

        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>

          <div className="flex items-center text-sm text-gray-600 mb-3 gap-3">
            <div className="flex items-center">
              <User className="w-3 h-3 mr-1" />
              <span>{post.author || "관리자"}</span>
            </div>

            {post.date && (
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            )}
          </div>

          <p className="text-gray-600 mb-3 line-clamp-3">{post.excerpt}</p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-auto">
              {post.tags.slice(0, 3).map((tag) => (
                <TagBadge key={tag} tag={tag} size="sm" />
              ))}
              {post.tags.length > 3 && <span className="text-xs text-gray-500">+{post.tags.length - 3}</span>}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
