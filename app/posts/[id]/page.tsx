import { BlogFooter } from "@/components/blog-footer";
import { BlogHeader } from "@/components/blog-header";
import { TagBadge } from "@/components/tag-badge";
import { fetchPostFromApi } from "@/lib/api-service";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number.parseInt(id);

  if (isNaN(postId) || postId < 0) {
    notFound();
  }

  try {
    // 현재 프로젝트의 도메인 자동 감지
    const communityUrl = "https://koshikoshi.net"; // 하드코딩된 도메인 (pbn-domains.json 기반)

    // API에서 게시물 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, postId);

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
          <Link
            href="/"
            className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            모든 포스트로 돌아가기
          </Link>

          <article className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            {post.coverImage && (
              <div className="relative h-[40vh] w-full">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{post.author || "관리자"}</span>
                </div>

                {post.date && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <time dateTime={post.date}>
                      {formatDate(new Date(post.date).toISOString())}
                    </time>
                  </div>
                )}

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>
                )}
              </div>

              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </article>
        </main>

        <BlogFooter />
      </div>
    );
  } catch (error) {
    console.error("게시물 로드 실패:", error);
    notFound();
  }
}
