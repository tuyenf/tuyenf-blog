import Post from '~/models/Post.js'

export default defineNitroPlugin(async () => {
  await Post.sync() // Tạo bảng nếu chưa có
})
