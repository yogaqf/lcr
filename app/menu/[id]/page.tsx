"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { appetizer, oriental, indonesian, local, sahid, western, snack, sweet, side, beverage } from "../../menu.js";
import { Button } from '@/components/ui/button';

export default function MenuPage() {
      const params = useParams();
      const { id } = params;

      const allMenu = [...appetizer, ...oriental, ...indonesian, ...local, ...sahid, ...western, ...snack, ...sweet, ...side, ...beverage];
      const menu = allMenu.find((menu) => menu.id === Number(id));

      if (!menu) return <div>Menu not found</div>;

      return (
            <div className="px-6 sm:px-40 py-16 bg-white rounded-xl shadow-md">
                  <Link href={'/menu'}>
                        <Button className="px-10 hover:bg-yellow-400 hover:text-black">
                              Back
                        </Button>
                  </Link>
                  <div className="flex flex-col items-center py-12">
                        <Image src={menu.image} width={200} height={200} alt={menu.name} className="w-96 h-96 rounded-xl bg-cover" />
                        <h1 className="text-3xl font-bold mt-4">{menu.name}</h1>
                        <div className='flex flex-col items-center'>
                              <p className="text-2xl mb-5">
                                    Rp. {menu.price.toLocaleString()}</p>
                              <p className='flex text-3xl'>{Array.from({ length: 5 }, (_, i) => (
                                    <span key={i} className={i < menu.rating ? 'text-yellow-400' : 'text-gray-400'}>&#9733;</span>
                              ))}</p>
                              <p className='mt-4 text-justify italic'>{menu.description}</p></div>

                  </div>
            </div>

      );
}


