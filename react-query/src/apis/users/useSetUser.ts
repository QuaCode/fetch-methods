import { useMutation, useQuery } from '@tanstack/react-query'
import { baseApi } from '../baseApi'
import { TUser } from '@/types'

type dataToSend = {
 userName: string
}

const getData = (data: dataToSend) => baseApi.post<TUser>('/ppp', data)

export const useSetUser = () => useMutation({ mutationFn: getData, mutationKey: ['users'] })
