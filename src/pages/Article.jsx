import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Heart, Eye, Share2, Bookmark, Home, Bookmark as BookmarkIcon, User } from 'lucide-react'
import { useArticles } from '../context/ArticleContext'

const Article = () => {
  const { id } = useParams()
  const { getArticleById, likeArticle } = useArticles()
  const article = getArticleById(id)

  if (!article) {
    return (
      <div className="flex min-h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold">Xəbər tapılmadı</h2>
          <Link to="/" className="mt-4 inline-block text-brand hover:underline">
            Lentə qayıt
          </Link>
        </div>
      </div>
    )
  }

  const handleLike = () => {
    likeArticle(article.id)
  }

  return (
    <>
      <main className="mx-auto min-h-dvh w-full max-w-2xl border-x border-slate-200 pb-20 lg:border-x">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-3.5 backdrop-blur shadow-sm">
          <Link
            to="/"
            className="rounded-xl p-2.5 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-all duration-200 hover:shadow-md"
          >
            <ArrowLeft className="size-5" />
          </Link>
          <h1 className="text-base font-bold tracking-tight text-slate-900">Xəbər Mətəni</h1>
        </header>

        <article className="px-4 py-4">
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
            <span className="font-semibold text-slate-700">{article.author}</span>
            <span>·</span>
            <span>{article.time}</span>
          </div>

          <h2 className="mt-3 text-2xl leading-tight font-extrabold text-slate-900">
            {article.title}
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold text-brand bg-brand/10 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-slate-700">
            {article.content ? article.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            )) : (
              <p>{article.excerpt}</p>
            )}
          </div>

          <a
            href="#"
            className="bg-gradient-to-r from-brand to-orange-500 hover:from-brand-600 hover:to-orange-600 mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            Orijinal Maqələni Oxu
          </a>

          <div className="mt-5 flex items-center gap-1 border-y border-slate-200 py-2">
            <button className="action-btn flex h-[35px] items-center gap-1 rounded-full px-3 text-sm text-slate-600 transition-all hover:bg-slate-100">
              <MessageCircle className="size-4" />
              {article.comments}
            </button>
            
            <button 
              onClick={handleLike}
              className={`action-btn flex h-[35px] items-center gap-1 rounded-full px-3 text-sm transition-all hover:bg-slate-100 ${
                article.liked ? 'text-brand' : 'text-slate-600'
              }`}
            >
              <Heart className="size-4" fill={article.liked ? 'currentColor' : 'none'} />
              {article.likes}
            </button>
            
            <span className="action-btn flex h-[35px] items-center gap-1 rounded-full px-3 text-sm text-slate-600">
              <Eye className="size-4" />
              {article.views}
            </span>
            
            <button className="action-btn ml-auto flex h-[35px] items-center gap-1 rounded-full px-3 text-sm text-slate-600 transition-all hover:bg-slate-100">
              <Share2 className="size-4" />
              Paylaş
            </button>
            
            <button className="action-btn flex h-[35px] items-center gap-1 rounded-full px-3 text-sm text-slate-600 transition-all hover:bg-slate-100">
              <Bookmark className="size-4" />
            </button>
          </div>
        </article>

        <section className="px-4 py-5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Rəylər ({article.comments})
          </h3>
          <div className="py-8 text-center text-sm text-slate-500">
            Hələ rəy yoxdur. İlk rəyi sen yaz!
          </div>
        </section>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-slate-200 bg-white/95 px-2 py-1.5 backdrop-blur lg:hidden">
        <Link
          to="/"
          className="rounded-full p-2 text-slate-600"
        >
          <Home className="size-6" />
        </Link>
        <Link
          to="/saved"
          className="rounded-full p-2 text-slate-600"
        >
          <BookmarkIcon className="size-6" />
        </Link>
        <Link
          to="/login"
          className="rounded-full p-2 text-slate-600"
        >
          <User className="size-6" />
        </Link>
      </nav>
    </>
  )
}

export default Article
