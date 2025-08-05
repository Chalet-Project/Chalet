"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { 
  Home, 
  Server, 
  HardDrive, 
  Network, 
  Settings, 
  Activity,
  Container,
  Database,
  ChevronRight
} from "lucide-react"

const routeIcons: Record<string, any> = {
  "/": Home,
  "/vms": Server,
  "/containers": Container,
  "/storage": HardDrive,
  "/network": Network,
  "/backup": Database,
  "/monitoring": Activity,
  "/settings": Settings,
}

const routeNames: Record<string, string> = {
  "/": "Dashboard",
  "/vms": "Virtual Machines",
  "/containers": "Containers",
  "/storage": "Storage",
  "/network": "Network",
  "/backup": "Backup",
  "/monitoring": "Monitoring",
  "/settings": "Settings",
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)
  
  const breadcrumbs = [
    { name: "Dashboard", href: "/", icon: Home },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const icon = routeIcons[href] || Settings
      const name = routeNames[href] || segment.charAt(0).toUpperCase() + segment.slice(1)
      return { name, href, icon }
    })
  ]

  // Remove duplicate dashboard if we're on the home page
  if (pathname === "/") {
    return (
      <div className="breadcrumbs text-sm">
        <ul>
          <li className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            Dashboard
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href}>
            {index < breadcrumbs.length - 1 ? (
              <Link href={crumb.href} className="flex items-center gap-2 link link-hover">
                <crumb.icon className="w-4 h-4" />
                {crumb.name}
              </Link>
            ) : (
              <span className="flex items-center gap-2">
                <crumb.icon className="w-4 h-4" />
                {crumb.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
