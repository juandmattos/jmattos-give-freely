import { ButtonProps } from '@/types/ui/buttonTypes'
const Button = ({
  children,
  onClick = () => {
    /* Default onClick function no action */
  },
  isDisabled = false,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className='w-full rounded bg-secondary p-2 text-white hover:bg-primary disabled:cursor-not-allowed disabled:bg-gray-400'
    >
      {children}
    </button>
  )
}

export default Button
