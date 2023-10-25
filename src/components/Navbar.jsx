import { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", to: "/" },
    { id: 3, name: "Contacto", to: "/contacto" },
    // { id: 2, name: "About", to: "/about" },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap bg-stone-100 p-6">
      <div className="flex items-center flex-shrink-0 text-stone-500 mr-6">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">Arman</span>
          <span className="font-semibold text-xl tracking-tight text-yellow-600">
            Dev
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-stone-400 hover:text-yellow-600"
        >
          {isOpen ? (
            <CgClose className="w-6 h-6" />
          ) : (
            <CgMenu className="w-6 h-6" />
          )}
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          {navItems.map(({ id, name, to }) => (
            // Link
            <NavLink
              key={id}
              to={to}
              className="block mt-4 lg:inline-block lg:mt-0 text-stone-500 hover:text-stone-800 mr-4"
              // className={({ isActive, isPending }) =>
              //   isPending ? "pending" : isActive ? " text-red-500" : ""
              // }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
