import { getBlogPosts } from '@/lib/getBlogPosts'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import 'highlight.js/styles/github-dark.css'

export function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts = getBlogPosts()
  const postIndex = posts.findIndex((post) => post.slug === params.slug)
  const previousPost = postIndex > 0 ? posts[postIndex - 1] : null
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null

  const filePath = path.join(process.cwd(), `public/content/blog/${params.slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    return notFound()
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return (
    <section className="min-h-screen bg-neutral-950/90 py-12">
      <Container>
        <div className="mx-auto max-w-3xl rounded-lg bg-neutral-900 p-8 shadow-xl transition-all hover:shadow-2xl">
          <Link href="/blog" className="mb-4 flex items-center text-green-400 hover:underline">
            ← Back to Blog
          </Link>
          <h1 className="text-center text-5xl font-bold leading-tight text-white">{data.title}</h1>
          <p className="mt-2 text-center text-lg text-neutral-400">
            By <span className="text-green-400">{data.author}</span> • {data.date}
          </p>

          {data.image && (
            <div className="relative mt-6 h-80 w-full overflow-hidden rounded-lg shadow-lg">
              <Image src={data.image} alt={data.title} fill className="rounded-lg" />
            </div>
          )}

          <article className="prose prose-invert prose-green mt-6 max-w-none text-lg leading-relaxed text-neutral-300">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{
                h1: ({ children }) => (
                  <h1 className="border-b-2 border-green-500 pb-2 text-4xl font-bold text-green-400">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-6 text-3xl font-semibold text-green-300">{children}</h2>
                ),
                p: ({ children }) => <p className="mt-3 text-lg text-neutral-300">{children}</p>,
                a: ({ children }) => <a className="text-green-400 hover:underline">{children}</a>,
              }}
            >
              {content}
            </ReactMarkdown>
          </article>

          <div className="mt-10 flex items-center justify-between border-t border-neutral-700 pt-6">
            {previousPost ? (
              <Link
                href={`/blog/${previousPost.slug}`}
                className="flex items-center text-green-400 hover:underline"
              >
                ← {previousPost.title}
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex items-center text-green-400 hover:underline"
              >
                {nextPost.title} →
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
