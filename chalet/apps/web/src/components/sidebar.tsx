"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Server,
  HardDrive,
  Network,
  Settings,
  Activity,
  Container,
  Database,
  Shield,
  Users,
  Calendar,
  FileText,
  Cloud,
  Zap,
  BarChart3,
  Bell,
} from "lucide-react";

const sidebarCategories = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: Home,
        description: "System overview and statistics",
      },
      {
        title: "Monitoring",
        href: "/monitoring",
        icon: Activity,
        description: "Real-time system monitoring",
      },
    ],
  },
  {
    title: "Compute",
    items: [
      {
        title: "Virtual Machines",
        href: "/vms",
        icon: Server,
        description: "Manage virtual machines",
      },
      {
        title: "Containers",
        href: "/containers",
        icon: Container,
        description: "LXC container management",
      },
      {
        title: "Templates",
        href: "/templates",
        icon: FileText,
        description: "VM and container templates",
      },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      {
        title: "Storage",
        href: "/storage",
        icon: HardDrive,
        description: "Storage pools and volumes",
      },
      {
        title: "Network",
        href: "/network",
        icon: Network,
        description: "Network configuration",
      },
      {
        title: "Cluster",
        href: "/cluster",
        icon: Cloud,
        description: "Cluster management",
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        title: "Backup",
        href: "/backup",
        icon: Database,
        description: "Backup and restore",
      },
      {
        title: "Scheduler",
        href: "/scheduler",
        icon: Calendar,
        description: "Task scheduling",
      },
      {
        title: "Alerts",
        href: "/alerts",
        icon: Bell,
        description: "System notifications",
      },
    ],
  },
  {
    title: "Administration",
    items: [
      {
        title: "Users",
        href: "/users",
        icon: Users,
        description: "User management",
      },
      {
        title: "Security",
        href: "/security",
        icon: Shield,
        description: "Security settings",
      },
      {
        title: "Performance",
        href: "/performance",
        icon: BarChart3,
        description: "Performance analysis",
      },
      {
        title: "System",
        href: "/system",
        icon: Zap,
        description: "System configuration",
      },
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
        description: "Application settings",
      },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full bg-base-200 border-r border-base-300">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-base-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Server className="w-6 h-6 text-primary-content" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-base-content">
                Proxmox Manager
              </h1>
              <p className="text-sm text-base-content/60">
                Professional PVE Interface
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-6">
            {sidebarCategories.map((category) => (
              <div key={category.title} className="space-y-2">
                <h3 className="text-xs font-semibold text-base-content/70 uppercase tracking-wider px-3">
                  {category.title}
                </h3>
                <ul className="space-y-1">
                  {category.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`
                            group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                            ${
                              isActive
                                ? "bg-primary text-primary-content shadow-sm"
                                : "text-base-content/80 hover:bg-base-300 hover:text-base-content"
                            }
                          `}
                          title={item.description}
                        >
                          <item.icon
                            className={`
                              w-5 h-5 transition-transform duration-200
                              ${isActive ? "text-primary-content" : "text-base-content/60 group-hover:text-base-content"}
                              ${isActive ? "scale-110" : "group-hover:scale-105"}
                            `}
                          />
                          <span className="truncate">{item.title}</span>
                          {isActive && (
                            <div className="ml-auto w-1.5 h-1.5 bg-primary-content rounded-full" />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-base-300">
          <div className="flex items-center gap-3 p-3 bg-base-300 rounded-lg">
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-success-content rounded-full animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-base-content truncate">
                System Online
              </p>
              <p className="text-xs text-base-content/60">
                All services running
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
