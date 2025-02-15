import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'src/content/blog')

export function getBlogPosts() {
  if (!fs.existsSync(blogDirectory)) {
    console.error('❌ Blog directory does not exist:', blogDirectory)
    return []
  }

  const files = fs.readdirSync(blogDirectory)

  return files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(blogDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)

      return {
        ...data,
        slug: filename.replace('.md', ''),
      }
    })
}
