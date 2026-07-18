import { Link } from 'react-router-dom'
import { ArrowLeft, Home, Bookmark, User } from 'lucide-react'
import Button from '../components/ui/Button'

const Login = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl border border-slate-200">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Daxil ol</h1>
            <p className="text-sm text-slate-500">Hesabınıza daxil olun</p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-slate-50 text-slate-900 font-medium transition-all duration-300 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Parol</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-slate-50 text-slate-900 font-medium transition-all duration-300 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <Button variant="primary" size="lg" className="mt-2">
              Daxil ol
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            Hesabın yoxdur?{' '}
            <Link to="/login" className="text-brand font-semibold hover:underline">
              Qeydiyyatdan keç
            </Link>
          </div>

          <Link
            to="/"
            className="mt-6 flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-slate-50 text-slate-600 font-medium hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Lentə qayıt
          </Link>
        </div>
      </div>

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
          <Bookmark className="size-6" />
        </Link>
        <Link
          to="/login"
          className="rounded-full p-2 text-brand"
        >
          <User className="size-6" />
        </Link>
      </nav>
    </>
  )
}

export default Login
