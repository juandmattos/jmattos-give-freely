import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <img src={'/icon.png'} alt='Give Freely logo' className={`h-12 w-auto sm:h-24`} />
    </Link>
  )
}

export default Logo
