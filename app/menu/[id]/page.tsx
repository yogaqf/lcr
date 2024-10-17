"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { appetizer, oriental, indonesian, local, sahid, snack, sweet, side, beverage } from "../../menu.js";
import { Button } from '@/components/ui/button';

export default function MenuPage() {
      const params = useParams();
      const { id } = params;

      const allMenu = [...appetizer, ...oriental, ...indonesian, ...local, ...sahid, ...snack, ...sweet, ...side, ...beverage];
      const menu = allMenu.find((menu) => menu.id === Number(id));

      if (!menu) return <div>Menu not found</div>;

      return (
            <div className='px-6 sm:px-40 py-16'>
                  <Link href={'/menu'}><Button className='px-10 hover:bg-yellow-400 hover:text-black'>Back</Button></Link>
                  <div className="flex flex-col items-center py-12">
                        <Image src={menu.image} width={200} height={200} alt={menu.name} className="rounded-full" />
                        <h1 className="text-3xl font-bold mt-4">{menu.name}</h1>
                        <p className="text-xl">{menu.price}</p>
                        <p className='mt-4 indent-10 text-justify'>{menu.description}</p>
                  </div></div>

      );
}


