
import Layout from '@/components/Layout/Dashboard';
import Navbar from '@/components/Layout/Dashboard/Navbar';
import Content from "@/components/Layout/Dashboard/Content";

import { menuItems } from "@/lib/fakeData";

export default ( {children} : {children: React.ReactNode} ) => (
  
  <Layout.Area className="h-screen flex">
      
      <Navbar.Area className=" min-w-[70px] lg:min-w-[200px] p-4 h-screen overflow-y-auto" >
          <Navbar.BrandIcon/>
          <Navbar.Links menuItems={menuItems} />
      </Navbar.Area>   

      <Content.Area className="bg-[#F7F8FA] overflow-scroll" >
          <Content.Header/>
          {children}
      </Content.Area>  

  </Layout.Area>

);

