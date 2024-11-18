import Post from '~/models/Post.js'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const { id } = query

  if (!id) {
    throw createError({ statusCode: 400, message: 'ID is required' })
  }

  const deleted = await Post.destroy({ where: { id } })

  if (!deleted) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  return { message: 'Post deleted successfully' }
})
