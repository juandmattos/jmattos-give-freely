import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 p-8'>
      <h1 className='text-3xl font-bold'>404 - Page not found!</h1>
      <p>
        <Link to='/'>
          <span className='text-primary hover:text-secondary'>
            Back to home
          </span>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
