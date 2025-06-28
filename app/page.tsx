'use client'

import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [showMusicDropdown, setShowMusicDropdown] = useState(false)
  const [dropdownHeight, setDropdownHeight] = useState(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setShowMusicDropdown(!showMusicDropdown)

  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(showMusicDropdown ? dropdownRef.current.scrollHeight : 0)
    }
  }, [showMusicDropdown])

  const buttons = [
    {
      label: 'VIDEOS',
      href: 'https://www.youtube.com/@julianmunyard4802',
    },
    {
      label: 'MUNYARD MIXER',
      href: 'https://munyard-mixer-git-main-julianmunyards-projects.vercel.app/',
    },
    {
      label: 'VIDEO VULTURE',
      href: 'https://video-vulture-git-main-julianmunyards-projects.vercel.app/',
    },
    {
      label: 'TEXTURE ADDER',
      href: 'https://texture-adder-next-mvd6.vercel.app/',
    },
  ]

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <main className="relative w-full min-h-[100lvh] font-mono overflow-x-hidden">
        {/* 🔴 Fullscreen Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="fixed inset-0 w-full h-full object-cover z-0"
        >
          <source src="/DEMO2768.mp4" type="video/mp4" />
        </video>

        {/* 🔴 Foreground Scrollable Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 min-h-[100lvh] space-y-4">
          {/* MUSIC BUTTON + DROPDOWN */}
          <div className="w-full max-w-xs">
            <button
              onClick={toggleDropdown}
              className="w-full bg-red-600 text-[#fdf5e6] py-3 px-6 text-center font-semibold rounded-xl transform transition-all hover:translate-y-1 flex items-center justify-center gap-2 uppercase"
            >
              music
              <span className="text-sm">▼</span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden bg-white ${
                showMusicDropdown ? 'border border-red-600 rounded-xl' : ''
              }`}
              style={{ height: dropdownHeight }}
            >
              <div ref={dropdownRef}>
                <a
                  href="https://music.apple.com/au/artist/julian-munyard/1537050328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-red-600 hover:bg-red-100 uppercase"
                >
                  apple music
                </a>
                <a
                  href="https://open.spotify.com/artist/0BkUOiB7E3svu2rHnYNaHO?si=q0eNpFd_QPaZ1voxH82PKw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-red-600 hover:bg-red-100 uppercase"
                >
                  spotify
                </a>
              </div>
            </div>
          </div>

          {/* OTHER BUTTONS */}
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs text-[#fdf5e6] bg-red-600 py-3 px-6 text-center font-semibold rounded-xl transform transition-all hover:translate-y-1 uppercase"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
