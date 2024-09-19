"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
      { name: "Room", href: "/room" },
      { name: "Facilities", href: "/facilities" },
      { name: "Team", href: "/team" },
      { name: "About Us", href: "/about" },
];

export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false);

      return (
            <nav className="bg-green-400 border-b">
                  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="flex items-center justify-between h-16">
                              <div className="flex items-center">
                                    <Link href="/" className="text-2xl font-bold text-primary">
                                          LCR
                                    </Link>
                              </div>
                              <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                          {navItems.map((item) => (
                                                <Link
                                                      key={item.name}
                                                      href={item.href}
                                                      className="text-gray-600 hover:text-primary px-1 py-2 rounded-md text-md font-medium"
                                                >
                                                      {item.name}
                                                </Link>
                                          ))}
                                          <Link href={"/booking"}><Button className="hover:text-primary hover:bg-yellow-400">Booking Now</Button></Link>
                                    </div>
                              </div>
                              <div className="md:hidden">
                                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                          <SheetTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                      <Menu className="h-6 w-6" />
                                                      <span className="sr-only">Toggle menu</span>
                                                </Button>
                                          </SheetTrigger>
                                          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                                                <div className="flex flex-col space-y-4 mt-4 mb-4">
                                                      {navItems.map((item) => (
                                                            <Link
                                                                  key={item.name}
                                                                  href={item.href}
                                                                  className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                                                                  onClick={() => setIsOpen(false)}
                                                            >
                                                                  {item.name}
                                                            </Link>
                                                      ))}
                                                </div>
                                                <Link href={"/booking"}><Button className="hover:text-primary hover:bg-yellow-400">Booking Now</Button></Link>
                                          </SheetContent>
                                    </Sheet>
                              </div>
                        </div>
                  </div>
            </nav>
      );
}
