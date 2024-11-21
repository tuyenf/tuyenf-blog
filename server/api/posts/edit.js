import Post from '~/models/Post.js'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id, title, content, date } = body

  if (!id || !title || !content || !date) {
    throw createError({ statusCode: 400, message: 'Invalid data' })
  }

  const post = await Post.findByPk(id)

  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  post.title = title
  post.content = content
  post.date = date
  await post.save()

  return { message: 'Post updated successfully', post }
})
