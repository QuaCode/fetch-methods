import { HydrateProvider } from '@/providers'
import { ListUsers } from './listUsers'
import getQueryClient from '@/utils/getQueryClient'
import { baseApi } from '@/apis/baseApi'
import { dehydrate } from '@tanstack/query-core'

const getData = () => baseApi.get('/users')

export default async function Users() {
 const queryClient = getQueryClient()
 await queryClient.prefetchQuery(['users'], getData)
 const dehydratedState = dehydrate(queryClient)

 return (
  <HydrateProvider state={dehydratedState}>
   <ListUsers />
  </HydrateProvider>
 )
}
