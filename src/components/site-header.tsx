import { Link } from "react-router-dom";

import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileDropdown } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="px-5 lg:container flex h-16 items-center sm:justify-between space-x-0">
        <Link
          to="/"
          className="items-center space-x-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring ring-offset-background flex h-9 mr-3 px-3 hover:bg-accent duration-150"
        >
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold text-lg">{siteConfig.name}</span>
        </Link>

        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              to={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <ThemeToggle className="hidden md:inline-flex" />
            <MobileDropdown
              items={{ main: siteConfig.mainNav, docs: siteConfig.sidebarNav }}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
