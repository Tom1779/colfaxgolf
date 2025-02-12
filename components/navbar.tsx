"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Home, LandPlot, Calendar, Phone, Menu, Images } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = ({ isMobile = false }) => (
    <>
      <Link href="/" passHref>
        <Button
          variant="ghost"
          className={`text-white hover:bg-green-400 ${
            isMobile ? "w-full justify-start my-2" : ""
          }`}
          onClick={() => isMobile && setIsOpen(false)}
        >
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
      </Link>

      <Link href="/about" passHref>
        <Button
          variant="ghost"
          className={`text-white hover:bg-green-400 ${
            isMobile ? "w-full justify-start my-2" : ""
          }`}
          onClick={() => isMobile && setIsOpen(false)}
        >
          <LandPlot className="mr-2 h-4 w-4" />
          Courses
        </Button>
      </Link>

      <Button
        variant="ghost"
        className={`text-white hover:bg-green-400 ${
          isMobile ? "w-full justify-start my-2" : ""
        }`}
        onClick={() => isMobile && setIsOpen(false)}
      >
        <Calendar className="mr-2 h-4 w-4" />
        Tee Times
      </Button>

      <Button
        variant="ghost"
        className={`text-white hover:bg-green-400 ${
          isMobile ? "w-full justify-start my-2" : ""
        }`}
        onClick={() => isMobile && setIsOpen(false)}
      >
        <Images className="mr-2 h-4 w-4" />
        Gallery
      </Button>

      <Button
        variant="ghost"
        className={`text-white hover:bg-green-400 ${
          isMobile ? "w-full justify-start my-2" : ""
        }`}
        onClick={() => isMobile && setIsOpen(false)}
      >
        <Phone className="mr-2 h-4 w-4" />
        Contact
      </Button>
    </>
  );

  return (
    <div className="w-full" style={{ backgroundColor: "#00db6e" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src={"/logo/logo.jpg"}
                alt={"alt"}
                width={64}
                height={64}
              ></Image>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavItems />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white-400 px-0 py-0"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-64 border-none"
                style={{ backgroundColor: "#00db6e" }}
              >
                <SheetTitle className="text-white px-0 py-0">Menu</SheetTitle>
                <div className="flex flex-col mt-6">
                  <NavItems isMobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
