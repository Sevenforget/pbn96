import { BlogCard } from "@/components/blog-card"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { FeaturedPost } from "@/components/featured-post"
import { getAllPosts } from "@/lib/posts"

export default function Home() {
  const posts = getAllPosts()
  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/images/travel-bg.png')",
          backgroundAttachment: "fixed",
        }}
      />

      <BlogHeader />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
              여행의 순간, 숙박의 추억
            </span>
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            세계 각지의 아름다운 여행지와 특별한 숙박 경험을 공유합니다. 여행을 사랑하는 모든 이들을 위한 공간입니다.
          </p>
        </section>

        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">추천 포스트</h2>
            <FeaturedPost post={featuredPost} />
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">최신 포스트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  )
}
