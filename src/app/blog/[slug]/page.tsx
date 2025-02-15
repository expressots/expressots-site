import { getBlogPosts } from '@/lib/getBlogPosts'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'

export function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), `src/content/blog/${params.slug}.md`)

  if (!fs.existsSync(filePath)) {
    return notFound()
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return (
    <section className="min-h-screen bg-neutral-950/90 py-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-center text-4xl font-bold text-white">{data.title}</h1>
          <p className="mt-2 text-center text-neutral-400">
            By {data.author} • {data.date}
          </p>

          {data.image && (
            <div className="relative mt-6 h-64 w-full">
              <Image
                src={data.image}
                alt={data.title}
                width={800}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          )}

          <article className="prose prose-invert prose-green mt-6 max-w-none text-neutral-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </Container>
    </section>
  )
}
