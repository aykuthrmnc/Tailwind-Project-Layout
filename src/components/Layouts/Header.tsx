import useTheme from "~/hooks/useTheme";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Horizontalbar from "./Horizontalbar";
import { DENEME_MENU } from "~/constants/menu";
import Dropdown from "../Custom/Dropdown";

const Header = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <header className="border-b border-gray-300 text-gray-600 dark:border-gray-700 dark:text-gray-200">
      <div className="container mx-auto flex flex-wrap items-center p-5">
        <Link
          to="/"
          className="mb-4 flex items-center font-medium text-gray-900 dark:text-white lg:mb-0"
        >
          <span className="text-xl">AYKUTHRMNC</span>
        </Link>
        <nav className="order-last flex basis-full flex-wrap items-center justify-center gap-2 lg:order-none lg:ml-4 lg:basis-auto lg:pl-4">
          <Horizontalbar menuItems={DENEME_MENU} />
        </nav>
        <div className="mb-4 ms-auto flex md:mb-0">
          <button
            onClick={changeTheme}
            className="flex w-full cursor-pointer items-center rounded px-3 text-gray-700 transition-colors hover:text-gray-600 dark:text-white"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <Dropdown>
            <Dropdown.Item className="justify-center bg-transparent hover:bg-transparent  hover:text-gray-800 dark:hover:text-white">
              <FaUser />
            </Dropdown.Item>
            <Dropdown.Menu className="end-0 -translate-x-3">
              <Dropdown.Item
                as={NavLink}
                to="/about"
                // className="aria-[current=page]:bg-gray-700 aria-[current=page]:text-white"
              >
                Profil
              </Dropdown.Item>
              <Dropdown.Item onClick={() => console.log("Çıkış")}>
                Çıkış Yap
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <HeadlessDropdown
            name={<FaUser />}
            items={[
              {
                as: NavLink,
                name: "Profil",
                to: "/about",
                className:
                  "aria-[current=page]:bg-gray-700 aria-[current=page]:text-white",
              },
              { name: "Çıkış Yap", onClick: () => console.log("Çıkış yapıldı.") },
            ]}
          /> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
