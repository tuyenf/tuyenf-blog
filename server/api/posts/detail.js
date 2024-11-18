import Post from '~/models/Post.js'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const { id } = query

  if (!id) {
    throw createError({ statusCode: 400, message: 'ID is required' })
  }

  const post = await Post.findByPk(id)

  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  return post
})
