import { Separator } from "@/components/ui/separator";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"], // Bebas Neue umumnya hanya memiliki satu bobot yaitu 400
  variable: "--font-bebas-neue",
});

const Home = () => {
  return (
    <div className="p-16">
      <h1 className="font-bold text-2xl mb-2 text-slate-700">RESORT MANAGER</h1>
      <Separator className=" bg-green-400 " />
      <div className="mt-10 w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 mb-10">
        {/* wrapper */}
        <div className="aspect-square w-full bg-gray-200 rounded-xl flex flex-col justify-end bg-cover shadow-2xl overflow-hidden relative">
          {/* img */}
          <div className="absolute h-full w-full bg-cover transition-all duration-1000 ease-in-out hover:scale-110" style={{ backgroundImage: "url(/images/ARJ.jpg)" }}></div>
          {/* separator */}
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-t-2 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          {/* text */}
          <div className="z-40 flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[8vw] sm:text-[2.5vw] text-white leading-none`}
            >
              TOMI
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[8vw] sm:text-[2.5vw] text-white leading-none`}
            >
              HARYANTO
            </span>
          </div>
          {/* end text */}
        </div>
        {/* end wrapper */}

      </div>
      <h1 className="font-bold text-2xl mb-2 text-slate-700">ACCOUNTING</h1>
      <Separator className=" bg-green-400 " />
      <div className="mt-10 w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 mb-10">
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex flex-col justify-end">
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          <div className="flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              MEGAWATI
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            ></span>
          </div>
        </div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex flex-col justify-end">
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          <div className="flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              DEDE
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              HERYANTO
            </span>
          </div>
        </div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex flex-col justify-end">
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          <div className="flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              YOGA
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              QODAR FALAH
            </span>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-2xl mb-2 text-slate-700">HOUSEKEEPING</h1>
      <Separator className=" bg-green-400 " />
      <div className="mt-10 w-full grid grid-cols-4 gap-8 mb-10">
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex flex-col justify-end">
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          <div className="flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              ACENG
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              YANA
            </span>
          </div>
        </div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex flex-col justify-end">
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          <div className="flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              ALMA
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              FIRDAUS
            </span>
          </div>
        </div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex flex-col justify-end">
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          <div className="flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              IWAN
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              WANDI
            </span>
          </div>
        </div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex flex-col justify-end">
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          <div className="flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              NURNYADIN
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            ></span>
          </div>
        </div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex flex-col justify-end">
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          <div className="flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              NANDANG JR
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            ></span>
          </div>
        </div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex flex-col justify-end">
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          <div className="flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              YUSUF
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              SUPRIADI
            </span>
          </div>
        </div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex flex-col justify-end">
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          <div className="flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              RIKI
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              ROHENDI
            </span>
          </div>
        </div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex flex-col justify-end">
          <div className="w-full px-4">
            <Separator
              className="relative bg-green-400 border-green-400 w-[12%]"
              style={{ borderTop: "0.29vw solid rgb(0, 255, 0)" }}
            />
          </div>
          <div className="flex flex-col pt-3 pb-4 px-4">
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              DAMAR
            </span>
            <span
              className={`${bebasNeue.className} font-bold text-[2.5vw] text-gray-700 leading-none`}
            >
              GALIH
            </span>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-2xl mb-2 text-slate-700">FRONT OFFICE</h1>
      <Separator className=" bg-green-400 " />
      <div className="mt-10 w-full flex space-x-8 mb-10">
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
      </div>
      <h1 className="font-bold text-2xl mb-2 text-slate-700">FB PRODUCT</h1>
      <Separator className=" bg-green-400 " />
      <div className="mt-10 w-full flex space-x-8 mb-10">
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
      </div>
      <h1 className="font-bold text-2xl mb-2 text-slate-700">FB SERVICE</h1>
      <Separator className=" bg-green-400 " />
      <div className="mt-10 w-full flex space-x-8 mb-10">
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
      </div>
      <h1 className="font-bold text-2xl mb-2 text-slate-700">ENGINEERING</h1>
      <Separator className=" bg-green-400 " />
      <div className="mt-10 w-full flex space-x-8 mb-10">
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
      </div>
      <h1 className="font-bold text-2xl mb-2 text-slate-700">SECURITY</h1>
      <Separator className=" bg-green-400 " />
      <div className="mt-10 w-full flex space-x-8 mb-10">
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
      </div>
      <h1 className="font-bold text-2xl mb-2 text-slate-700">HOUSEKEEPING</h1>
      <Separator className=" bg-green-400 " />
      <div className="mt-10 w-full flex space-x-8 mb-10">
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Home;
