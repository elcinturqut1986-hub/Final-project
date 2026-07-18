import { Link } from 'react-router-dom'
import { Home, Bookmark, LogIn } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="hidden w-64 shrink-0 flex-col gap-1 border-r border-slate-200 px-3 py-3 lg:flex">
      <Link to="/" className="mb-2 flex items-center px-3 py-2">
        <span className="text-brand inline-flex items-baseline text-2xl font-extrabold tracking-tight">
          Gündəm
          <span className="bg-brand ml-0.5 inline-block size-1.5 rounded-full"></span>
        </span>
      </Link>

      <nav className="flex flex-1 flex-col gap-1 text-xl">
        <Link
          to="/"
          className="flex items-center gap-4 rounded-full px-4 py-3 text-slate-700 transition-colors hover:bg-slate-100"
        >
          <Home className="size-6" />
          <span>Lent</span>
        </Link>
        <Link
          to="/saved"
          className="flex items-center gap-4 rounded-full px-4 py-3 text-slate-700 transition-colors hover:bg-slate-100"
        >
          <Bookmark className="size-6" />
          <span>Saxlanılanlar</span>
        </Link>
      </nav>

      <div className="mt-auto">
        <Link
          to="/login"
          className="bg-slate-900 hover:bg-slate-950 flex items-center justify-center gap-2 rounded-full px-4 py-3 text-base font-bold text-white transition-colors shadow-lg"
        >
          <LogIn className="size-5" />
          Daxil ol / Qeydiyyat
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
