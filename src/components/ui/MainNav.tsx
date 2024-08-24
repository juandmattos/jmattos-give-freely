import { NavLink } from 'react-router-dom'

const MainNav = ({isColumn = false}: {isColumn?: boolean}) => {
  return (
    <nav className='bg-gray-800 p-4'>
      <div className={`container mx-auto flex ${isColumn ? 'flex-col': 'flex-row'} items-center justify-between gap-8`}>
        <NavLink
          to='/products'
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-secondary text-xl text-white'
              : 'text-xl text-white  hover:text-gray-300'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/products-add'
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-secondary text-xl text-white'
              : 'text-xl text-white hover:text-gray-300'
          }
        >
          Add Product
        </NavLink>
      </div>
    </nav>
  )
}

export default MainNav
