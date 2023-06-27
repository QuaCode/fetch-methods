import { useQuery } from '@tanstack/react-query'
import { baseApi } from '../baseApi'
import { TUser } from '@/types'
import { controller } from './controller.util'

const getData = () => baseApi.get<TUser[]>(`${controller}`)

export const useGetAllUsers = () => useQuery<TUser[]>({ queryKey: [], queryFn: getData })
