import { Link, useLocation } from 'react-router-dom'
import { Home, Bookmark, LogIn, UserPlus } from 'lucide-react'

const MobileNav = () => {
  const location = useLocation()

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-slate-200 bg-white/95 px-2 py-1.5 backdrop-blur lg:hidden">
      <Link
        to="/"
        className={`rounded-full p-2 ${location.pathname === '/' ? 'text-brand' : 'text-slate-600'}`}
      >
        <Home className="size-6" />
      </Link>
      <Link
        to="/saved"
        className={`rounded-full p-2 ${location.pathname === '/saved' ? 'text-brand' : 'text-slate-600'}`}
      >
        <Bookmark className="size-6" />
      </Link>
      <Link
        to="/login"
        className={`rounded-full p-2 ${location.pathname === '/login' ? 'text-brand' : 'text-slate-600'}`}
      >
        <LogIn className="size-6" />
      </Link>
      <Link
        to="/login"
        className="rounded-full p-2 text-brand"
      >
        <UserPlus className="size-6" />
      </Link>
    </nav>
  )
}

export default MobileNav
