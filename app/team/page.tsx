"use client"
import Dept from '@/components/Dept';
import { resortManager, general, accounting, frontOffice, salesMarketing, fbService, fbProduct, housekeeping, engineering, hrSecurity } from "../data.js"

const Home = () => {
      return (
            <div className="sm:px-20 lg:px-30 xl:px-40 2xl:px-64 px-6 py-20">
                  <Dept title="Resort Manager" data={resortManager} />
                  <Dept title="General Admin" data={general} />
                  <Dept title="Accounting" data={accounting} />
                  <Dept title="Front Office" data={frontOffice} />
                  <Dept title="Sales & Marketing" data={salesMarketing} />
                  <Dept title="FB Service" data={fbService} />
                  <Dept title="FB Product" data={fbProduct} />
                  <Dept title="Housekeeping" data={housekeeping} />
                  <Dept title="Engineering" data={engineering} />
                  <Dept title="HR Security" data={hrSecurity} />
            </div>
      );
};

export default Home;