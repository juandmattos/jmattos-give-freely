import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const Root = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 60 seconds
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <ReactQueryDevtools />
        {children}
      </>
    </QueryClientProvider>
  )
}

export default Root
