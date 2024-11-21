import Post from '~/models/Post.js'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { title, content, date } = body
  if (!title || !content || !date) {
    throw createError({ statusCode: 400, message: 'Invalid data' })
  }

  const newPost = await Post.create({ title, content, date })

  return { message: 'Post created successfully', post: newPost }
})
