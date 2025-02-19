import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'public/content/blog')

export interface BlogPost {
  title: string
  date: string
  author: string
  excerpt: string
  image: string
  slug: string
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    console.error('Blog directory does not exist:', blogDirectory)
    return []
  }

  const files = fs.readdirSync(blogDirectory)

  return files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(blogDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)

      return {
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        image: data.image,
        slug: filename.replace('.mdx', ''),
      }
    })
}
