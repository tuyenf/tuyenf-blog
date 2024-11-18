import Post from '~/models/Post.js'

export default defineEventHandler(async event => {
  try {
    const query = getQuery(event)

    const searchTerm = query.q || ''
    const sortBy = query.sortBy || 'createdAt'
    const order = query.order || 'ASC'

    // Tham số phân trang
    const page = Number.parseInt(query.page) || 1 // Trang hiện tại (mặc định là 1)
    const limit = Number.parseInt(query.limit) || 10 // Số bài viết mỗi trang (mặc định là 10)
    const offset = (page - 1) * limit // Tính offset

    // Kiểm tra sortBy hợp lệ
    const validSortColumns = ['id', 'title', 'createdAt']
    if (!validSortColumns.includes(sortBy)) {
      throw new Error(`Invalid sortBy column: ${sortBy}`)
    }

    // Truy vấn SQL với phân trang
    const posts = await Post.sequelize.query(
      `
        SELECT id, title, date
        FROM Posts
        WHERE title LIKE :searchTerm
        ORDER BY ${sortBy} ${order.toUpperCase()}
        LIMIT :limit OFFSET :offset
      `,
      {
        replacements: {
          searchTerm: `%${searchTerm}%`,
          limit,
          offset,
        },
        type: Post.sequelize.QueryTypes.SELECT,
      },
    )

    // Truy vấn để đếm tổng số bài viết phù hợp
    const countResult = await Post.sequelize.query(
      `
        SELECT COUNT(*) as total
        FROM Posts
        WHERE title LIKE :searchTerm
      `,
      {
        replacements: {
          searchTerm: `%${searchTerm}%`,
        },
        type: Post.sequelize.QueryTypes.SELECT,
      },
    )

    const totalItems = countResult[0]?.total || 0
    const totalPages = Math.ceil(totalItems / limit)

    return {
      data: posts,
      meta: {
        currentPage: page,
        totalPages,
        totalItems,
        perPage: limit,
      },
    }
  } catch (error) {
    console.error('Error in API:', error.message)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: error.message,
    })
  }
})
