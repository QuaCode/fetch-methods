import { useQuery } from '@tanstack/react-query'
import { baseApi } from '../baseApi'
import { TUser } from '@/types'

const getData = () => baseApi.get<TUser[]>('/users')

export const useGetAllUsers = () => useQuery<TUser[]>({ queryKey: ['users'], queryFn: getData })
