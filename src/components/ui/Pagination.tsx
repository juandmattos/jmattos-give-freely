import { PaginationProps } from '@/types/ui/paginationTypes'
import Button from './Button'

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className='mt-4 flex justify-center'>
      <div className='min-w-[78px]'>
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
      </div>
      <span className='hidden px-4 py-2 sm:block'>
        Page {currentPage} of <span className='font-bold'>{totalPages}</span>
      </span>
      <span className='px-4 py-2 sm:hidden'>
        {currentPage}/<span className='font-bold'>{totalPages}</span>
      </span>
      <div className='min-w-[78px]'>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Pagination
