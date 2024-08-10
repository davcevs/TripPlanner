import { Link, NavLink } from "react-router-dom";
import { Regions } from "../types/regions.enum";

function Header() {
  const regions = Object.values(Regions);

  return (
    <header className="bg-white text-black">
      <div className="grid place-items-center py-6">
        <h1 className="grid place-items-center text-3xl font-bold">
          <span className="text-red-500 animate-spin ">🌎</span>
          <Link to="/">Trip Planner</Link>
        </h1>
      </div>
      <nav className="flex justify-center items-center gap-x-4">
        <ul className="flex flex-wrap items-center gap-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          {regions.map((region) => (
            <li
              key={region}
              className="border-black border-b-2 py-1 px-4 text-sm"
            >
              <NavLink
                to={`/${region}`}
                className={({ isActive }) =>
                  isActive ? "text-gray-500" : "text-black"
                }
              >
                {region}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
