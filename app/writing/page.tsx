import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { format } from 'date-fns'

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-medium mb-8 font-work-sans">Writing</h1>
      <div className="space-y-1">
        {posts.map(post => (
          <article key={post.slug} className="py-1">
            <Link href={`/posts/${post.slug}`} className="group flex items-baseline justify-between hover:bg-gray-50 -mx-2 px-2 py-1 rounded">
              <h2 className="text-base font-medium group-hover:text-blue-600 transition-colors leading-snug">
                {post.title}
              </h2>
              <time className="text-xs text-gray-500 ml-4 flex-shrink-0">
                {format(new Date(post.date), 'MMM yyyy')}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}