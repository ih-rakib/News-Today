"use client";

import React, { useContext } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { MobileMenu } from "./MobileMenu";
import { usePathname } from "next/navigation";
import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const pathname = usePathname();
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Navbar must be used within a ThemeProvider");
  }

  const { isDarkMode, toggleTheme } = context;

  return (
    <header className="py-4 shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">News Today</Link>
        </div>

        {/* navigation for desktop */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/news"
                className={`${
                  pathname === "/news" ? "text-blue-800 font-semibold" : ""
                } hover:text-gray-600`}
              >
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>

              <NavigationMenuContent>
                <NavigationMenuLink>
                  <ul className="shadow-md rounded-md py-4 px-5 space-y-2 w-max">
                    <li>
                      <NavigationMenuLink
                        href="/services/web-development"
                        className="hover:text-gray-600"
                      >
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/mobile-apps"
                        className="hover:text-gray-600"
                      >
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/software-development"
                        className="hover:text-gray-600"
                      >
                        Software Development
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={`${
                  pathname === "/about" ? "text-blue-800 font-semibold" : ""
                } hover:text-gray-600`}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-blue-800 font-semibold" : ""
                } hover:text-gray-600`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* dark mode and login */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
          </div>
          <Link href="/login">
            <Button variant="default">Login</Button>
          </Link>
        </div>

        {/* hamburger menu for mobile device */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
