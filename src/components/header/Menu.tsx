import Icon from "../shared/Icons";
import Link from "next/link";

const Menu: React.FC = () => {
  return (
    <div id="tummenu">
      <nav className="px-2">
        <ul className="flex flex-col">
          <li>
            <Link
              href={"/"}
              className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors"
            >
              {window.location.href === "http://localhost:3000/" ? (
                <Icon name="acthome" />
              ) : (
                <Icon name="home" />
              )}
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/search"}
              className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors"
            >
              {window.location.href === "http://localhost:3000/search" ? (
                <Icon name="actsearch" />
              ) : (
                <Icon name="search" />
              )}
              Search
            </Link>
          </li>
          <li>
            <Link
              href={"/collection"}
              className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors"
            >
              {window.location.href === "http://localhost:3000/collection" ? (
                <Icon name="actcollection" />
              ) : (
                <Icon name="lib" />
              )}
              My Collection
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
