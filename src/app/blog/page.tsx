import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import rehypeRaw from "rehype-raw";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="max-w-2xl mx-auto px-4">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight font-bold text-xl">
                  {post.metadata.title}
                </p>
                <p className="h-6 text-sm text-muted-foreground">
                  {typeof post.metadata.publishedAt === "string"
                    ? post.metadata.publishedAt
                    : new Date(post.metadata.publishedAt)
                        .toISOString()
                        .slice(0, 10)}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
