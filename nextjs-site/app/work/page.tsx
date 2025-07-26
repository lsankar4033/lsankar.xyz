import Link from 'next/link'
import { getPostsByCategory } from '@/lib/posts'
import { format } from 'date-fns'

export default function WorkPage() {
  const posts = getPostsByCategory('work')

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-medium mb-8 font-work-sans">Work</h1>
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-0">
            <Link href={`/posts/${post.slug}`} className="group">
              <h2 className="text-xl font-medium mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            <time className="text-sm text-gray-500">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            {post.excerpt && (
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}