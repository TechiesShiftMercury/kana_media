import { FaHamburger } from "react-icons/fa";
import Logo from "../assets/variable_logos/Logo"


const Header = ({onMenuClick}) => {

  return (
    <header className="full-width w-full flex justify-between items-center px-8 md:py-2 absolute top-0 z-50">
      <Logo fillColor={'green'} width={'12rem'} />
      {/* menu */}
      <button className="flex items-center gap-2 fixed top-5 right-12 uppercase text-green-700  hover:text-white"
        onClick={() => onMenuClick(true)}
      >
        menu
        <FaHamburger />
      </button>
    </header>
  )
}

export default Header