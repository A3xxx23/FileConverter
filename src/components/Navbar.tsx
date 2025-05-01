import { NavLink } from "react-router-dom"

const navbarLinks = [
    {
        id: 1,
        title: 'File to PDF',
        href: '/FiletoPDF',
    },
    {
        id: 2,
        title: 'URL to PDF',
        href: '/URLtoPDF',
    },
    {
        id: 3,
        title: 'Image to PDF',
        href: '/ImagetoPDF',
    },
    {
        id: 4,
        title: 'HTML to PDF',
        href: '/HTMLtoPDF',
    },
]; 

export const Navbar = () => {
  return (
    <nav className='space-x-5 hidden md:flex items-center justify-center'>
        
        {navbarLinks.map((link) => (
          <NavLink 
            key={link.id} 
            to={link.href} 
            onClick={() => console.log(link.title)}
            className={({ isActive }) => 
              isActive 
                ? 'text-gray-300 hover:text-gray-600 transition mx-2' 
                : 'text-white hover:text-gray-500 transition mx-2'
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
      
  );
};