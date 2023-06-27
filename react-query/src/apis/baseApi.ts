import { Methods } from '@/types'

const apiUrl = String(process.env.NEXT_PUBLIC_API)

class ApiClient {
 private accessToken: string | undefined

 private async fetchToken(): Promise<string> {
  // Lógica para obtener el token de acceso (ejemplo: desde localStorage)
  // const token = localStorage.getItem('accessToken')
  // Necesita el 'use client' de NextJs para funcionar con localStorage

  this.accessToken = 'accessToken'
  if (this.accessToken) {
   return this.accessToken
  }

  // Si el token no está en localStorage, realizar una llamada para obtenerlo
  return new Promise<string>((resolve, reject) => {
   setTimeout(() => {
    const fetchedToken = 'exampleToken123'
    resolve(fetchedToken)
   }, 2000)
  })
 }

 private async handleErrors(response: Response): Promise<Response> {
  if (!response.ok) {
   // Podríamos meter algún toast redireccionar a alguna página que maneje los errores y los muestre por pantalla.
   console.log({ response })
   throw new Error(`HTTP error, status code: ${response.status}`)
  }
  return response
 }

 private async fetch<T>({
  body,
  url,
  method = 'GET',
 }: {
  url: string
  body?: BodyInit
  method?: Methods
 }): Promise<T> {
  const token = await this.fetchToken()
  const headers = {
   Authorization: `Bearer ${token}`,
  }

  const response = await fetch(`${apiUrl}${url}`, {
   method,
   headers,
   body,
  })

  await this.handleErrors(response)
  return response.json()
 }

 public async get<T>(url: string): Promise<T> {
  return await this.fetch<T>({ url, method: 'GET' })
 }

 public async post<T>(url: string, body: any): Promise<T> {
  return await this.fetch<T>({ url, method: 'POST', body })
 }

 public async delete<T>(url: string): Promise<T> {
  return await this.fetch<T>({ url, method: 'DELETE' })
 }
}

export const baseApi = new ApiClient()
