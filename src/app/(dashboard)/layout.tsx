
import Layout from '@/components/Layout/Dashboard';
import Navbar from '@/components/Layout/Dashboard/Navbar';
import Content from "@/components/Layout/Dashboard/Content";

import { menuItems } from "@/lib/fakeData";

export default ( {children} : {children: React.ReactNode} ) => (
  
  <Layout.Area className="h-screen flex">
      
      <Navbar.Area className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 h-screen overflow-y-auto" >
          <Navbar.BrandIcon/>
          <Navbar.Links menuItems={menuItems} />
      </Navbar.Area>   

      <Content.Area className=" w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll" >
          <Content.Header/>
          {children}
      </Content.Area>  

  </Layout.Area>

);

