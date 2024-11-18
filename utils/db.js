import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Kiểm tra đường dẫn chính xác
})

export default sequelize
