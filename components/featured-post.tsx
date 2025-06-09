import Image from "next/image"
import Link from "next/link"
import { TagBadge } from "./tag-badge"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"
import { ArrowRight, Clock, User } from "lucide-react"

interface FeaturedPostProps {
  post: Post
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.01] hover:shadow-xl">
        <div className="md:flex">
          <div className="relative md:w-1/2 h-64 md:h-auto">
            <Image
              src={post.coverImage || "/images/default-cover.png"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:w-1/2 flex flex-col">
            <h3 className="text-2xl font-bold mb-3">{post.title}</h3>

            <div className="flex items-center text-gray-600 mb-4 gap-4">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author || "관리자"}</span>
              </div>

              {post.date && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              )}
            </div>

            <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            )}

            <div className="inline-flex items-center text-teal-600 font-medium">
              더 읽어보기 <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
