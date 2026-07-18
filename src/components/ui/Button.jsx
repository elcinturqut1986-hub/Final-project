const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl'
  
  const variants = {
    primary: 'bg-brand hover:bg-brand-600 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900',
    outline: 'border-2 border-slate-300 hover:border-brand text-slate-700 hover:text-brand'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
