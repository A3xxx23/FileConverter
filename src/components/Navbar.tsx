import { NavLink, Link } from "react-router-dom";

const navbarLinks = [
  {
    id: 1,
    title: 'File to PDF',
    href: '/file-to-pdf',
  },
  {
    id: 2,
    title: 'URL to PDF',
    href: '/url-to-pdf',
  },
  {
    id: 3,
    title: 'Image to PDF',
    href: '/image-to-pdf',
  },
  {
    id: 4,
    title: 'HTML to PDF',
    href: '/html-to-pdf',
  },
];

export const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between">
      <div className="flex-shrink-0">
        <Link to="/">
          <img
            src="/convertImage.png"
            alt="FileConverter logo"
            className="h-12"
          />
        </Link>
      </div>

      <nav className="flex-1 flex justify-center space-x-6">
        {navbarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive }) =>
              isActive
                ? 'text-gray-500 font-semibold transition'
                : 'text-white hover:text-gray-300 transition'
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
      {/* Botón de inicio de sesión alineado a la derecha */}

      <div className="w-12" /> 
    </header>
  );
};
