import {Layout, Navbar, Content } from '@/components/Layout/Dashboard';
import { menuItems } from "@/lib/fakeData";

export default ( {children} : {children: React.ReactNode} ) => (
  
  <Layout.Area className="h-screen flex">
      
      <Navbar.Area className=" min-w-[70px] lg:min-w-[200px] p-4 h-screen overflow-y-auto" >
          <Navbar.BrandIcon/>
          <Navbar.Links menuItems={menuItems} />
      </Navbar.Area>   

      <Content.Area className="w-full bg-[#F7F8FA] overflow-scroll flex flex-col" >
          <Content.Header/>
          {children}
      </Content.Area>  

  </Layout.Area>

);

