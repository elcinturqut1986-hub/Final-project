import { Link } from 'react-router-dom'

const ArticleCard = ({ article }) => {
  return (
    <article className="border-b border-slate-200 px-4 py-4">
      <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
        <span className="font-medium text-slate-700">{article.author}</span>
        <span>·</span>
        <span>{article.time}</span>
      </div>
      
      <Link to={`/article/${article.id}`} className="group">
        <h2 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-brand transition-colors">
          {article.title}
        </h2>
        <p className="mb-2 text-sm leading-relaxed text-slate-600">
          {article.excerpt}
        </p>
      </Link>
      
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="text-xs font-medium text-brand">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ArticleCard
