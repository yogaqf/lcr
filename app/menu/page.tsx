import React from 'react'
import Image from 'next/image'
import { appetizer, oriental, indonesian, local, sahid, snack, sweet, side, beverage } from "../menu.js"

const Menu = () => {
      return (
            <>
                  <div className='px-6 md:px-12 lg:px-60 pt-20 mb-40'>
                        <p className='text-3xl font-bold mb-10'>Appetizer</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {appetizer.map((menu, index) => (
                                    <div key={index}>
                                          <div className="bg-white rounded-lg shadow-lg p-4">
                                                <Image src={menu.image} alt={menu.name} width={400} height={300} className="w-full h-40 object-cover" />
                                                <h4 className="text-lg font-bold mt-2">{menu.name}</h4>
                                                <p>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(menu.price)}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>

                        {/* oriental */}
                        <p className='text-3xl font-bold mb-10 mt-36'>Oriental Choice</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {oriental.map((menu, index) => (
                                    <div key={index}>
                                          <div className="bg-white rounded-lg shadow-lg p-4">
                                                <Image src={menu.image} alt={menu.name} width={400} height={300} className="w-full h-40 object-cover" />
                                                <h4 className="text-lg font-bold mt-2">{menu.name}</h4>
                                                <p>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(menu.price)}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>


                        {/* indonesian */}
                        <p className='text-3xl font-bold mb-10 mt-36'>Indonesian Favorites</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {indonesian.map((menu, index) => (
                                    <div key={index}>
                                          <div className="bg-white rounded-lg shadow-lg p-4">
                                                <Image src={menu.image} alt={menu.name} width={400} height={300} className="w-full h-40 object-cover" />
                                                <h4 className="text-lg font-bold mt-2">{menu.name}</h4>
                                                <p>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(menu.price)}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>

                        {/* local */}
                        <p className='text-3xl font-bold mb-10 mt-36'>Local Signature Dish</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {local.map((menu, index) => (
                                    <div key={index}>
                                          <div className="bg-white rounded-lg shadow-lg p-4">
                                                <Image src={menu.image} alt={menu.name} width={400} height={300} className="w-full h-40 object-cover" />
                                                <h4 className="text-lg font-bold mt-2">{menu.name}</h4>
                                                <p>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(menu.price)}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>

                        {/* sahid */}
                        <p className='text-3xl font-bold mb-10 mt-36'>Sahid Signature</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {sahid.map((menu, index) => (
                                    <div key={index}>
                                          <div className="bg-white rounded-lg shadow-lg p-4">
                                                <Image src={menu.image} alt={menu.name} width={400} height={300} className="w-full h-40 object-cover" />
                                                <h4 className="text-lg font-bold mt-2">{menu.name}</h4>
                                                <p>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(menu.price)}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>

                        {/* snack */}
                        <p className='text-3xl font-bold mb-10 mt-36'>Snack Corner</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {snack.map((menu, index) => (
                                    <div key={index}>
                                          <div className="bg-white rounded-lg shadow-lg p-4">
                                                <Image src={menu.image} alt={menu.name} width={400} height={300} className="w-full h-40 object-cover" />
                                                <h4 className="text-lg font-bold mt-2">{menu.name}</h4>
                                                <p>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(menu.price)}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>


                        {/* sweet */}
                        <p className='text-3xl font-bold mb-10 mt-36'>Sweet Temptation</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {sweet.map((menu, index) => (
                                    <div key={index}>
                                          <div className="bg-white rounded-lg shadow-lg p-4">
                                                <Image src={menu.image} alt={menu.name} width={400} height={300} className="w-full h-40 object-cover" />
                                                <h4 className="text-lg font-bold mt-2">{menu.name}</h4>
                                                <p>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(menu.price)}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>



                        {/* side */}
                        <p className='text-3xl font-bold mb-10 mt-36'>Side Dish</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {side.map((menu, index) => (
                                    <div key={index}>
                                          <div className="bg-white rounded-lg shadow-lg p-4">
                                                <Image src={menu.image} alt={menu.name} width={400} height={300} className="w-full h-40 object-cover" />
                                                <h4 className="text-lg font-bold mt-2">{menu.name}</h4>
                                                <p>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(menu.price)}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>



                        {/* Beverages */}
                        <p className='text-3xl font-bold mb-10 mt-36'>Beverages</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {beverage.map((menu, index) => (
                                    <div key={index}>
                                          <div className="bg-white rounded-lg shadow-lg p-4">
                                                <Image src={menu.image} alt={menu.name} width={400} height={300} className="w-full h-40 object-cover" />
                                                <h4 className="text-lg font-bold mt-2">{menu.name}</h4>
                                                <p>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(menu.price)}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>





                  </div>
            </>

      )
}

export default Menu