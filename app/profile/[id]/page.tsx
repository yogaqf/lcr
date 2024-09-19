"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { resortManager, accounting, frontOffice, salesMarketing, fbService, fbProduct, housekeeping, engineering, hrSecurity } from "../../data.js";
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
      const params = useParams();
      const { id } = params;

      const allUsers = [...resortManager, ...accounting, ...frontOffice, ...salesMarketing, ...fbService, ...fbProduct, ...housekeeping, ...engineering, ...hrSecurity];
      const user = allUsers.find((user) => user.id === Number(id));

      if (!user) return <div>User not found</div>;

      return (
            <div className='px-6 sm:px-40 py-16'>
                  <Link href={'/team'}><Button className='px-10 hover:bg-yellow-400 hover:text-black'>Back</Button></Link>
                  <div className="flex flex-col items-center py-12">
                        <Image src={user.image} width={200} height={200} alt={user.firstName} className="rounded-full" />
                        <h1 className="text-3xl font-bold mt-4">{user.firstName} {user.lastName}</h1>
                        <p className="text-xl">{user.position}</p>
                        <p className='mt-4 indent-10 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam earum voluptatem repellat dolorum praesentium, mollitia ipsum dicta. Perferendis magnam eum nam culpa vitae alias accusamus aperiam pariatur. Velit, quibusdam.
                              Modi corporis dolorem ut. Totam nostrum repellat ut itaque officia? Expedita tenetur ad minus, suscipit iste porro ipsam cumque reiciendis iure excepturi molestiae consectetur incidunt doloremque rem dolore eius error.
                              Placeat quibusdam nulla facere consectetur sequi nam aliquam molestias nesciunt, neque iusto in quam fuga eius doloremque. Velit voluptate itaque recusandae adipisci cupiditate? Consequuntur, eum accusantium delectus repellat unde fuga!
                              Nostrum cum obcaecati quasi id consequatur dolores corrupti earum nulla amet error, ab quis atque quam mollitia similique cupiditate ipsa hic laborum! Dolorum at rem veniam modi. Ipsum, numquam cum.
                              Aut beatae quae blanditiis vel laboriosam. Aliquid saepe reiciendis enim pariatur, adipisci corrupti quia suscipit odio ex magnam accusantium, tenetur porro officiis quidem perferendis quos reprehenderit, at distinctio nihil possimus!
                              Cum totam reiciendis, dolor repellat accusamus harum quidem aliquid? Rerum perferendis, temporibus id, necessitatibus, tempore non autem debitis nihil quam repudiandae nostrum voluptatum iusto laudantium? Suscipit quas at sit vero.
                              Perferendis nostrum repellat voluptates. Recusandae repellat a reprehenderit optio inventore nisi provident consequatur impedit quidem error nostrum rem temporibus adipisci, molestias, beatae distinctio eligendi accusamus libero ipsum fugit. Nesciunt, quidem!
                              Deserunt molestias assumenda repudiandae ducimus, id iure ea quidem consequatur quae dolore exercitationem, unde impedit quisquam, iste quibusdam. Atque adipisci facere libero modi obcaecati nostrum aliquam numquam, eveniet voluptatem mollitia.
                              In sapiente quisquam incidunt praesentium dolor illum ipsa magni iure saepe eaque. Rem perspiciatis fugit beatae illo modi. Iste nobis accusamus mollitia aliquam quis. Temporibus, itaque. Error atque quasi quam?
                              Voluptatibus et recusandae nam mollitia eligendi beatae dolore quis consectetur, soluta alias natus consequatur impedit! Distinctio, et placeat, expedita, aliquid obcaecati nobis vero harum rem omnis aut minima facere. Eligendi.</p>
                        <p className='mt-4 indent-10 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam earum voluptatem repellat dolorum praesentium, mollitia ipsum dicta. Perferendis magnam eum nam culpa vitae alias accusamus aperiam pariatur. Velit, quibusdam.
                              Modi corporis dolorem ut. Totam nostrum repellat ut itaque officia? Expedita tenetur ad minus, suscipit iste porro ipsam cumque reiciendis iure excepturi molestiae consectetur incidunt doloremque rem dolore eius error.
                              Placeat quibusdam nulla facere consectetur sequi nam aliquam molestias nesciunt, neque iusto in quam fuga eius doloremque. Velit voluptate itaque recusandae adipisci cupiditate? Consequuntur, eum accusantium delectus repellat unde fuga!
                              Nostrum cum obcaecati quasi id consequatur dolores corrupti earum nulla amet error, ab quis atque quam mollitia similique cupiditate ipsa hic laborum! Dolorum at rem veniam modi. Ipsum, numquam cum.
                              Aut beatae quae blanditiis vel laboriosam. Aliquid saepe reiciendis enim pariatur, adipisci corrupti quia suscipit odio ex magnam accusantium, tenetur porro officiis quidem perferendis quos reprehenderit, at distinctio nihil possimus!
                              Cum totam reiciendis, dolor repellat accusamus harum quidem aliquid? Rerum perferendis, temporibus id, necessitatibus, tempore non autem debitis nihil quam repudiandae nostrum voluptatum iusto laudantium? Suscipit quas at sit vero.
                              Perferendis nostrum repellat voluptates. Recusandae repellat a reprehenderit optio inventore nisi provident consequatur impedit quidem error nostrum rem temporibus adipisci, molestias, beatae distinctio eligendi accusamus libero ipsum fugit. Nesciunt, quidem!
                              Deserunt molestias assumenda repudiandae ducimus, id iure ea quidem consequatur quae dolore exercitationem, unde impedit quisquam, iste quibusdam. Atque adipisci facere libero modi obcaecati nostrum aliquam numquam, eveniet voluptatem mollitia.
                              In sapiente quisquam incidunt praesentium dolor illum ipsa magni iure saepe eaque. Rem perspiciatis fugit beatae illo modi. Iste nobis accusamus mollitia aliquam quis. Temporibus, itaque. Error atque quasi quam?
                              Voluptatibus et recusandae nam mollitia eligendi beatae dolore quis consectetur, soluta alias natus consequatur impedit! Distinctio, et placeat, expedita, aliquid obcaecati nobis vero harum rem omnis aut minima facere. Eligendi.</p>

                  </div></div>

      );
}

