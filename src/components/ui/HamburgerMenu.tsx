import { useState } from "react"
import MainNav from "./MainNav";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' flex flex-col items-center sm:hidden'>
      <button onClick={toggleMenu}>
        <svg
          className="size-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      { isOpen ? <MainNav isColumn={true} /> : null }
    </div>
  )
}

export default HamburgerMenu