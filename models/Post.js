import { DataTypes } from 'sequelize'
import sequelize from '../utils/db.js'

// Định nghĩa model cho bài viết
const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

export default Post
