import { getBlogPosts } from '@/lib/getBlogPosts'
import Container from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = getBlogPosts()

  return (
    <section className="min-h-screen bg-neutral-950/90 py-12">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h1 className="text-center text-4xl font-bold text-white">All Blog Posts</h1>
          <p className="mt-2 text-center text-neutral-400">
            Explore the latest articles about development, testing, and open-source contributions.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-lg bg-neutral-800 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-neutral-400">
                    {post.author} • {post.date}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-white group-hover:text-green-400">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-400">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
