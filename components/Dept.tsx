"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { poppins, bebasNeue } from "@/components/Font";

// style tailwind css
const h1 = `${poppins.className} uppercase text-3xl mb-2 text-slate-600`;
const wrapper = "mt-8 w-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 mb-10";
const card = "aspect-square w-full bg-gray-200 rounded-xl flex flex-col justify-end bg-cover shadow-2xl overflow-hidden relative group cursor-pointer";
const img = "absolute h-full w-full bg-cover transition-all duration-1000 ease-in-out group-hover:scale-110";
const span = `${bebasNeue.className} font-bold text-[20px] sm:text-[2.5vw] text-white leading-none select-none`;
const separator = "relative bg-green-500 border-t-2 border-green-400 w-[12%]";

interface DeptProps {
      title: string;
      data: {
            id: number;
            firstName: string;
            lastName: string;
            image: string;
      }[];
}

const Dept = ({ title, data }: DeptProps) => {
      const [isLoading, setIsLoading] = useState(true);

      return (
            <div>
                  <h1 className={h1}>{title}</h1>
                  <Separator className="bg-green-500" />
                  <div className={wrapper}>
                        {data.map((item) => (
                              <Link key={item.id} href={`/profile/${item.id}`}>
                                    <div className={card}>
                                          {isLoading && <span className={span}>Loading...</span>}
                                          <Image src={item.image} width={300} height={300} alt={item.firstName} className={img} onLoadingComplete={() => setIsLoading(false)} />
                                          <div className="w-full px-4">
                                                <Separator className={separator} style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }} />
                                          </div>
                                          <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                                                <span className={span}>{item.firstName}</span>
                                                <span className={span}>{item.lastName}</span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>
            </div>
      );
};

export default Dept;

