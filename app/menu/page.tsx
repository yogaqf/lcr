import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator';
import { Bebas_Neue, Poppins } from "next/font/google";
// import { Button } from '@/components/ui/button';
import { appetizer, oriental, indonesian, local, sahid, western, snack, sweet, side, beverage } from "../menu.js"
//

const bebasNeue = Bebas_Neue({
      subsets: ["latin"],
      weight: ["400"],
      variable: "--font-bebas-neue",
});

const poppins = Poppins({
      subsets: ["latin"],
      weight: ["600"],
      variable: "--font-poppins",
})



const h1 = `${poppins.className} uppercase text-3xl mb-2 text-slate-600 mt-24`
const container = "sm:px-20 lg:px-30 xl:px-40 2xl:px-96 px-6 py-20"
const wrapper = "mt-8 w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-8  mb-10"
const card = "aspect-square w-full bg-gray-200 rounded-xl flex flex-col justify-end bg-cover shadow-2xl overflow-hidden relative group cursor-pointer"
const img = "absolute h-full w-full bg-cover transition-all duration-1000 ease-in-out group-hover:scale-110 "
const span = `${bebasNeue.className} font-bold text-[35px] lg:text-[1.5vw] text-green-800 leading-none select-none`
//const separator = "relative bg-green-500 border-t-2 border-green-400 w-[12%]"
const price = `${poppins.className} font-bold text-[30px] lg:text-[1vw] text-slate-800 leading-none select-none`


const Menu = () => {
      const formatCurrency = (price: number) => {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price).replace(/\,00$/, ',-')
      }
      return (
            <div className={container}>
                  <h1 className={h1}>Appetizer</h1>
                  <Separator className=" bg-green-500 " />
                  <div className={wrapper}>
                        {appetizer.map((item, index) => (
                              <Link key={index} href={`/menu/${item.id}`}>
                                    <div className={card}>
                                          <Image src={item.image} width={300} height={300} alt={item.name} className={img} />
                                          <div className="z-40 flex flex-col pt-3 pb-4 px-4 bg-green-100">
                                                <span className={span}>{item.name}</span>
                                                <span className={price}>{formatCurrency(item.price)}</span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>
                  <h1 className={h1}>Oriental</h1>
                  <Separator className=" bg-green-500 " />
                  <div className={wrapper}>
                        {oriental.map((item, index) => (
                              <Link key={index} href={`/menu/${item.id}`}>
                                    <div className={card}>
                                          <Image src={item.image} width={300} height={300} alt={item.name} className={img} />
                                          <div className="z-40 flex flex-col pt-3 pb-4 px-4 bg-green-100">
                                                <span className={span}>{item.name}</span>
                                                <span className={price}>{formatCurrency(item.price)}</span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>

                  <h1 className={h1}>Indonesian Favorites</h1>
                  <Separator className=" bg-green-500 " />
                  <div className={wrapper}>
                        {indonesian.map((item, index) => (
                              <Link key={index} href={`/menu/${item.id}`}>
                                    <div className={card}>
                                          <Image src={item.image} width={300} height={300} alt={item.name} className={img} />
                                          <div className="z-40 flex flex-col pt-3 pb-4 px-4 bg-green-100">
                                                <span className={span}>{item.name}</span>
                                                <span className={price}>{formatCurrency(item.price)}</span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>

                  <h1 className={h1}>Local Signature Dish</h1>
                  <Separator className=" bg-green-500 " />
                  <div className={wrapper}>
                        {local.map((item, index) => (
                              <Link key={index} href={`/menu/${item.id}`}>
                                    <div className={card}>
                                          <Image src={item.image} width={300} height={300} alt={item.name} className={img} />
                                          <div className="z-40 flex flex-col pt-3 pb-4 px-4 bg-green-100">
                                                <span className={span}>{item.name}</span>
                                                <span className={price}>{formatCurrency(item.price)}</span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>

                  <h1 className={h1}>Sahid Signature</h1>
                  <Separator className=" bg-green-500 " />
                  <div className={wrapper}>
                        {sahid.map((item, index) => (
                              <Link key={index} href={`/menu/${item.id}`}>
                                    <div className={card}>
                                          <Image src={item.image} width={300} height={300} alt={item.name} className={img} />
                                          <div className="z-40 flex flex-col pt-3 pb-4 px-4 bg-green-100">
                                                <span className={span}>{item.name}</span>
                                                <span className={price}>{formatCurrency(item.price)}</span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>

                  <h1 className={h1}>Western</h1>
                  <Separator className=" bg-green-500 " />
                  <div className={wrapper}>
                        {western.map((item, index) => (
                              <Link key={index} href={`/menu/${item.id}`}>
                                    <div className={card}>
                                          <Image src={item.image} width={300} height={300} alt={item.name} className={img} />
                                          <div className="z-40 flex flex-col pt-3 pb-4 px-4 bg-green-100">
                                                <span className={span}>{item.name}</span>
                                                <span className={price}>{formatCurrency(item.price)}</span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>

                  <h1 className={h1}>Snack Corner</h1>
                  <Separator className=" bg-green-500 " />
                  <div className={wrapper}>
                        {snack.map((item, index) => (
                              <Link key={index} href={`/menu/${item.id}`}>
                                    <div className={card}>
                                          <Image src={item.image} width={300} height={300} alt={item.name} className={img} />
                                          <div className="z-40 flex flex-col pt-3 pb-4 px-4 bg-green-100">
                                                <span className={span}>{item.name}</span>
                                                <span className={price}>{formatCurrency(item.price)}</span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>

                  <h1 className={h1}>Sweet Temptation</h1>
                  <Separator className=" bg-green-500 " />
                  <div className={wrapper}>
                        {sweet.map((item, index) => (
                              <Link key={index} href={`/menu/${item.id}`}>
                                    <div className={card}>
                                          <Image src={item.image} width={300} height={300} alt={item.name} className={img} />
                                          <div className="z-40 flex flex-col pt-3 pb-4 px-4 bg-green-100">
                                                <span className={span}>{item.name}</span>
                                                <span className={price}>{formatCurrency(item.price)}</span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>

                  <h1 className={h1}>Side Dish</h1>
                  <Separator className=" bg-green-500 " />
                  <div className={wrapper}>
                        {side.map((item, index) => (
                              <Link key={index} href={`/menu/${item.id}`}>
                                    <div className={card}>
                                          <Image src={item.image} width={300} height={300} alt={item.name} className={img} />
                                          <div className="z-40 flex flex-col pt-3 pb-4 px-4 bg-green-100">
                                                <span className={span}>{item.name}</span>
                                                <span className={price}>{formatCurrency(item.price)}</span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>

                  <h1 className={h1}>Beverages</h1>
                  <Separator className=" bg-green-500 " />
                  <div className={wrapper}>
                        {beverage.map((item, index) => (
                              <Link key={index} href={`/menu/${item.id}`}>
                                    <div className={card}>
                                          <Image src={item.image} width={300} height={300} alt={item.name} className={img} />
                                          <div className="z-40 flex flex-col pt-3 pb-4 px-4 bg-green-100">
                                                <span className={span}>{item.name}</span>
                                                <span className={price}>{formatCurrency(item.price)}</span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>

            </div>

      )
}
export default Menu
