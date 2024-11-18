import { useNuxtApp } from '#app'
import createClient from 'openapi-fetch'
import { computed, ref } from 'vue'
import type { paths } from '~/@types/tApi'

export default function useApiFetch() {
  const { $config } = useNuxtApp()

  // State quản lý số lượng request đang loading
  const loadingCount = ref(0)
  const isLoading = computed(() => loadingCount.value > 0)

  // Hàm bọc request để xử lý logic chung
  // eslint-disable-next-line ts/no-unsafe-function-type
  function wrap<T extends Function>(originalFn: T): T {
    const wrapFn = async (...args: any) => {
      try {
        loadingCount.value += 1
        const res = await originalFn(...args)
        const rawResponse = res.response as Response
        if (rawResponse.status === 403 || rawResponse.status === 401) {
          console.error('Unauthorized or Forbidden')
        }

        if (res.error) {
          throw res.error
        }

        return res
      } catch (error) {
        console.error('API Error:', error)
        throw error
      } finally {
        loadingCount.value -= 1
      }
    }

    return wrapFn as unknown as T
  }

  // Tạo client từ `openapi-fetch`
  const client = createClient<paths>({
    baseUrl: $config.public.mtApiUrl, // URL API từ cấu hình Nuxt
    credentials: 'include',
  })

  // Export các method đã bọc logic
  return {
    loadingCount,
    isLoading,
    get: wrap(client.GET),
    post: wrap(client.POST),
    put: wrap(client.PUT),
    patch: wrap(client.PATCH),
    del: wrap(client.DELETE),
  }
}
