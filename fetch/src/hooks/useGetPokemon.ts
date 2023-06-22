'use client'
import { api } from '@/api/api'
import { ApiResponse } from '@/types'
import { useState, useEffect } from 'react'

export const useGetPokemon = <T>(url: string): ApiResponse<T> => {
 const [response, setResponse] = useState<ApiResponse<T>>({
  data: null,
  error: null,
  isLoading: true,
 })

 useEffect(() => {
  const fetchData = async () => {
   try {
    const result = await api.get<T>(url)
    setResponse({
     data: result,
     error: null,
     isLoading: false,
    })
   } catch (error) {
    setResponse({
     data: null,
     error,
     isLoading: false,
    })
   }
  }

  fetchData()
 }, [url])

 return response
}
