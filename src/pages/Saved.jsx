import Sidebar from '../components/layout/Sidebar'
import MobileNav from '../components/layout/MobileNav'
import ArticleCard from '../components/article/ArticleCard'
import { useArticles } from '../context/ArticleContext'

const Saved = () => {
  const { allArticles } = useArticles()
  const savedArticles = allArticles.filter(article => article.saved)

  return (
    <div className="mx-auto flex w-full max-w-7xl">
      <Sidebar />

      <main className="min-h-dvh w-full max-w-2xl flex-1 border-slate-200 pb-16 lg:border-r lg:pb-0">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur shadow-sm">
          <h1 className="text-lg font-bold tracking-tight text-slate-900">Saxlanılanlar</h1>
          <p className="text-xs text-slate-500 mt-1">Sonra oxumaq üçün saxladığın xəbərlər</p>
        </header>

        <div className="flex flex-col divide-y divide-slate-100">
          {savedArticles.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
              <div className="text-4xl mb-3">📖</div>
              <h2 className="text-base font-semibold text-slate-900 mb-1">Saxlanılan xəbər yoxdur</h2>
              <p className="text-sm text-slate-500">Xəbərlər saxlamaq üçün əlfin ikonuna bas</p>
            </div>
          ) : (
            savedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          )}
        </div>
      </main>

      <aside className="sticky top-0 hidden h-dvh w-80 shrink-0 space-y-4 px-5 py-5 xl:block">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Saxlanılanlar</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Sonra oxumaq üçün saxladığın xəbərlər burada toplanır. Hər xəbərin
            altındakı əlfəcin ikonuna basaraq əlavə et və ya çıxar.
          </p>
        </div>
      </aside>

      <MobileNav />
    </div>
  )
}

export default Saved
