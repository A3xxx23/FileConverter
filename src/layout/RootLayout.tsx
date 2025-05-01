import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Home from "../components/Home";

export const RootLayout = () => {
    const {pathname} = useLocation();
  
    //const isSheetOpen = useGlobalStore(state => state.isSheetOpen);
    //const activeNavMobile = useGlobalStore(state => state.activeNavMobile);
  
    return (
      <div className='h-screen flex flex-col'>
        <Navbar/>

        {pathname === "/" && <Home/>}

        <main className='container mx-auto my-8 flex-1'>
        <Outlet />
        </main>

        <Footer/>
        
      </div>
    );
  };