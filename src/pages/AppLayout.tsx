import { Outlet } from 'react-router-dom'
import Header from '@/components/ui/Header'

const AppLayout = () => {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <div className='flex flex-1 flex-col md:flex-row'>
        <main className='flex-1 overflow-scroll bg-gray-50 p-8 md:px-20 md:py-16 md:pb-24'>
          <div className='mx-auto flex max-w-[120rem] flex-col gap-8'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AppLayout
