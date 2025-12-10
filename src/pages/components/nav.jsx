// import { useState } from "react";
// import { Search, Heart, ShoppingCart, Phone, ChevronDown, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function EcobazarNavbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full shadow-sm bg-white">
//       {/* Top Bar */}
//       <div className="w-full text-sm border-b py-2 px-4 flex justify-between items-center text-gray-600">
//         <div className="flex items-center gap-2">
//           <MapPin size={14} />
//           <span>Store Location: Lincoln - 344, Illinois, Chicago, USA</span>
//         </div>
//         <div className="flex items-center gap-6">
//           <span className="flex items-center gap-1 cursor-pointer">Eng <ChevronDown size={14} /></span>
//           <span className="flex items-center gap-1 cursor-pointer">USD <ChevronDown size={14} /></span>
//           <span className="cursor-pointer">Sign In / Sign Up</span>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="w-full flex items-center justify-between py-4 px-4">
//         {/* Logo */}
//         <h1 className="text-3xl font-bold text-green-600">Ecobazar</h1>

//         {/* Search Bar */}
//         <div className="hidden md:flex items-center w-1/2 border rounded-md overflow-hidden">
//           <div className="flex items-center px-3 text-gray-500"><Search size={18} /></div>
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full py-2 px-2 outline-none text-sm"
//           />
//           <button className="bg-green-600 text-white px-6 py-2 text-sm">Search</button>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center gap-6">
//           <Heart className="cursor-pointer" />

//           <div className="flex items-center gap-2 cursor-pointer">
//             <ShoppingCart />
//             <div className="text-sm">
//               <p className="text-gray-500">Shopping cart:</p>
//               <p className="font-semibold">$57.00</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Menu Bar */}
//       <nav className="w-full bg-gray-900 text-white text-sm">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//           <ul className="flex items-center gap-6">
//             <li className="cursor-pointer hover:text-green-500 flex items-center gap-1">Home <ChevronDown size={14} /></li>
//             <li className="cursor-pointer hover:text-green-500 flex items-center gap-1">Shop <ChevronDown size={14} /></li>
//             <li className="cursor-pointer hover:text-green-500 flex items-center gap-1">Pages <ChevronDown size={14} /></li>
//             <li className="cursor-pointer hover:text-green-500 flex items-center gap-1">Blog <ChevronDown size={14} /></li>
//             <li className="cursor-pointer hover:text-green-500">About Us</li>
//             <li className="cursor-pointer hover:text-green-500">Contact Us</li>
//           </ul>

//           <div className="hidden md:flex items-center gap-2 text-green-500 font-semibold">
//             <Phone size={16} />
//             (219) 555-0114
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }



import { useState } from "react";
import { Search, Heart, ShoppingCart, Phone, ChevronDown, MapPin, Menu, X,} from "lucide-react";
import { Link } from "react-router-dom";

export default function EcobazarNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white">
      {/* Top Bar */}
      <div className="w-full text-xs md:text-sm border-b py-2 px-4 flex flex-wrap justify-between items-center text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          <span className="hidden sm:block">
            Store Location: Lincoln - 344, Illinois, Chicago, USA
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <span className="flex items-center gap-1 cursor-pointer">
            Eng <ChevronDown size={14} />
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            USD <ChevronDown size={14} />
          </span>
          <span className="cursor-pointer hidden sm:block">Sign In / Sign Up</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-green-600">
          Ecobazar
        </h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Search Bar (Desktop Only) */}
        <div className="hidden md:flex items-center w-1/2 border rounded-md overflow-hidden">
          <div className="flex items-center px-3 text-gray-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-2 outline-none text-sm"
          />
          <button className="bg-green-600 text-white px-6 py-2 text-sm">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6">
          <Heart className="cursor-pointer" />

          <div className="flex items-center gap-2 cursor-pointer">
            <ShoppingCart />
            <div className="text-sm">
              <p className="text-gray-500">Shopping cart:</p>
              <p className="font-semibold">$57.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex items-center border rounded-md overflow-hidden">
            <div className="flex items-center px-3 text-gray-500">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-2 outline-none text-sm"
            />
            <button className="bg-green-600 text-white px-6 py-2 text-sm">
              Search
            </button>
          </div>
        </div>
      )}

      {/* Bottom Menu Bar */}
      <nav className="w-full bg-gray-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            <li className="cursor-pointer hover:text-green-500 flex items-center gap-1">
              Home <ChevronDown size={14} />
            </li>
            <li className="cursor-pointer hover:text-green-500 flex items-center gap-1">
              Shop <ChevronDown size={14} />
            </li>
            <li className="cursor-pointer hover:text-green-500 flex items-center gap-1">
              Pages <ChevronDown size={14} />
            </li>
            <li className="cursor-pointer hover:text-green-500 flex items-center gap-1">
              Blog <ChevronDown size={14} />
            </li>
            <Link className="cursor-pointer hover:text-green-500">About Us</Link>
            <li className="cursor-pointer hover:text-green-500">Contact Us</li>
          </ul>

          {/* Phone (Desktop Only) */}
          <div className="hidden md:flex items-center gap-2 text-green-500 font-semibold">
            <Phone size={16} />
            (219) 555-0114
          </div>

          {/* Mobile Menu (Dropdown) */}
        </div>

        {menuOpen && (
          <ul className="md:hidden bg-gray-800 px-4 pb-4 space-y-3">
            <li className="hover:text-green-400 cursor-pointer">
              Home
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Shop
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Pages
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Blog
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Contact Us
            </li>

            <div className="flex items-center gap-2 text-green-400 font-semibold pt-3">
              <Phone size={16} />
              (219) 555-0114
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
}
