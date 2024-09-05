import React from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

const PagesDropdown = () => {
  return (
    <div className="inline-block relative group bg-gray-200 rounded-md cursor-pointer">
      <div className="flex items-center gap-1">
        <p className="text-lg text-white font-semibold">Pages</p>
        <GoTriangleDown className="text-white" />
      </div>

      {/* Dropdown menu */}
      <div className="absolute -left-6 z-10 hidden group-hover:block">
        <ul className="bg-white flex flex-col shadow-lg rounded-md w-40 py-1">
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange text-lg px-4 py-2'
                  : 'text-black hover:text-lightorange text-lg px-4 py-2'
              }
            >
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-team"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange text-lg px-4 py-2'
                  : 'text-black hover:text-lightorange text-lg px-4 py-2'
              }
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange text-lg px-4 py-2'
                  : 'text-black hover:text-lightorange text-lg px-4 py-2'
              }
            >
              Testimonials
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PagesDropdown;
