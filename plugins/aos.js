import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('page:finish', () => {
      AOS.init({
        // Các cấu hình tùy chọn, ví dụ:
        offset: 200, // Khoảng cách bắt đầu hiệu ứng
        duration: 600, // Thời gian hiệu ứng (ms)
        easing: 'ease-in-out', // Hiệu ứng easing
        once: false, // Chỉ chạy hiệu ứng một lần
      })
    })
  }
})
