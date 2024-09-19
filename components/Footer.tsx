import React from 'react'
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";



const Footer = () => {
      return (
            <footer className="bg-gray-100 text-center lg:text-left">
                  <div className="container mx-auto px-4 py-20">
                        <div className="flex flex-col lg:flex-row items-center">
                              <p className="mb-4 lg:mb-0">
                                    &copy; {new Date().getFullYear()} Lembah Ciater Resort. All rights reserved.
                              </p>
                              <div className="flex items-center justify-center lg:justify-end">
                                    <a
                                          href="https://www.instagram.com/lembahciaterresort/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="mx-2"
                                    >
                                          <Instagram className="h-6 w-6" />
                                    </a>
                                    <a
                                          href="https://www.facebook.com/lembahciaterresort/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="mx-2"
                                    >
                                          <Facebook className="h-6 w-6" />
                                    </a>
                                    <a
                                          href="https://twitter.com/lembahciater"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="mx-2"
                                    >
                                          <Twitter className="h-6 w-6" />
                                    </a>
                              </div>
                        </div>
                  </div>
            </footer>
      )
}

export default Footer


