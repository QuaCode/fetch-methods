'use client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, useState } from 'react'

export const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
 const [client] = useState(new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }))

 return (
  <QueryClientProvider client={client}>
   {children}
   <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
 )
}
