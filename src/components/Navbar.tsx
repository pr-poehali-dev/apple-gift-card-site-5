import { NavLink } from "react-router-dom";
import { AppleIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-apple-gray/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container-apple py-3">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-apple-default">
            <AppleIcon size={24} />
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "font-medium text-apple-blue" : "text-apple-default hover:text-apple-blue transition-colors"
              }
            >
              Главная
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                isActive ? "font-medium text-apple-blue" : "text-apple-default hover:text-apple-blue transition-colors"
              }
            >
              Подарочные карты
            </NavLink>
            <NavLink 
              to="/instructions" 
              className={({ isActive }) => 
                isActive ? "font-medium text-apple-blue" : "text-apple-default hover:text-apple-blue transition-colors"
              }
            >
              Инструкции
            </NavLink>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="text-apple-default">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;