import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24">
      <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">Dashboard</h1>
      <p className="text-2xl md:text-3xl lg:text-4xl">Welcome to the admin panel of Lembah Ciater Resort</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-12 lg:mt-16">
        <div className="bg-white p-6 md:p-8 lg:p-10 shadow rounded-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Booking</h2>
          <p className="text-xl md:text-2xl lg:text-3xl">See all booking</p>
          <Link href="/booking">
            <p className="text-blue-500 hover:text-blue-700 underline">Learn more</p>
          </Link>
        </div>
        <div className="bg-white p-6 md:p-8 lg:p-10 shadow rounded-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Facilities</h2>
          <p className="text-xl md:text-2xl lg:text-3xl">See all facilities</p>
          <Link href="/facilities">
            <p className="text-blue-500 hover:text-blue-700 underline">Learn more</p>
          </Link>
        </div>
        <div className="bg-white p-6 md:p-8 lg:p-10 shadow rounded-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Rooms</h2>
          <p className="text-xl md:text-2xl lg:text-3xl">See all rooms</p>
          <Link href="/room">
            <p className="text-blue-500 hover:text-blue-700 underline">Learn more</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

