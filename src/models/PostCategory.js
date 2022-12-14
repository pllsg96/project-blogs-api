module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'posts_categories',
      underscored: true,
    });
  
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category,
        {
          through: PostCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId',
          as: 'categories',
        });
      
      models.Category.belongsToMany(models.BlogPost,
        {
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
          as: 'post',
        });
  }

  return PostCategory;
};