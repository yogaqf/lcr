
"use client"
import Image from 'next/image'
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from "@/components/ui/separator";
import { Bebas_Neue, Manrope } from "next/font/google";
import { resortManager, accounting, frontOffice, salesMarketing, fbService, fbProduct, housekeeping, engineering, hrSecurity } from "./data.js"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-manrope",
})

// style tailwind css
const h1 = `${manrope.className} font-bold text-3xl mb-2 text-slate-600`
const container = "sm:px-20 lg:px-30 xl:px-40 2xl:px-64 px-6 py-20"
const wrapper = "mt-8 w-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8  mb-10"
const card = "aspect-square w-full bg-gray-200 rounded-xl flex flex-col justify-end bg-cover shadow-2xl overflow-hidden relative"
const img = "absolute h-full w-full bg-cover transition-all duration-1000 ease-in-out hover:scale-110"
const span = `${bebasNeue.className} font-bold text-[20px] sm:text-[2.5vw] text-white leading-none`
const separator = "relative bg-green-500 border-t-2 border-green-400 w-[12%]"



const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={container}>
      {/* Resort Manager */}
      <h1 className={h1}>Resort Manager</h1>
      <Separator className=" bg-green-500 " />
      <div className={wrapper}>
        <div className={card}>
          {isLoading && <span className={span}>Loading...</span>}
          <Image src={resortManager[0].image} width={300} height={300} alt={resortManager[0].firstName} className={img} onLoadingComplete={() => setIsLoading(false)} />
          <div className="w-full px-4">
            <Separator className={separator} style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }} />
          </div>
          <div className="z-40 flex flex-col pt-3 pb-4 px-4">
            <span className={span}>{resortManager[0].firstName}</span>
            <span className={span}>{resortManager[0].lastName}</span>
          </div>
        </div>
      </div>

      {/* Accounting */}
      <h1 className={h1}>Accounting</h1>
      <Separator className=" bg-green-500 " />
      <div className={wrapper}>
        {accounting.map((item, index) => (
          <div key={index} className={card}>
            {isLoading && (
              <>
                <Skeleton className={img} />
                <div className="w-full px-4">
                  <Skeleton className="relative bg-slate-200 border-t-2 border-slate-200 w-[12%]" style={{ height: "0.29vw" }} />
                  <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                  </div>
                </div>
              </>
            )}
            {!isLoading && (
              <>
                <Image src={item.image} width={300} height={300} alt={item.firstName} className={img} />
                <div className="w-full px-4">
                  <Separator className={separator} style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }} />
                </div>
                <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                  <span className={span}>{item.firstName}</span>
                  <span className={span}>{item.lastName}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Front Office */}
      <h1 className={h1}>Front Office</h1>
      <Separator className=" bg-green-500 " />
      <div className={wrapper}>
        {frontOffice.map((item, index) => (
          <div key={index} className={card}>
            {isLoading && (
              <>
                <Skeleton className={img} />
                <div className="w-full px-4">
                  <Skeleton className="relative bg-slate-200 border-t-2 border-slate-200 w-[12%]" style={{ height: "0.29vw" }} />
                  <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                  </div>
                </div>
              </>
            )}
            {!isLoading && (
              <>
                <Image src={item.image} width={300} height={300} alt={item.firstName} className={img} />
                <div className="w-full px-4">
                  <Separator className={separator} style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }} />
                </div>
                <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                  <span className={span}>{item.firstName}</span>
                  <span className={span}>{item.lastName}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Sales Marketing */}
      <h1 className={h1}>Sales Marketing</h1>
      <Separator className=" bg-green-500 " />
      <div className={wrapper}>
        {salesMarketing.map((item, index) => (
          <div key={index} className={card}>
            {isLoading && (
              <>
                <Skeleton className={img} />
                <div className="w-full px-4">
                  <Skeleton className="relative bg-slate-200 border-t-2 border-slate-200 w-[12%]" style={{ height: "0.29vw" }} />
                  <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                  </div>
                </div>
              </>
            )}
            {!isLoading && (
              <>
                <Image src={item.image} width={300} height={300} alt={item.firstName} className={img} />
                <div className="w-full px-4">
                  <Separator className={separator} style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }} />
                </div>
                <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                  <span className={span}>{item.firstName}</span>
                  <span className={span}>{item.lastName}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* FB Service */}
      <h1 className={h1}>FB Service</h1>
      <Separator className=" bg-green-500 " />
      <div className={wrapper}>
        {fbService.map((item, index) => (
          <div key={index} className={card}>
            {isLoading && (
              <>
                <Skeleton className={img} />
                <div className="w-full px-4">
                  <Skeleton className="relative bg-slate-200 border-t-2 border-slate-200 w-[12%]" style={{ height: "0.29vw" }} />
                  <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                  </div>
                </div>
              </>
            )}
            {!isLoading && (
              <>
                <Image src={item.image} width={300} height={300} alt={item.firstName} className={img} />
                <div className="w-full px-4">
                  <Separator className={separator} style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }} />
                </div>
                <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                  <span className={span}>{item.firstName}</span>
                  <span className={span}>{item.lastName}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>


      {/* FB Product */}
      <h1 className="font-bold text-2xl mb-2 text-slate-700">FB Product</h1>
      <Separator className=" bg-green-500 " />
      <div className={wrapper}>
        {fbProduct.map((item, index) => (
          <div key={index} className={card}>
            {isLoading && (
              <>
                <Skeleton className={img} />
                <div className="w-full px-4">
                  <Skeleton className="relative bg-slate-200 border-t-2 border-slate-200 w-[12%]" style={{ height: "0.29vw" }} />
                  <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                  </div>
                </div>
              </>
            )}
            {!isLoading && (
              <>
                <Image src={item.image} width={300} height={300} alt={item.firstName} className={img} />
                <div className="w-full px-4">
                  <Separator className={separator} style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }} />
                </div>
                <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                  <span className={span}>{item.firstName}</span>
                  <span className={span}>{item.lastName}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Housekeeping */}
      <h1 className={h1}>Housekeeping</h1>
      <Separator className=" bg-green-500 " />
      <div className={wrapper}>
        {housekeeping.map((item, index) => (
          <div key={index} className={card}>
            {isLoading && (
              <>
                <Skeleton className={img} />
                <div className="w-full px-4">
                  <Skeleton className="relative bg-slate-200 border-t-2 border-slate-200 w-[12%]" style={{ height: "0.29vw" }} />
                  <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                  </div>
                </div>
              </>
            )}
            {!isLoading && (
              <>
                <Image src={item.image} width={300} height={300} alt={item.firstName} className={img} />
                <div className="w-full px-4">
                  <Separator className={separator} style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }} />
                </div>
                <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                  <span className={span}>{item.firstName}</span>
                  <span className={span}>{item.lastName}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* HR Security */}
      <h1 className={h1}>HR Security</h1>
      <Separator className=" bg-green-500 " />
      <div className={wrapper}>
        {hrSecurity.map((item, index) => (
          <div key={index} className={card}>
            {isLoading && (
              <>
                <Skeleton className={img} />
                <div className="w-full px-4">
                  <Skeleton className="relative bg-slate-200 border-t-2 border-slate-200 w-[12%]" style={{ height: "0.29vw" }} />
                  <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                    <Skeleton className="h-6 my-2 w-full rounded-md bg-slate-200" />
                  </div>
                </div>
              </>
            )}
            {!isLoading && (
              <>
                <Image src={item.image} width={300} height={300} alt={item.firstName} className={img} />
                <div className="w-full px-4">
                  <Separator className={separator} style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }} />
                </div>
                <div className="z-40 flex flex-col pt-3 pb-4 px-4">
                  <span className={span}>{item.firstName}</span>
                  <span className={span}>{item.lastName}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>


      {/* end */}
    </div>
  );
};

export default Home;
