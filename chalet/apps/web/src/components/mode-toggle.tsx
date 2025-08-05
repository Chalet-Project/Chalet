"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ModeToggle(): React.JSX.Element {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="btn btn-ghost btn-circle">
        <Sun className="h-5 w-5" />
      </div>
    )
  }

  const currentTheme = theme || resolvedTheme || "bumblebee"

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    // Force update the document attribute immediately
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        {currentTheme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow border border-base-300">
        <li>
          <button
            onClick={() => handleThemeChange("bumblebee")}
            className={currentTheme === "bumblebee" ? "active" : ""}
          >
            <Sun className="h-4 w-4" />
            Light Theme
          </button>
        </li>
        <li>
          <button
            onClick={() => handleThemeChange("dark")}
            className={currentTheme === "dark" ? "active" : ""}
          >
            <Moon className="h-4 w-4" />
            Dark Theme
          </button>
        </li>
      </ul>
    </div>
  )
}
