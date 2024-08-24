import Logo from './Logo'
import MainNav from './MainNav'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  return (
    <header className='bg-gray-800 p-4 text-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <Logo />
        <div className='hidden sm:block'>
          <MainNav />
        </div>
        <HamburgerMenu />
      </div>
    </header>
  )
}

export default Header
