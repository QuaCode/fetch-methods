export type ApiResponse<T> = {
 data: T | null
 error: unknown | null
 isLoading: boolean
}
