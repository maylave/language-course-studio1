const BASE_URL = import.meta.env.VITE_API_URL || 'https://api.skillquest.local/v1'

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number>
}

class HttpClient {
  private getHeaders(customHeaders?: HeadersInit): HeadersInit {
    const token = localStorage.getItem('sq_token')
    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...customHeaders,
    }
  }

  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { params, headers, ...restOptions } = options

    let url = `${BASE_URL}${endpoint}`
    if (params) {
      const searchParams = new URLSearchParams()
      Object.entries(params).forEach(([key, val]) => searchParams.append(key, String(val)))
      url += `?${searchParams.toString()}`
    }

    const response = await fetch(url, {
      headers: this.getHeaders(headers),
      ...restOptions,
    })

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}))
      throw new Error(errorBody.message || `HTTP Error: ${response.status}`)
    }

    return response.json() as Promise<T>
  }

  get<T>(endpoint: string, params?: Record<string, string | number>) {
    return this.request<T>(endpoint, { method: 'GET', params })
  }

  post<T>(endpoint: string, body?: unknown) {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    })
  }

  put<T>(endpoint: string, body?: unknown) {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    })
  }
}

export const http = new HttpClient()