const User = require('./user.model')
const Role = require('./role.model')
const Basket = require('./basket.model')
const BasketProducts = require('./basetProducts.model')
const Book = require('./book.model')
const Categories = require('./categories.model')
const Rating = require('./rating.model')

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketProducts)
BasketProducts.belongsTo(Basket)

Book.hasMany(BasketProducts)
BasketProducts.belongsTo(Book)

Categories.belongsToMany(Book, {
    through: 'book_categories',
    foreignKey: 'bookId',
    otherKey: 'catId'
})

Book.belongsToMany(Categories, {
    through: 'book_categories',
    foreignKey: 'bookId',
    otherKey: 'catId'
})

User.belongsToMany(Role, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId'
})

Role.belongsToMany(User, {
    through: 'user_roles',
    foreignKey: 'userId',
    otherKey: 'roleId'
})

module.exports = {
    User,
    Role,
    Basket,
    BasketProducts,
    Book,
    Categories,
    Rating
}

