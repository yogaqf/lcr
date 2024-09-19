import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center py-16">
      <h1 className="text-5xl font-bold">Dashboard</h1>
      <p className="text-2xl">Welcome to the admin panel of Lembah Ciater Resort</p>
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 shadow rounded-xl">
          <h2 className="text-2xl font-bold">Booking</h2>
          <p className="text-xl">See all booking</p>
          <Link href="/booking">
            <p className="text-blue-500 hover:text-blue-700 underline">Learn more</p>
          </Link>
        </div>
        <div className="bg-white p-6 shadow rounded-xl">
          <h2 className="text-2xl font-bold">Facilities</h2>
          <p className="text-xl">See all facilities</p>
          <Link href="/facilities">
            <p className="text-blue-500 hover:text-blue-700 underline">Learn more</p>
          </Link>
        </div>
        <div className="bg-white p-6 shadow rounded-xl">
          <h2 className="text-2xl font-bold">Rooms</h2>
          <p className="text-xl">See all rooms</p>
          <Link href="/room">
            <p className="text-blue-500 hover:text-blue-700 underline">Learn more</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

