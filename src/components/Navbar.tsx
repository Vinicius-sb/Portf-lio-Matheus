'use client'
import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold text-brand">Matheus</a>
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            <span className="sr-only">Menu</span>
            <div className="w-5 h-[2px] bg-current mb-1"></div>
            <div className="w-5 h-[2px] bg-current mb-1"></div>
            <div className="w-5 h-[2px] bg-current"></div>
          </button>
          <ul className="hidden md:flex items-center gap-6">
            <li><a href="#skills" className="hover:text-brand">Competências</a></li>
            <li><a href="#contact" className="hover:text-brand">Contato</a></li>
            <li>
              <button
                onClick={() => setDark(d => !d)}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Alternar tema"
              >
                {dark ? <FiSun /> : <FiMoon />}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <ul className="px-4 py-2 space-y-2">
            <li><a href="#skills" className="block py-2">Competências</a></li>
            <li><a href="#contact" className="block py-2">Contato</a></li>
            <li>
              <button
                onClick={() => setDark(d => !d)}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
              >
                Alternar tema
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}