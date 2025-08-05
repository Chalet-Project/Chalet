"use client";

import { ModeToggle } from "./mode-toggle";
import { Breadcrumbs } from "./breadcrumbs";

export default function Header() {
  return (
    <div className="navbar bg-base-100 border-b border-base-300">
      <div className="flex-1">
        <Breadcrumbs />
      </div>
      <div className="flex-none">
        <ModeToggle />
      </div>
    </div>
  );
}
