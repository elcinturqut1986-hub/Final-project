import { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import MobileNav from '../components/layout/MobileNav'
import ArticleCard from '../components/article/ArticleCard'
import { useArticles } from '../context/ArticleContext'
import { categories } from '../utils/data'

const Home = () => {
  const { articles, filterByCategory, selectedCategory, isLoading, error } = useArticles()
  const [isLocalLoading, setIsLocalLoading] = useState(false)

  const handleCategoryClick = (categoryId) => {
    setIsLocalLoading(true)
    filterByCategory(categoryId)
    setTimeout(() => setIsLocalLoading(false), 300)
  }

  if (isLoading) {
    return (
      <div className="mx-auto flex w-full max-w-7xl">
        <Sidebar />
        <main className="min-h-dvh w-full max-w-2xl flex-1 border-slate-200 pb-16 lg:border-r lg:pb-0 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block size-8 animate-spin rounded-full border-4 border-slate-200 border-t-brand"></div>
            <p className="mt-4 text-slate-600">Xəbərlər yüklənir...</p>
          </div>
        </main>
        <MobileNav />
      </div>
    )
  }

  if (error) {
    return (
      <div className="mx-auto flex w-full max-w-7xl">
        <Sidebar />
        <main className="min-h-dvh w-full max-w-2xl flex-1 border-slate-200 pb-16 lg:border-r lg:pb-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 font-semibold">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-600 transition-colors"
            >
              Yenidən cəhd et
            </button>
          </div>
        </main>
        <MobileNav />
      </div>
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl">
      <Sidebar />

      <main className="min-h-dvh w-full max-w-2xl flex-1 border-slate-200 pb-16 lg:border-r lg:pb-0">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur">
          <h1 className="text-xl font-bold tracking-tight">Lent</h1>
          <nav className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4 xl:hidden">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-brand text-white shadow-md shadow-brand/40'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </header>

        <div className="flex flex-col divide-y divide-slate-200">
          {isLocalLoading ? (
            <>
              <div className="px-4 py-8 text-center text-slate-500">
                <div className="inline-block size-6 animate-spin rounded-full border-3 border-slate-200 border-t-brand"></div>
              </div>
            </>
          ) : articles.length === 0 ? (
            <div className="px-4 py-8 text-center text-slate-500">
              Xəbər tapılmadı
            </div>
          ) : (
            articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          )}
        </div>
      </main>

      <aside className="sticky top-0 hidden h-dvh w-80 shrink-0 space-y-4 px-5 py-5 xl:block">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Mövzular</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-brand text-white shadow-md shadow-brand/40 transform scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <MobileNav />
    </div>
  )
}

export default Home
