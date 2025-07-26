import { getAboutContent } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function HomePage() {
  const aboutContent = getAboutContent()

  return (
    <div className="prose prose-lg mx-auto">
      <MDXRemote source={aboutContent} />
    </div>
  )
}